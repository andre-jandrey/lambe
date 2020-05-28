import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Page1 from '../screens/SearchScreen'
import About from '../screens/About'
import PostDetails from '../screens/PostDetails'

import TabNavigator from './BottomTabNavigator'
import TopLinks from './top.routes'

const AppStack = createStackNavigator()

export default function AppStackScreen() {
    return (
        <AppStack.Navigator
            mode="modal"
            screenOptions={() => {
                return {
                    headerTintColor: '#000',
                    headerBackTitleVisible: false,
                    headerTitleStyle: {
                        //fontFamily: 'AvenirNext-Regular',
                        color: '#000'
                    },
                };
            }}
        >
            <AppStack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="TopLinks"
                component={TopLinks}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="Page 1"
                component={Page1}
                options={{ headerShown: true, color: '#000' }}
            />
            <AppStack.Screen
                name="About"
                component={About}
                options={{ headerShown: true, color: '#000' }}
            />
            <AppStack.Screen
                name="PostDetails"
                component={PostDetails}
                options={{ headerShown: true, color: '#000', title: 'Notícia' }}
            />
        </AppStack.Navigator>
    );
}
