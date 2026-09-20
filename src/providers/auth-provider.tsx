import type { Session } from '@supabase/supabase-js';
import { createContext, type PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import type { Database } from '@/types/database';

type AuthContextValue = {
  configured: boolean;
  loading: boolean;
  profile: Database['public']['Tables']['profiles']['Row'] | null;
  profileError: string | null;
  refreshProfile: () => Promise<void>;
  session: Session | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const [profile, setProfile] = useState<Database['public']['Tables']['profiles']['Row'] | null>(null);
  const [profileError, setProfileError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;

    let active = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!active) return;
      setSession(error ? null : data.session);
      setLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (!nextSession) {
        setProfile(null);
        setProfileError(null);
      }
      setLoading(false);
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!supabase || !session) return;
    const { data, error } = await supabase.from('profiles').select('id, onboarding_status, created_at, updated_at').eq('id', session.user.id).single();
    setProfile(data);
    setProfileError(error?.message ?? null);
  }, [session]);

  useEffect(() => {
    if (!supabase || !session) return;
    let active = true;
    supabase.from('profiles').select('id, onboarding_status, created_at, updated_at').eq('id', session.user.id).single().then(({ data, error }) => {
      if (!active) return;
      setProfile(data);
      setProfileError(error?.message ?? null);
    });
    return () => { active = false; };
  }, [session]);

  const currentProfile = profile?.id === session?.user.id ? profile : null;
  const currentProfileError = session ? profileError : null;
  const value = useMemo(() => ({ configured: isSupabaseConfigured, loading, profile: currentProfile, profileError: currentProfileError, refreshProfile, session }), [currentProfile, currentProfileError, loading, refreshProfile, session]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
