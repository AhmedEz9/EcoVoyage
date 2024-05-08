import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { primary } from '../commonStyles/colors';
import typography from '../commonStyles/Typography';
import { useData } from '../components/DataContext';
import spacing from '../commonStyles/Spacing';

export default function DetailsPage () {
  const travelPackages = require('../../assets/travel.json');
  const { id } = useData();

  const packageDetails = travelPackages.find(travelPackages => travelPackages.id == id);
  if (!packageDetails) {
    return (
      <View style={styles.container}>
        <Text>No package found with id: {id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{...spacing.mt6}}>
      <Text style={{...typography.h3, ...spacing.ma1}}>{packageDetails.name}</Text>
      <Text style={{...typography.h3, ...spacing.ma1}}>{packageDetails.destination}</Text>
      <Text style={{...typography.h3, ...spacing.ma1}}>{packageDetails.duration}</Text>
      <Text style={{...typography.h3, ...spacing.ma1}}>{packageDetails.description}</Text>
      <Text style={{...typography.h3, ...spacing.ma1}}>Price: €{packageDetails.price}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  button: {
    flexDirection: 'row',
    width: 40,
    backgroundColor:'transparent',
  },
  children: {
    justifyContent: 'center',
  },
});


