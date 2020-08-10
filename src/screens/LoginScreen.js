import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => setErrorMessage(err));
  };

  console.log(errorMessage);

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>{`Hello again\nWelcome Back`}</Text>
      <View style={styles.errorMessage}>
        <Text style={styles.error}>
          {errorMessage ? errorMessage.message : ''}
        </Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
            value={email}
            autoCapitalize="none"></TextInput>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
            value={password}
            autoCapitalize="none"></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{color: '#fff', textTransform: 'uppercase'}}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignItems: 'center', marginTop: 30}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{color: '#414959', fontSize: 13}}>
          New to SocialApp?{' '}
          <Text style={{color: '#E9446A', textTransform: 'uppercase'}}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loginText: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },

  errorMessage: {
    alignItems: 'center',

    marginHorizontal: 30,
    marginBottom: 10,
  },
  error: {
    fontSize: 13,
    color: '#E9446A',
    textAlign: 'center',
  },

  form: {
    marginHorizontal: 30,
    marginBottom: 30,
  },

  inputTitle: {
    color: '#8A8F9E',
    textTransform: 'uppercase',
    fontSize: 10,
  },

  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },

  button: {
    height: 50,
    backgroundColor: '#E9446A',
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default LoginScreen;
