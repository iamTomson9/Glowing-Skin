import type { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, radius, spacing, type } from '@/theme/tokens';

export function AuthShell({ children, description, title }: PropsWithChildren<{ description: string; title: string }>) {
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={styles.wrap}>
            <View style={styles.brand}><View style={styles.mark} /><Text style={styles.brandName}>Glowing Skin</Text></View>
            <View style={styles.copy}><Text style={styles.title}>{title}</Text><Text style={styles.description}>{description}</Text></View>
            <View style={styles.form}>{children}</View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background }, flex: { flex: 1 }, scroll: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.md }, wrap: { width: '100%', maxWidth: 440, paddingVertical: spacing.xl }, brand: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm }, mark: { width: 18, height: 18, borderRadius: 9, backgroundColor: colors.mint, borderWidth: 5, borderColor: colors.forest }, brandName: { ...type.heading, color: colors.forest }, copy: { marginTop: 44 }, title: { ...type.display, color: colors.ink }, description: { ...type.body, color: colors.muted, marginTop: spacing.sm }, form: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line, borderRadius: radius.sm, padding: spacing.lg, marginTop: spacing.lg, gap: spacing.md },
});
