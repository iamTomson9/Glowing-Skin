import type { PropsWithChildren } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { colors, radius, spacing } from '@/theme/tokens';

export function AuthButton({ children, disabled, loading, onPress }: PropsWithChildren<{ disabled?: boolean; loading?: boolean; onPress: () => void }>) {
  return <Pressable accessibilityRole="button" disabled={disabled || loading} onPress={onPress} style={({ pressed }) => [styles.button, (disabled || loading) && styles.disabled, pressed && styles.pressed]}>{loading ? <ActivityIndicator color={colors.surface} /> : <Text style={styles.text}>{children}</Text>}</Pressable>;
}

const styles = StyleSheet.create({ button: { minHeight: 48, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.forest, borderRadius: radius.xs, paddingHorizontal: spacing.md }, disabled: { opacity: 0.55 }, pressed: { opacity: 0.82 }, text: { color: colors.surface, fontSize: 15, fontWeight: '800' } });

