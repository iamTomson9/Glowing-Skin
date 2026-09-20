import { Image } from 'expo-image';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors, spacing, type } from '@/theme/tokens';

export function BrandSplash() {
  return (
    <View accessibilityLabel="Glowing Skin is loading" accessibilityRole="progressbar" style={styles.screen}>
      <View style={styles.identity}>
        <Image contentFit="contain" source={require('../../assets/images/glowing-skin-mark.png')} style={styles.mark} />
        <Text style={styles.name}>Glowing Skin</Text>
        <Text style={styles.detail}>Your routine, ready when you are.</Text>
      </View>
      <ActivityIndicator color={colors.forest} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 48,
    backgroundColor: colors.background,
    padding: spacing.xl,
  },
  identity: { alignItems: 'center', gap: spacing.sm },
  mark: { width: 144, height: 144 },
  name: { ...type.display, color: colors.ink },
  detail: { ...type.bodySmall, color: colors.muted, textAlign: 'center' },
});
