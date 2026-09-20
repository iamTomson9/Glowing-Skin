import { ClipboardList } from 'lucide-react-native';
import { StyleSheet, Text } from 'react-native';

import { EmptyState } from '@/components/empty-state';
import { Page } from '@/components/page';
import { colors, spacing, type } from '@/theme/tokens';

export default function TodayScreen() {
  return <Page><Text style={styles.eyebrow}>TODAY</Text><Text style={styles.title}>Your routine</Text><Text style={styles.subtitle}>Your active routine will appear here after onboarding and review.</Text><EmptyState icon={ClipboardList} title="No active routine yet" description="Complete onboarding to create a routine from your saved profile and products. Nothing has been filled in for you." /></Page>;
}

const styles = StyleSheet.create({ eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm } });
