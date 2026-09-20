import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthMessage } from '@/components/auth/auth-message';
import { AuthShell } from '@/components/auth/auth-shell';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/auth-provider';
import { colors, radius, spacing, type } from '@/theme/tokens';

const CONSENT_VERSION = '2026-09-20';

type ConsentChoiceProps = {
  checked: boolean;
  label: string;
  onPress: () => void;
  required?: boolean;
};

function ConsentChoice({ checked, label, onPress, required = false }: ConsentChoiceProps) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      onPress={onPress}
      style={({ pressed }) => [styles.choice, pressed && styles.pressed]}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>
      <View style={styles.choiceCopy}>
        <Text style={styles.choiceLabel}>{label}</Text>
        <Text style={styles.choiceMeta}>{required ? 'Required' : 'Optional'}</Text>
      </View>
    </Pressable>
  );
}

export default function ConsentScreen() {
  const { loading: authLoading, refreshProfile, session } = useAuth();
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [guidanceAccepted, setGuidanceAccepted] = useState(false);
  const [notificationsAccepted, setNotificationsAccepted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase || !session) return;

    let active = true;
    supabase
      .from('consents')
      .select('consent_type, accepted')
      .eq('user_id', session.user.id)
      .eq('version', CONSENT_VERSION)
      .then(({ data, error }) => {
        if (!active) return;
        if (error) {
          setMessage(error.message);
        } else {
          const decisions = new Map(data.map((item) => [item.consent_type, item.accepted]));
          setPrivacyAccepted(decisions.get('privacy_notice') ?? false);
          setGuidanceAccepted(decisions.get('guidance_disclaimer') ?? false);
          setNotificationsAccepted(decisions.get('notifications') ?? false);
          setSaved(decisions.has('privacy_notice') && decisions.has('guidance_disclaimer'));
        }
        setLoading(false);
      });

    return () => { active = false; };
  }, [session]);

  if (!authLoading && !session) return <Redirect href="/sign-in" />;

  async function saveChoices() {
    if (!supabase || !session || !privacyAccepted || !guidanceAccepted) return;
    setSaving(true);
    setMessage(null);

    const { error } = await supabase.from('consents').upsert([
      { user_id: session.user.id, consent_type: 'privacy_notice', accepted: true, version: CONSENT_VERSION },
      { user_id: session.user.id, consent_type: 'guidance_disclaimer', accepted: true, version: CONSENT_VERSION },
      { user_id: session.user.id, consent_type: 'notifications', accepted: notificationsAccepted, version: CONSENT_VERSION },
    ], { onConflict: 'user_id,consent_type,version', ignoreDuplicates: true });

    if (error) {
      setMessage(error.message);
      setSaving(false);
      return;
    }

    const { error: profileUpdateError } = await supabase
      .from('profiles')
      .update({ onboarding_status: 'in_progress' })
      .eq('id', session.user.id);

    if (profileUpdateError) {
      setMessage(profileUpdateError.message);
    } else {
      await refreshProfile();
      setSaved(true);
      setMessage('Saved. Your next onboarding step is Focus Area.');
    }
    setSaving(false);
  }

  return (
    <AuthShell
      description="Confirm how your data is used and what this app can safely help with."
      title="Before we personalize your routine"
    >
      {loading ? <ActivityIndicator color={colors.forest} /> : (
        <>
          <ConsentChoice checked={privacyAccepted} label="I agree that Glowing Skin may store my onboarding answers and use them to personalize my routine." onPress={() => !saved && setPrivacyAccepted((value) => !value)} required />
          <ConsentChoice checked={guidanceAccepted} label="I understand this app provides skincare guidance, not medical diagnosis or treatment." onPress={() => !saved && setGuidanceAccepted((value) => !value)} required />
          <ConsentChoice checked={notificationsAccepted} label="Allow routine and shopping reminder notifications." onPress={() => !saved && setNotificationsAccepted((value) => !value)} />
          <Text style={styles.note}>You can use the core app without notifications. You can change notification access later in Settings.</Text>
          {message ? <AuthMessage kind={saved ? 'success' : 'error'} text={message} /> : null}
          <AuthButton disabled={saved || !privacyAccepted || !guidanceAccepted} loading={saving} onPress={saveChoices}>
            {saved ? 'Consent saved' : 'Save consent'}
          </AuthButton>
        </>
      )}
    </AuthShell>
  );
}

const styles = StyleSheet.create({
  choice: { minHeight: 64, flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.xs, padding: spacing.md },
  pressed: { opacity: 0.76 },
  checkbox: { width: 22, height: 22, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.muted, borderRadius: radius.xs, marginTop: 1 },
  checkboxChecked: { backgroundColor: colors.forest, borderColor: colors.forest },
  checkmark: { color: colors.surface, fontSize: 14, fontWeight: '800' },
  choiceCopy: { flex: 1, gap: spacing.xs },
  choiceLabel: { ...type.bodySmall, color: colors.ink },
  choiceMeta: { ...type.label, color: colors.muted, textTransform: 'uppercase' },
  note: { ...type.caption, color: colors.muted },
});
