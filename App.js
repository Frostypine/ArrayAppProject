/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import * as React from 'react';


import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Home from './components/Home' ; 
//import HomeScreen from './components/HomeScreen'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
 

  return ( 
  <React.Fragment> 
    <NavigationContainer>
     
    {/*
     <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>  
    <Home/> 
    
    */}
    </NavigationContainer>
      </React.Fragment>
  );
};


export default App;
