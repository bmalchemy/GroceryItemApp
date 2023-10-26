import React from 'react';
import { Button } from 'react-native';
import GroceryItems from './GroceryItems';

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Grocery Items"
      onPress={() =>
        navigation.navigate('GroceryItems', {name: 'Jane'})
      }
    />
  );
};

export default HomeScreen;
