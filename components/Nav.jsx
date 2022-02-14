import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen'

const Stack = createNativeStackNavigator();

const Nav = () => {
 
    return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="Assignments" component={Assignments} />
        <Stack.Screen name="Groupwork" component={Groupwork} />
        <Stack.Screen name="Resources" component={Resources} />
     </Stack.Navigator>
</NavigationContainer>
    );
  
}
export default Nav; 