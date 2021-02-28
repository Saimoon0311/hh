import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Schome from "../screen/Schome"
import Cshome from '../screen/Cshome'
function HomeScreen() {
  return (
  <Text>he</Text>
  );
}

function SettingsScreen() {
  return (
<Text>hyhhhhhhh</Text>
  );
}

const Tab = createBottomTabNavigator();

export default function Tnavigation() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}