import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TextInputComponent } from '../components/textInputComponent'

export default function HomePage () {
  const travelPackages = require('../../assets/travel.json');
  return (
    <View >
      <Text>home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDestination: {
    fontSize: 16,
    color: 'gray',
  },
});


