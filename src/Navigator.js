import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions: {
            title: 'AddPhoto',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='camera' size={50} color={tintColor} />
        }
    },
    Feed: {
        name: 'Profile',
        screen: Feed,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => 
                <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRoutename: 'Feed',
    tabBarOptions: {
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator