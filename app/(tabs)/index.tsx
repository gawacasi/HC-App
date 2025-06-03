import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.logo}
        contentFit="contain"
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => router.push('/aluno-login')}
      >
        <ThemedText type="defaultSemiBold" style={styles.buttonText}>
          Entrar como Aluno
        </ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#28a745' }]}
        onPress={() => router.push('/professor-login')}
      >
        <ThemedText type="defaultSemiBold" style={styles.buttonText}>
          Entrar como Professor
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 20,
  },
  logo: {
    width: 250,
    height: 180,
    marginBottom: 40,
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
