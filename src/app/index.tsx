import { Redirect } from 'expo-router';

import { BrandSplash } from '@/components/brand-splash';
import { useAuth } from '@/providers/auth-provider';

export default function Index() {
  const { loading, profile, session } = useAuth();
  if (loading) return <BrandSplash />;
  if (!session) return <Redirect href="/sign-in" />;
  return <Redirect href={profile?.onboarding_status === 'complete' ? '/(tabs)' : '/onboarding/consent'} />;
}
