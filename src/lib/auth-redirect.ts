import * as Linking from 'expo-linking';

export function authRedirect(path: 'auth/callback' | 'reset-password') {
  return Linking.createURL(path);
}

