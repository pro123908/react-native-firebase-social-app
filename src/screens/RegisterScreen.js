import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Image,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const SignUpUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userData) =>
        userData.user.updateProfile({
          displayName: name,
        }),
      )
      .catch((err) => setErrorMessage(err));
  };

  LayoutAnimation.easeInEaseOut();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Image
        source={require('../../assets/images/authHeader.png')}
        style={{marginTop: -150, marginLeft: -50}}
      />

      <Image
        source={require('../../assets/images/authFooter.png')}
        style={{position: 'absolute', bottom: -325, right: -100}}
      />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Icon name="long-arrow-left" size={32} color="#fff" />
      </TouchableOpacity>

      <View
        style={{
          position: 'absolute',
          top: 50,
          alignItems: 'center',
          width: '100%',
        }}>
        <Text
          style={
            styles.loginText
          }>{`Hello again\nSign Up to get Started`}</Text>
        <TouchableOpacity style={styles.avatar}>
          <Icon name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.errorMessage}>
        <Text style={styles.error}>
          {errorMessage ? errorMessage.message : ''}
        </Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Full Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => setName(name)}
            value={name}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{marginTop: 30}}>
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

      <TouchableOpacity style={styles.button} onPress={SignUpUser}>
        <Text style={{color: '#fff', textTransform: 'uppercase'}}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignItems: 'center', marginTop: 30}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#414959', fontSize: 13}}>
          Already a User?{' '}
          <Text style={{color: '#E9446A', textTransform: 'uppercase'}}>
            Login
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
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
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

  backBtn: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(21,22,48,0.1)',

    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d3d3d3',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
