import { Redirect } from 'expo-router';
import { useState } from 'react';

import { AuthButton } from '@/components/auth/auth-button';
import { AuthField } from '@/components/auth/auth-field';
import { AuthMessage } from '@/components/auth/auth-message';
import { AuthShell } from '@/components/auth/auth-shell';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/auth-provider';

export default function ResetPasswordScreen() {
  const { loading: sessionLoading, session } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [complete, setComplete] = useState(false);

  async function updatePassword() {
    if (!supabase) return setError('Supabase is not configured for this build.');
    if (password.length < 8) return setError('Use at least 8 characters for your password.');
    if (password !== confirmPassword) return setError('The passwords do not match.');
    setLoading(true); setError(null);
    const { error: authError } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (authError) return setError(authError.message);
    setComplete(true);
  }

  if (complete) return <Redirect href="/(tabs)" />;
  if (!sessionLoading && !session) return <Redirect href="/forgot-password" />;
  return <AuthShell title="Create a new password" description="Use at least 8 characters.">
    <AuthMessage text={error} />
    <AuthField label="New password" value={password} onChangeText={setPassword} autoComplete="new-password" secureTextEntry />
    <AuthField label="Confirm new password" value={confirmPassword} onChangeText={setConfirmPassword} autoComplete="new-password" secureTextEntry onSubmitEditing={updatePassword} />
    <AuthButton loading={loading || sessionLoading} onPress={updatePassword}>Update password</AuthButton>
  </AuthShell>;
}
