import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthField } from '@/components/auth/auth-field';
import { AuthMessage } from '@/components/auth/auth-message';
import { AuthShell } from '@/components/auth/auth-shell';
import { supabase } from '@/lib/supabase';
import { colors, spacing, type } from '@/theme/tokens';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn() {
    if (!email.trim() || !password) return setError('Enter your email and password.');
    if (!supabase) return setError('Supabase is not configured for this build.');
    setLoading(true); setError(null);
    const { error: authError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setError(authError?.message ?? null); setLoading(false);
  }

  return <AuthShell title="Sign in" description="Open your saved routine, products, and progress.">
    <AuthMessage text={error} />
    <AuthField label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoComplete="email" keyboardType="email-address" returnKeyType="next" />
    <AuthField label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoComplete="current-password" secureTextEntry returnKeyType="done" onSubmitEditing={signIn} />
    <AuthButton loading={loading} onPress={signIn}>Sign in</AuthButton>
    <Link href="/forgot-password" style={styles.link}>Forgot password?</Link>
    <Text style={styles.switch}>New to Glowing Skin? <Link href="/sign-up" style={styles.link}>Create an account</Link></Text>
  </AuthShell>;
}

const styles = StyleSheet.create({ link: { ...type.bodySmall, color: colors.forest, fontWeight: '800', textAlign: 'center' }, switch: { ...type.bodySmall, color: colors.muted, textAlign: 'center', marginTop: spacing.xs } });
