import { ShoppingBasket } from 'lucide-react-native';
import { StyleSheet, Text } from 'react-native';

import { EmptyState } from '@/components/empty-state';
import { Page } from '@/components/page';
import { colors, spacing, type } from '@/theme/tokens';

export default function ShoppingScreen() {
  return <Page><Text style={styles.eyebrow}>SHOPPING</Text><Text style={styles.title}>Shopping bucket</Text><Text style={styles.subtitle}>Real restocks and routine needs will appear here when the shopping feature is connected.</Text><EmptyState icon={ShoppingBasket} title="Nothing in your bucket" description="There is no shopping plan for this account. We will not invent products, prices, or availability." /></Page>;
}

const styles = StyleSheet.create({ eyebrow: { ...type.label, color: colors.muted }, title: { ...type.display, color: colors.ink, marginTop: spacing.xs }, subtitle: { ...type.body, color: colors.muted, marginTop: spacing.sm } });
