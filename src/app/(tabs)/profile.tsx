import { Bell, ChevronRight, CircleHelp, Globe2, Shield, UserRound } from 'lucide-react-native';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { Page, SectionHeader } from '@/components/page';
import { colors, radius, spacing, type } from '@/theme/tokens';

const rows = [
  { label: 'Skin profile', value: 'Combination · Hydration', icon: UserRound },
  { label: 'Country and currency', value: 'Botswana · BWP', icon: Globe2 },
  { label: 'Privacy and data', value: 'Export or delete your data', icon: Shield },
  { label: 'Help and safety', value: 'Guidance limits and support', icon: CircleHelp },
];

export default function ProfileScreen() {
  return <Page>
    <Text style={styles.eyebrow}>YOUR ROUTINE SETTINGS</Text><Text style={styles.title}>Profile</Text><Text style={styles.subtitle}>Keep the plan aligned with your skin, schedule, and budget.</Text>
    <View style={styles.profileBand}><View style={styles.avatar}><Text style={styles.avatarText}>NN</Text></View><View style={styles.profileCopy}><Text style={styles.name}>Neo N.</Text><Text style={styles.profileMeta}>Face and body care · Monthly budget</Text></View></View>
    <SectionHeader title="Preferences" />
    <View style={styles.list}>{rows.map(({ icon: Icon, label, value }) => <Pressable key={label} style={({ pressed }) => [styles.row, pressed && styles.pressed]}><Icon color={colors.forest} size={20} /><View style={styles.rowCopy}><Text style={styles.rowLabel}>{label}</Text><Text style={styles.rowValue}>{value}</Text></View><ChevronRight color={colors.muted} size={20} /></Pressable>)}</View>
    <SectionHeader title="Reminders" />
    <View style={styles.switchRow}><Bell color={colors.coral} size={20} /><View style={styles.rowCopy}><Text style={styles.rowLabel}>Routine reminders</Text><Text style={styles.rowValue}>Morning at 06:30 · Evening at 19:30</Text></View><Switch value trackColor={{ true: colors.mint }} thumbColor={colors.surface} /></View>
    <Text style={styles.disclaimer}>Glowing Skin provides educational self care guidance. It does not diagnose or treat medical conditions.</Text>
  </Page>;
}

const styles = StyleSheet.create({
  eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm }, profileBand: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.lg, marginTop: spacing.lg, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.line }, avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: colors.mint, alignItems: 'center', justifyContent: 'center' }, avatarText: { fontSize: 17, fontWeight: '800', color: colors.forest }, profileCopy: { flex: 1 }, name: { fontSize: 20, lineHeight: 25, fontWeight: '800', color: colors.ink }, profileMeta: { ...type.bodySmall, color: colors.muted, marginTop: 3 }, list: { gap: 1, borderRadius: radius.sm, overflow: 'hidden', borderWidth: 1, borderColor: colors.line }, row: { minHeight: 68, flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingHorizontal: spacing.md, backgroundColor: colors.surface, borderBottomWidth: 1, borderColor: colors.line }, pressed: { backgroundColor: colors.mintSoft }, rowCopy: { flex: 1 }, rowLabel: { ...type.heading, color: colors.ink }, rowValue: { ...type.caption, color: colors.muted, marginTop: 3 }, switchRow: { minHeight: 72, flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingHorizontal: spacing.md, backgroundColor: colors.surface, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.line }, disclaimer: { ...type.caption, color: colors.muted, borderTopWidth: 1, borderColor: colors.line, paddingTop: spacing.md, marginTop: spacing.xl },
});
