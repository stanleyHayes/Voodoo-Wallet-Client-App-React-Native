import React from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {USER_TOKEN} from '../constants/constants';
import AuthenticationStackNavigator from './AuthenticationStackNavigator';
import MainBottomTabsNavigator from './MainBottomTabsNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const StackNavigator = createStackNavigator();

function RootStackNavigator() {

    async function readToken() {
        let userToken = null;
        try {
            userToken = await AsyncStorage.getItem(USER_TOKEN);
            return userToken;
        } catch (e) {
            console.log(e.message);
        }
        return userToken;
    }

    const userToken = readToken();

    console.log('user token', userToken);

    return (
        <StackNavigator.Navigator headerMode="none">
            <StackNavigator.Screen name={"AuthenticationStackNavigator"} component={AuthenticationStackNavigator} />
            <StackNavigator.Screen name={"MainBottomTabsNavigator"} component={MainBottomTabsNavigator} />
        </StackNavigator.Navigator>
    );
}

export default RootStackNavigator;
