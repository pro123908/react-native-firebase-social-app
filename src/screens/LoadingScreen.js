import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user => ', user);
      navigation.navigate(user ? 'Home' : 'Login');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading Screen</Text>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 30,

    // fontFamily: 'PoppinsRegular',
  },
});

export default LoadingScreen;
