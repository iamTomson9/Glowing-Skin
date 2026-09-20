import { LogOut, ShieldCheck } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AuthMessage } from '@/components/auth/auth-message';
import { Page, SectionHeader } from '@/components/page';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/auth-provider';
import { colors, radius, spacing, type } from '@/theme/tokens';

export default function ProfileScreen() {
  const { profile, profileError, session } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function signOut() {
    if (!supabase) return;
    setLoading(true); setError(null);
    const { error: authError } = await supabase.auth.signOut();
    setError(authError?.message ?? null); setLoading(false);
  }

  return <Page><Text style={styles.eyebrow}>ACCOUNT</Text><Text style={styles.title}>Profile</Text><Text style={styles.subtitle}>Your saved onboarding details and privacy controls will live here.</Text><View style={styles.account}><View style={styles.avatar}><Text style={styles.avatarText}>{session?.user.email?.slice(0, 1).toUpperCase() ?? '?'}</Text></View><View style={styles.accountCopy}><Text style={styles.email}>{session?.user.email}</Text><Text style={styles.meta}>{profile ? `Onboarding: ${profile.onboarding_status.replace('_', ' ')}` : 'Checking database profile'}</Text></View></View><AuthMessage text={profileError ? `Profile could not be loaded: ${profileError}` : error} /><SectionHeader title="Account status" /><View style={styles.status}><ShieldCheck color={colors.forest} size={22} /><View style={styles.statusCopy}><Text style={styles.statusTitle}>{profile ? 'Private profile connected' : 'Authentication connected'}</Text><Text style={styles.statusText}>{profile ? 'This account profile was loaded through its owner scoped database policy.' : 'The database profile will appear after the profile migration is applied.'}</Text></View></View><Pressable accessibilityRole="button" disabled={loading} onPress={signOut} style={({ pressed }) => [styles.signOut, pressed && styles.pressed]}><LogOut color={colors.coral} size={20} /><Text style={styles.signOutText}>{loading ? 'Signing out...' : 'Sign out'}</Text></Pressable><Text style={styles.disclaimer}>Glowing Skin provides educational self care guidance. It does not diagnose or treat medical conditions.</Text></Page>;
}

const styles = StyleSheet.create({ eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm }, account: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.lg, marginTop: spacing.lg, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.line }, avatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: colors.mint, alignItems: 'center', justifyContent: 'center' }, avatarText: { fontSize: 18, fontWeight: '800', color: colors.forest }, accountCopy: { flex: 1 }, email: { ...type.heading, color: colors.ink }, meta: { ...type.caption, color: colors.muted, marginTop: 3 }, status: { flexDirection: 'row', gap: spacing.md, backgroundColor: colors.mintSoft, borderRadius: radius.sm, padding: spacing.md }, statusCopy: { flex: 1 }, statusTitle: { ...type.heading, color: colors.forest }, statusText: { ...type.bodySmall, color: colors.forest, marginTop: 3 }, signOut: { minHeight: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, borderWidth: 1, borderColor: colors.line, borderRadius: radius.xs, marginTop: spacing.xl }, pressed: { opacity: 0.7 }, signOutText: { ...type.heading, color: colors.coral }, disclaimer: { ...type.caption, color: colors.muted, lineHeight: 18, marginTop: spacing.xl } });
