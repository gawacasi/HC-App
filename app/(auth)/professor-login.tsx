import { Image } from 'expo-image';
import { useState } from 'react';
import { Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'teste@teste.com' && password === '123456') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos.');
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Login</ThemedText>

        <ThemedView style={styles.inputContainer}>
          <ThemedText>Email</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#aaa"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <ThemedText>Senha</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </ThemedView>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>
            Entrar
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 20,
  },
  inputContainer: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
