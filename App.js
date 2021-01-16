import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TasksScreen from './screens/TasksScreen';
import MapScreen from './screens/MapScreen';


// main function
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TasksScreen} options={{ title: 'Task Screen' }}/>
        <Drawer.Screen name="Locations" component={MapScreen} options={{ title: 'My Locations' }}/>
      </Drawer.Navigator>

    </NavigationContainer>
  );
}
