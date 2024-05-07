import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FrontPage from './src/views/frontPage';
import HomePage from './src/views/homePage';
import DetailsPage from './src/views/detailsPage';
import { DataProvider } from './src/components/DataContext';


const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <DataProvider>
      
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
          <Stack.Screen
            name="Details Page"
            component={DetailsPage}
          />
        </Stack.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}
