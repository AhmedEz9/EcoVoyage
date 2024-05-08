import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputComponent from './src/components/textInputComponent';


export default function App() {

  return (
    <View style={styles.container}>
      <TextInputComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
