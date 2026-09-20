import { Check, Droplets, ShieldCheck, Sparkles, Sun } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Page, SectionHeader } from '@/components/page';
import { useApp } from '@/state/app-context';
import { colors, radius, spacing, type } from '@/theme/tokens';

const icons = { cleanser: Droplets, treatment: Sparkles, protect: Sun };

export default function TodayScreen() {
  const { completedSteps, routine, toggleStep } = useApp();
  const completeCount = routine.filter((step) => completedSteps.includes(step.id)).length;
  const percent = Math.round((completeCount / routine.length) * 100);

  return <Page>
    <View style={styles.header}>
      <View style={styles.headerCopy}><Text style={styles.eyebrow}>SUNDAY, 20 SEPTEMBER</Text><Text style={styles.title}>Good morning, Neo</Text><Text style={styles.subtitle}>A calm routine for hydrated, protected skin.</Text></View>
      <View style={styles.progress} accessibilityLabel={`${percent} percent complete`}><Text style={styles.progressValue}>{percent}%</Text><Text style={styles.progressLabel}>done</Text></View>
    </View>
    <View style={styles.notice}><ShieldCheck color={colors.forest} size={20} /><Text style={styles.noticeText}>Your morning routine uses products already on your shelf.</Text></View>
    <SectionHeader title="Morning routine" detail={`${completeCount} of ${routine.length} steps`} />
    <View style={styles.stepList}>{routine.map((step, index) => {
      const isDone = completedSteps.includes(step.id);
      const Icon = icons[step.kind];
      return <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: isDone }} key={step.id} onPress={() => toggleStep(step.id)} style={({ pressed }) => [styles.step, isDone && styles.stepDone, pressed && styles.pressed]}>
        <View style={styles.stepNumber}>{isDone ? <Check color={colors.surface} size={18} /> : <Text style={styles.stepNumberText}>{index + 1}</Text>}</View>
        <View style={styles.stepCopy}><View style={styles.stepTitleRow}><Icon color={colors.forest} size={18} /><Text style={[styles.stepTitle, isDone && styles.doneText]}>{step.title}</Text></View><Text style={styles.stepInstruction}>{step.instruction}</Text><Text style={styles.stepMeta}>{step.product}</Text></View>
      </Pressable>;
    })}</View>
    <SectionHeader title="Later today" />
    <View style={styles.scheduleRow}><Text style={styles.scheduleTime}>18:30</Text><View style={styles.scheduleCopy}><Text style={styles.scheduleTitle}>Evening bath</Text><Text style={styles.scheduleDetail}>Keep the water warm, not hot. Moisturize while skin is damp.</Text></View></View>
  </Page>;
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.md, alignItems: 'center' }, headerCopy: { flex: 1 }, eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm, maxWidth: 330 }, progress: { width: 76, height: 76, borderRadius: 38, borderWidth: 7, borderColor: colors.mint, alignItems: 'center', justifyContent: 'center' }, progressValue: { fontSize: 18, lineHeight: 22, fontWeight: '800', color: colors.ink }, progressLabel: { fontSize: 11, color: colors.muted }, notice: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center', backgroundColor: colors.mintSoft, borderRadius: radius.sm, padding: spacing.md, marginTop: spacing.lg }, noticeText: { ...type.bodySmall, color: colors.forest, flex: 1 }, stepList: { gap: spacing.sm }, step: { flexDirection: 'row', gap: spacing.md, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line, borderRadius: radius.sm, padding: spacing.md }, stepDone: { backgroundColor: colors.mintSoft, borderColor: colors.mint }, pressed: { opacity: 0.76 }, stepNumber: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.forest }, stepNumberText: { color: colors.surface, fontWeight: '800' }, stepCopy: { flex: 1, gap: 5 }, stepTitleRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm }, stepTitle: { ...type.heading, color: colors.ink }, stepInstruction: { ...type.bodySmall, color: colors.ink }, stepMeta: { ...type.caption, color: colors.muted }, doneText: { textDecorationLine: 'line-through', color: colors.muted }, scheduleRow: { flexDirection: 'row', borderTopWidth: 1, borderColor: colors.line, paddingVertical: spacing.md, gap: spacing.lg }, scheduleTime: { ...type.heading, color: colors.coral }, scheduleCopy: { flex: 1, gap: 4 }, scheduleTitle: { ...type.heading, color: colors.ink }, scheduleDetail: { ...type.bodySmall, color: colors.muted },
});
