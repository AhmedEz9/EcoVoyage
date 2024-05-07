import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { primary } from '../commonStyles/colors';
import typography from '../commonStyles/Typography';
import { useData } from '../components/DataContext';

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
      <Text style={{...typography.actionColor}} >{packageDetails.name}</Text>
      <Text >{packageDetails.destination}</Text>
      <Text >{packageDetails.duration}</Text>
      <Text >{packageDetails.description}</Text>
      <Text >Price: €{packageDetails.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
  },
  menuContainer: {
    alignItems:'flex-end',
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


