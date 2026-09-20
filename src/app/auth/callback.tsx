import { Redirect, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import { AuthMessage } from '@/components/auth/auth-message';
import { AuthShell } from '@/components/auth/auth-shell';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/auth-provider';

export default function AuthCallbackScreen() {
  const params = useLocalSearchParams<{ access_token?: string; code?: string; refresh_token?: string }>();
  const { session } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase || session) return;
    async function complete() {
      if (params.code) {
        const { error: callbackError } = await supabase!.auth.exchangeCodeForSession(params.code);
        setError(callbackError?.message ?? null);
      } else if (params.access_token && params.refresh_token) {
        const { error: callbackError } = await supabase!.auth.setSession({ access_token: params.access_token, refresh_token: params.refresh_token });
        setError(callbackError?.message ?? null);
      } else {
        setError('This sign in link is incomplete or has expired.');
      }
    }
    complete();
  }, [params.access_token, params.code, params.refresh_token, session]);

  if (session) return <Redirect href="/(tabs)" />;
  return <AuthShell title="Confirming your account" description="Please keep this screen open while we verify the link."><AuthMessage text={error} /></AuthShell>;
}

