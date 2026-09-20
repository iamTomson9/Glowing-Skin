import { PackagePlus, Plus } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Page, SectionHeader } from '@/components/page';
import { useApp } from '@/state/app-context';
import { colors, radius, spacing, type } from '@/theme/tokens';

export default function ShelfieScreen() {
  const { inventory } = useApp();
  return <Page>
    <View style={styles.headingRow}><View style={styles.headingCopy}><Text style={styles.eyebrow}>YOUR PRODUCTS</Text><Text style={styles.title}>Shelfie</Text><Text style={styles.subtitle}>Track what is open, what is spare, and what needs replacing.</Text></View><Pressable accessibilityLabel="Add product" style={styles.addButton}><Plus color={colors.surface} size={22} /></Pressable></View>
    <View style={styles.summaryBand}><PackagePlus color={colors.forest} size={22} /><Text style={styles.summaryValue}>{inventory.length}</Text><Text style={styles.summaryLabel}>products in use</Text><View style={styles.divider} /><Text style={styles.summaryValue}>{inventory.reduce((sum, item) => sum + item.backstock, 0)}</Text><Text style={styles.summaryLabel}>in backstock</Text></View>
    <SectionHeader title="Active products" detail="All categories" />
    <View style={styles.list}>{inventory.map((item) => <View key={item.id} style={styles.product}><View style={[styles.productMark, { backgroundColor: item.tint }]}><Text style={styles.productInitial}>{item.name.slice(0, 1)}</Text></View><View style={styles.productBody}><View style={styles.productHeader}><View style={styles.productNameWrap}><Text style={styles.productName}>{item.name}</Text><Text style={styles.productMeta}>{item.category} · {item.target}</Text></View><Text style={[styles.level, item.level <= 25 && styles.levelLow]}>{item.level}%</Text></View><View style={styles.track}><View style={[styles.fill, { width: `${item.level}%` }]} /></View><Text style={styles.stock}>{item.backstock > 0 ? `${item.backstock} unopened backup${item.backstock > 1 ? 's' : ''}` : 'No backstock'}</Text></View></View>)}</View>
  </Page>;
}

const styles = StyleSheet.create({
  headingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: spacing.md }, headingCopy: { flex: 1 }, eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm, maxWidth: 350 }, addButton: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.forest, alignItems: 'center', justifyContent: 'center' }, summaryBand: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.lg, marginTop: spacing.lg, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.line }, summaryValue: { fontSize: 22, fontWeight: '800', color: colors.ink }, summaryLabel: { ...type.bodySmall, color: colors.muted }, divider: { width: 1, height: 24, backgroundColor: colors.line, marginHorizontal: spacing.sm }, list: { gap: spacing.sm }, product: { flexDirection: 'row', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.sm, padding: spacing.md, borderWidth: 1, borderColor: colors.line }, productMark: { width: 52, height: 64, borderRadius: radius.xs, alignItems: 'center', justifyContent: 'center' }, productInitial: { fontSize: 24, fontWeight: '800', color: colors.ink }, productBody: { flex: 1, gap: spacing.sm }, productHeader: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm }, productNameWrap: { flex: 1 }, productName: { ...type.heading, color: colors.ink }, productMeta: { ...type.caption, color: colors.muted, marginTop: 3 }, level: { ...type.heading, color: colors.forest }, levelLow: { color: colors.coral }, track: { height: 7, borderRadius: 4, backgroundColor: colors.line, overflow: 'hidden' }, fill: { height: '100%', backgroundColor: colors.forest, borderRadius: 4 }, stock: { ...type.caption, color: colors.muted },
});
