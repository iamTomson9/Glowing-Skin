import type { PropsWithChildren } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing, type } from '@/theme/tokens';

export function Page({ children }: PropsWithChildren) {
  return <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}><ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}><View style={styles.content}>{children}</View></ScrollView></SafeAreaView>;
}

export function SectionHeader({ detail, title }: { detail?: string; title: string }) {
  return <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>{title}</Text>{detail ? <Text style={styles.sectionDetail}>{detail}</Text> : null}</View>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { flexGrow: 1, alignItems: 'center' },
  content: { width: '100%', maxWidth: 720, paddingHorizontal: spacing.md, paddingTop: Platform.OS === 'web' ? spacing.xl : spacing.md, paddingBottom: 100 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', gap: spacing.md, marginTop: spacing.xl, marginBottom: spacing.md },
  sectionTitle: { ...type.section, color: colors.ink },
  sectionDetail: { ...type.caption, color: colors.muted },
});
