import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoadingScreen from './src/screens/LoadingScreen';
import {setCustomText} from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: 'PoppinsRegular',
  },
};

setCustomText(customTextProps);

const App = () => {
  return (
    <View style={styles.container}>
      <LoadingScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
