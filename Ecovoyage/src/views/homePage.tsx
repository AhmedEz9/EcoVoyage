import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { primary } from '../commonStyles/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import TextInputComponent from '../components/textInputComponent';
export default function HomePage () {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {/* this is menu later name and back button to be added */}
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            styles.button,
          ]}
          >
            <AntDesign name="profile" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <TextInputComponent/>
      
      
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


