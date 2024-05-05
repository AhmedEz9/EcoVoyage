import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, View,StyleProp, ViewStyle,Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchComponent from './searchComponent';


interface TextInputComponentProps {
  style?: StyleProp<ViewStyle>;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ style })=> {
  const [inputText, setInputText] = useState('');
  const [input, setInput] = useState('');
  const handleInput = ()=> {
    setInput(inputText);

  };


  
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
      <View style={styles.searchSection}>
        <Ionicons style={styles.searchIcon} name="search-circle-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search for travel locations"
          onChangeText={newText => setInputText(newText)}
          value={inputText}
        />
        <Button title="Search" onPress={handleInput}  />
      </View>

      <SearchComponent input={input}/>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 20, // Adjust this as per your layout
    marginVertical: 10,   // Adjust this as per your layout
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop:150,
    width: '85%',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    width:1000,
  },
});

export default TextInputComponent;