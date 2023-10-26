/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import GroceryList from './src/GroceryList';
import HomeScreen from './src/HomeScreen'
import GroceryItemsScreen from './src/GroceryItemsScreen'
import {
  SafeAreaView,
  SectionList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* type SectionProps = PropsWithChildren<{
  title: string;
}>; */

/* function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
} */

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  //   const [data, setData] = useState([]);
  //
  //   const getGroceries = async () => {
  //     try {
  //       const response = await fetch('./data/groceries.json');
  //       const json = await response.json();
  //       setData(json.movies);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };
  //
  //   useEffect(() => {
  //     getGroceries();
  //   }, []);

  const data = require('./data/groceries.json');
  console.log(data);

  //const personsObject = JSON.parse(data[0]);
  const personsMap = new Map(Object.entries(data));
  for (const key of personsMap.keys()) {
    console.log(key);
  }

  const xxx = data.map((fruit, index) => console.log(fruit.type));

  const ListItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };
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

//  <GroceryItems />
//     <View style={styles.container}>
//       <StatusBar style="light" />
//       <SafeAreaView style={{flex: 1}}>
//         <SectionList
//           contentContainerStyle={{
//             paddingHorizontal: 10,
//           }}
//           keyExtractor={(item, index) => item + index}
//           sections={data}
//           renderSectionHeader={({section: {title}}) => (
//             <Text style={styles.sectionHeader}>{title}</Text>
//           )}
//           renderItem={({item}) => {
//             return <ListItem item={item} />;
//           }}
//         />
//       </SafeAreaView>
//     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});

export default App;
