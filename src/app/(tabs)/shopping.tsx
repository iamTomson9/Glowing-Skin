import { CalendarDays, Check, CircleDollarSign } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Page, SectionHeader } from '@/components/page';
import { useApp } from '@/state/app-context';
import { colors, radius, spacing, type } from '@/theme/tokens';

export default function ShoppingScreen() {
  const { shopping, toggleBought } = useApp();
  const planned = shopping.reduce((sum, item) => sum + (item.bought ? 0 : item.price), 0);
  const budget = 400;
  return <Page>
    <Text style={styles.eyebrow}>NEXT SHOP · 28 SEPTEMBER</Text><Text style={styles.title}>Shopping bucket</Text><Text style={styles.subtitle}>Essentials first, with every tradeoff shown clearly.</Text>
    <View style={styles.budgetBand}><CircleDollarSign color={colors.forest} size={24} /><View style={styles.budgetCopy}><Text style={styles.budgetLabel}>Planned this month</Text><Text style={styles.budgetValue}>P{planned} <Text style={styles.budgetLimit}>of P{budget}</Text></Text></View><Text style={styles.remaining}>P{budget - planned} left</Text></View>
    <View style={styles.dateRow}><CalendarDays color={colors.coral} size={20} /><Text style={styles.dateText}>8 days until your usual shopping day</Text></View>
    <SectionHeader title="Prioritized list" detail={`${shopping.filter((item) => !item.bought).length} remaining`} />
    <View style={styles.list}>{shopping.map((item) => <View key={item.id} style={[styles.item, item.bought && styles.itemBought]}><View style={styles.itemCopy}><View style={styles.badge}><Text style={styles.badgeText}>{item.priority}</Text></View><Text style={[styles.itemName, item.bought && styles.boughtText]}>{item.name}</Text><Text style={styles.reason}>{item.reason}</Text><Text style={styles.price}>About P{item.price}</Text></View><Pressable accessibilityLabel={item.bought ? `Mark ${item.name} not bought` : `Mark ${item.name} bought`} accessibilityRole="checkbox" accessibilityState={{ checked: item.bought }} onPress={() => toggleBought(item.id)} style={[styles.buyButton, item.bought && styles.buyButtonDone]}>{item.bought ? <Check color={colors.surface} size={18} /> : <Text style={styles.buyButtonText}>Bought</Text>}</Pressable></View>)}</View>
  </Page>;
}

const styles = StyleSheet.create({
  eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm }, budgetBand: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.lg, marginTop: spacing.lg, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.line }, budgetCopy: { flex: 1 }, budgetLabel: { ...type.caption, color: colors.muted }, budgetValue: { fontSize: 24, lineHeight: 30, fontWeight: '800', color: colors.ink }, budgetLimit: { fontSize: 14, color: colors.muted, fontWeight: '500' }, remaining: { ...type.heading, color: colors.forest }, dateRow: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center', marginTop: spacing.md }, dateText: { ...type.bodySmall, color: colors.ink }, list: { gap: spacing.sm }, item: { flexDirection: 'row', gap: spacing.md, alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.line, padding: spacing.md }, itemBought: { opacity: 0.65 }, itemCopy: { flex: 1, alignItems: 'flex-start', gap: 4 }, badge: { backgroundColor: colors.mintSoft, paddingHorizontal: 8, paddingVertical: 3, borderRadius: radius.xs }, badgeText: { ...type.caption, textTransform: 'uppercase', color: colors.forest, fontWeight: '800' }, itemName: { ...type.heading, color: colors.ink, marginTop: 2 }, boughtText: { textDecorationLine: 'line-through' }, reason: { ...type.bodySmall, color: colors.muted }, price: { ...type.caption, color: colors.ink, fontWeight: '700' }, buyButton: { minWidth: 76, minHeight: 40, paddingHorizontal: spacing.sm, borderRadius: radius.xs, backgroundColor: colors.ink, alignItems: 'center', justifyContent: 'center' }, buyButtonDone: { minWidth: 40, backgroundColor: colors.forest }, buyButtonText: { color: colors.surface, fontWeight: '800', fontSize: 12 },
});
