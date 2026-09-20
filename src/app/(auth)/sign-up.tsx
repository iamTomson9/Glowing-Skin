import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthField } from '@/components/auth/auth-field';
import { AuthMessage } from '@/components/auth/auth-message';
import { AuthShell } from '@/components/auth/auth-shell';
import { authRedirect } from '@/lib/auth-redirect';
import { supabase } from '@/lib/supabase';
import { colors, spacing, type } from '@/theme/tokens';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function signUp() {
    if (!email.trim()) return setError('Enter your email address.');
    if (password.length < 8) return setError('Use at least 8 characters for your password.');
    if (password !== confirmPassword) return setError('The passwords do not match.');
    if (!supabase) return setError('Supabase is not configured for this build.');
    setLoading(true); setError(null); setSuccess(null);
    const { data, error: authError } = await supabase.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: authRedirect('auth/callback') } });
    setLoading(false);
    if (authError) return setError(authError.message);
    if (!data.session) setSuccess('Check your email to confirm your account, then return to sign in.');
  }

  return <AuthShell title="Create your account" description="Save your skincare routine, products, and progress.">
    <AuthMessage text={error} /><AuthMessage kind="success" text={success} />
    <AuthField label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoComplete="email" keyboardType="email-address" />
    <AuthField label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoComplete="new-password" secureTextEntry />
    <AuthField label="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} autoCapitalize="none" autoComplete="new-password" secureTextEntry onSubmitEditing={signUp} />
    <AuthButton loading={loading} onPress={signUp}>Create account</AuthButton>
    <Text style={styles.note}>Consent choices come next. Creating an account does not opt you into notifications.</Text>
    <Text style={styles.switch}>Already have an account? <Link href="/sign-in" style={styles.link}>Sign in</Link></Text>
  </AuthShell>;
}

const styles = StyleSheet.create({ note: { ...type.caption, color: colors.muted, lineHeight: 18 }, link: { color: colors.forest, fontWeight: '800' }, switch: { ...type.bodySmall, color: colors.muted, textAlign: 'center', marginTop: spacing.xs } });
