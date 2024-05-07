import React, { useState } from 'react';
import { StyleSheet, TextInput, View,StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchComponent from './searchComponent';
import spacing from '../commonStyles/Spacing';
import { black_100, black_200, white } from '../commonStyles/colors';


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
    <View style={{ flexDirection: 'column',alignItems:'center' }}>
      <View style={{...styles.searchSection, ...spacing.mt2}}>
        <TextInput
          style={styles.input}
          placeholder="Enter your budget"
          placeholderTextColor={white}
          onChangeText={newText => setInputText(newText)}
          value={inputText}
        />
      
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            styles.button,
          ]}
          >
          <Ionicons style={styles.searchIcon} onPress={handleInput} name="search-circle-outline" size={40} color="white" />
  
        </TouchableOpacity>
      </View>

      <SearchComponent input={input}/>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    backgroundColor: black_200,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: black_100,
    width:'95%',
  
  },
  button: {
    flexDirection: 'row',
    backgroundColor:'transparent',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    width:'100%',
    color: white,

  },

});

export default TextInputComponent;