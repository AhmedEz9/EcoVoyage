import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation
import { useData } from './DataContext';

const travelPackages = require('../mockData/travel.json');

interface SearchProps {
  input: string;
  style?: StyleProp<ViewStyle>;
}

const SearchComponent: React.FC<SearchProps> = ({ input, style }) => {
  const navigation = useNavigation();
  const { setId } = useData();

  const handleSearch = () => {
    // Filter travel packages based on the entered price
    // You can customize this filtering logic as needed
    const filteredPackages = travelPackages.filter(travelPackage => travelPackage.price <= input);
    return filteredPackages;
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => handlePressItem(item.id)}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDestination}>{item.destination}</Text>
      </TouchableOpacity>
    );
  };

  const handlePressItem = (id: string) => {
    // Navigate to the details page with the selected travel package
    navigation.navigate('Details Page');
    setId(id);
  };

  return (
    <View >
      <FlatList
        data={handleSearch()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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

export default SearchComponent;
