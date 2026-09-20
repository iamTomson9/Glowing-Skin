import { Redirect, Tabs } from 'expo-router';
import { CircleUserRound, House, PackageOpen, ShoppingBasket } from 'lucide-react-native';

import { colors } from '@/theme/tokens';
import { useAuth } from '@/providers/auth-provider';

export default function TabsLayout() {
  const { loading, session } = useAuth();
  if (!loading && !session) return <Redirect href="/sign-in" />;
  if (loading) return null;
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.ink, tabBarInactiveTintColor: colors.muted, tabBarLabelStyle: { fontSize: 11, fontWeight: '700' }, tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line, height: 68, paddingBottom: 8, paddingTop: 8 } }}>
      <Tabs.Screen name="index" options={{ title: 'Today', tabBarIcon: ({ color }) => <House color={color} size={22} /> }} />
      <Tabs.Screen name="shelfie" options={{ title: 'Shelfie', tabBarIcon: ({ color }) => <PackageOpen color={color} size={22} /> }} />
      <Tabs.Screen name="shopping" options={{ title: 'Shopping', tabBarIcon: ({ color }) => <ShoppingBasket color={color} size={22} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color }) => <CircleUserRound color={color} size={22} /> }} />
    </Tabs>
  );
}
