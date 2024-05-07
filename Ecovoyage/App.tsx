import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FrontPage from './src/views/frontPage';
import HomePage from './src/views/homePage';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Front Page"
          component={FrontPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home Page"
          component={HomePage}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
