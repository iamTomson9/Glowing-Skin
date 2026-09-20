import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native';

import { colors, radius, spacing, type } from '@/theme/tokens';

export function AuthField({ label, ...props }: TextInputProps & { label: string }) {
  return <View style={styles.wrap}><Text style={styles.label}>{label}</Text><TextInput {...props} accessibilityLabel={label} placeholderTextColor={colors.muted} style={styles.input} /></View>;
}

const styles = StyleSheet.create({ wrap: { gap: 6 }, label: { ...type.caption, color: colors.ink, fontWeight: '700' }, input: { minHeight: 48, borderWidth: 1, borderColor: colors.line, borderRadius: radius.xs, paddingHorizontal: spacing.md, backgroundColor: colors.surface, color: colors.ink, fontSize: 16 } });

