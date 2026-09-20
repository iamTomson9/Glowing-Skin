import { PackageOpen } from 'lucide-react-native';
import { StyleSheet, Text } from 'react-native';

import { EmptyState } from '@/components/empty-state';
import { Page } from '@/components/page';
import { colors, spacing, type } from '@/theme/tokens';

export default function ShelfieScreen() {
  return <Page><Text style={styles.eyebrow}>YOUR PRODUCTS</Text><Text style={styles.title}>Shelfie</Text><Text style={styles.subtitle}>Products you add during or after onboarding will appear here.</Text><EmptyState icon={PackageOpen} title="Your shelf is empty" description="No products are stored for this account yet. Product entry will be enabled when the inventory tables and policies are ready." /></Page>;
}

const styles = StyleSheet.create({ eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm } });
