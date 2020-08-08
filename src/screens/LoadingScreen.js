import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is the bit lengthier text to show a paragraph length text on the
        device just to make things simple to look
      </Text>
      <Text style={styles.text}>
        This is the bit lengthier text to show a paragraph length text on the
        device just to make things simple to look
      </Text>
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
