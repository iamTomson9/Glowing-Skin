import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthField } from '@/components/auth/auth-field';
import { AuthMessage } from '@/components/auth/auth-message';
import { AuthShell } from '@/components/auth/auth-shell';
import { authRedirect } from '@/lib/auth-redirect';
import { supabase } from '@/lib/supabase';
import { colors, type } from '@/theme/tokens';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function sendReset() {
    if (!email.trim()) return setError('Enter your email address.');
    if (!supabase) return setError('Supabase is not configured for this build.');
    setLoading(true); setError(null); setSuccess(null);
    const { error: authError } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: authRedirect('reset-password') });
    setLoading(false);
    if (authError) return setError(authError.message);
    setSuccess('If an account exists for that email, a reset link is on its way.');
  }

  return <AuthShell title="Reset your password" description="Enter your email and we will send a recovery link.">
    <AuthMessage text={error} /><AuthMessage kind="success" text={success} />
    <AuthField label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoComplete="email" keyboardType="email-address" onSubmitEditing={sendReset} />
    <AuthButton loading={loading} onPress={sendReset}>Send recovery link</AuthButton>
    <Link href="/sign-in" style={styles.link}>Back to sign in</Link>
  </AuthShell>;
}

const styles = StyleSheet.create({ link: { ...type.bodySmall, color: colors.forest, fontWeight: '800', textAlign: 'center' } });
