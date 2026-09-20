import { Redirect } from 'expo-router';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useAuth } from '@/providers/auth-provider';
import { colors } from '@/theme/tokens';

export default function Index() {
  const { loading, session } = useAuth();
  if (loading) return <View style={styles.loading}><ActivityIndicator color={colors.forest} /></View>;
  return <Redirect href={session ? '/(tabs)' : '/sign-in'} />;
}

const styles = StyleSheet.create({ loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background } });
