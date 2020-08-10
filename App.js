import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import LoadingScreen from './src/screens/LoadingScreen';
import {setCustomText} from 'react-native-global-props';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import * as firebase from 'firebase';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const customTextProps = {
  style: {
    fontFamily: 'PoppinsRegular',
  },
};

setCustomText(customTextProps);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBXk4-5Pe8P64kVswqjuVxk0IXeW9xT2W0',
  authDomain: 'fir-social-app-7d422.firebaseapp.com',
  databaseURL: 'https://fir-social-app-7d422.firebaseio.com',
  projectId: 'fir-social-app-7d422',
  storageBucket: 'fir-social-app-7d422.appspot.com',
  messagingSenderId: '373059678979',
  appId: '1:373059678979:web:fda6fe89903ce0d8a9ef36',
  measurementId: 'G-X4M6RMCYR0',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.analytics();

// const AppStack = createStackNavigator({
//   Home: HomeScreen,
// });

// const AuthStack = createStackNavigator({
//   Login: LoginScreen,
//   Register: RegisterScreen,
// });

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName="Loading"
    screenOptions={{gestureEnabled: false, headerShown: false}}>
    <Stack.Screen name="Loading" component={LoadingScreen}></Stack.Screen>
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
  </Stack.Navigator>
);

const App = () => {
  return <NavigationContainer>{AppStack()}</NavigationContainer>;
};

export default App;
