import { StyleSheet, Text } from 'react-native';

import { colors, radius, spacing, type } from '@/theme/tokens';

export function AuthMessage({ kind = 'error', text }: { kind?: 'error' | 'success'; text?: string | null }) {
  if (!text) return null;
  return <Text accessibilityLiveRegion="polite" style={[styles.message, kind === 'success' && styles.success]}>{text}</Text>;
}

const styles = StyleSheet.create({ message: { ...type.bodySmall, color: '#8B2E20', backgroundColor: '#FBE9E5', borderRadius: radius.xs, padding: spacing.sm }, success: { color: colors.forest, backgroundColor: colors.mintSoft } });

