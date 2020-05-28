import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/Feed';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function HomeScreen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createMaterialTopTabNavigator();
  
  export default function TopLinks() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Favoritos" component={HomeScreen} />
          <Tab.Screen name="Diversos" component={SettingsScreen2} />
        </Tab.Navigator>
    );
  }

  