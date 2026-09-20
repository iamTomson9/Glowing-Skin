import { Redirect } from 'expo-router';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useAuth } from '@/providers/auth-provider';
import { colors } from '@/theme/tokens';

export default function Index() {
  const { loading, profile, session } = useAuth();
  if (loading) return <View style={styles.loading}><ActivityIndicator color={colors.forest} /></View>;
  if (!session) return <Redirect href="/sign-in" />;
  return <Redirect href={profile?.onboarding_status === 'complete' ? '/(tabs)' : '/onboarding/consent'} />;
}

const styles = StyleSheet.create({ loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background } });
