import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { primary } from '../commonStyles/colors';
import typography from '../commonStyles/Typography';
import { useData } from '../components/DataContext';
import spacing from '../commonStyles/Spacing';
import CustomButton from '../components/CustomButton';

export default function ProfilePage () {

  return (
    <View style={styles.container}>
      <Text style={typography.h1}>User profile</Text>
      <Text style={typography.h3}>Press button to change language</Text>
      <CustomButton style={spacing.ma1} title='FIN language'/>
      <CustomButton style={spacing.ma1} title='EN language'/>

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


