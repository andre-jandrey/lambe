import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Page1 from '../screens/SearchScreen';
import About from '../screens/About';

const PostStack = createStackNavigator();

function PostStackScreen() {
    return (
        <PostStack.Navigator
            screenOptions={() => {
                return {
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitleStyle: {
                        //fontFamily: 'AvenirNext-Regular',
                    },
                };
            }}
        >
            <>
                <PostStack.Screen
                    name="Page 1"
                    component={Page1}
                    options={
                        {
                            headerShown: true,
                            title: 'Pagina 1'
                        }}
                />
                <PostStack.Screen
                    name="About"
                    component={About}
                    options={{
                        headerShown: true,
                        title: 'About'
                    }}
                />

            </>
        </PostStack.Navigator>
    );
}

export default PostStackScreen;
