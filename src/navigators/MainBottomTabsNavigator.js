import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import OrdersStackNavigator from './OrdersStackNavigator';
import {Icon} from 'native-base';
import DashboardStackNavigator from './DashbordStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';

const BottomTabs = createMaterialBottomTabNavigator();

function MainBottomTabsNavigator() {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                options={{
                    title: 'Dashboard',
                    tabBarIcon: function ({focused, color}) {
                        return <Icon name="grid" color={color} />;
                    },
                }}
                name="DashboardStackNavigator"
                component={DashboardStackNavigator}
            />

            <BottomTabs.Screen
                options={{
                    title: 'Orders',
                    tabBarIcon: function ({focused, color}) {
                        return <Icon name="cart" color={color}/>;
                    },
                }}
                name="OrdersStackNavigator"
                component={OrdersStackNavigator}
            />

            <BottomTabs.Screen
                options={{
                    title: 'Settings',
                    tabBarIcon: function ({focused, color}) {
                        return <Icon name="settings" color={color}/>;
                    },
                }}
                name="SettingsStackNavigator"
                component={SettingsStackNavigator}
            />
        </BottomTabs.Navigator>
    );
}

export default MainBottomTabsNavigator;
