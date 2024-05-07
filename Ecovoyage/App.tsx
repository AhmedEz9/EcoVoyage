import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FrontPage from './src/views/frontPage';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Front Page"
          component={FrontPage}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
