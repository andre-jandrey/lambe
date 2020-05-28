import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from '../screens/Feed';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function HomeScreen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function Diversos() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aba diversos!</Text>
      </View>
    );
  }
  
  const Tab = createMaterialTopTabNavigator();
  
  export default function TopLinks() {
    return (
        <Tab.Navigator style={styles.container}>
          <Tab.Screen style={styles.link} name="Favoritos" component={HomeScreen} />
          <Tab.Screen name="Diversos" component={Diversos} />
        </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 35,
      backgroundColor: '#f56',
    },
  });