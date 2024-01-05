import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import GroceryItemsScreen from './GroceryItemsScreen'

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Welcome'}}
            />
            <Stack.Screen name="GroceryItems" component={GroceryItemsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
