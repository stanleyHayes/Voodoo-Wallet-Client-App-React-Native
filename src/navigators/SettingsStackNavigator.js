import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ProfileScreen from '../screens/ProfileScreen';

const StackNavigator = createStackNavigator();


function SettingsStackNavigator() {

    return (
        <StackNavigator.Navigator initialRouteName="SettingsScreen">

            <StackNavigator.Screen
                options={{
                    title: 'Settings',
                    header: function () {
                        return null;
                    },
                }}
                name="SettingsScreen"
                component={SettingsScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: 'Profile',
                    header: function () {
                        return null;
                    },
                }}
                name="ProfileScreen"
                component={ProfileScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: 'Edit Profile',
                    header: function () {
                        return null;
                    },
                }}
                name="EditProfileScreen"
                component={EditProfileScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: 'Change Password',
                    header: function () {
                        return null;
                    },
                }}
                name={"ChangePasswordScreen"}
                component={ChangePasswordScreen}
            />

        </StackNavigator.Navigator>
    )
}

export default SettingsStackNavigator;
