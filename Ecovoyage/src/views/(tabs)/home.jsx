import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInputComponent } from '../../components/textInputComponent'

export default function Home () {
  const travelPackages = require('../../assets/travel.json');

// interface SearchProps {
//   input: string;
//   style?: StyleProp<ViewStyle>;
// }

const SearchComponent = ({ input, style }) => {
  //const navigation = useNavigation();

  const handleSearch = () => {
    // Filter travel packages based on the entered price
    // You can customize this filtering logic as needed
    const filteredPackages = travelPackages.filter(travelPackage => travelPackage.price <= input);
    return filteredPackages;
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => handlePressItem(item)}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDestination}>{item.destination}</Text>
      </TouchableOpacity>
    );
  };

  // const handlePressItem = (travelPackage) => {
  //   // Navigate to the details page with the selected travel package
  //   navigation.navigate('DetailsPage', { package: travelPackage });
  // };

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

}
