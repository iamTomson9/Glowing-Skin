import type { LucideIcon } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, type } from '@/theme/tokens';

export function EmptyState({ description, icon: Icon, title }: { description: string; icon: LucideIcon; title: string }) {
  return <View style={styles.wrap}><View style={styles.icon}><Icon color={colors.forest} size={24} /></View><Text style={styles.title}>{title}</Text><Text style={styles.description}>{description}</Text></View>;
}

const styles = StyleSheet.create({ wrap: { alignItems: 'center', backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line, borderRadius: radius.sm, padding: spacing.xl, marginTop: spacing.xl }, icon: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.mintSoft, alignItems: 'center', justifyContent: 'center' }, title: { ...type.section, color: colors.ink, marginTop: spacing.md, textAlign: 'center' }, description: { ...type.body, color: colors.muted, marginTop: spacing.sm, textAlign: 'center', maxWidth: 380 } });

