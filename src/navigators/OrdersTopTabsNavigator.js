import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BoughtBTCOrdersScreen from '../screens/BoughtBTCOrdersScreen';
import SoldBTCOrdersScreen from '../screens/SoldBTCOrdersScreen';

const TopTabsNavigator = createMaterialTopTabNavigator();

function OrdersTopTabsNavigator() {
    return (
        <TopTabsNavigator.Navigator>
            <TopTabsNavigator.Screen
                options={{
                    title: "Bought"
                }}
                name={'BoughtBTCOrders'}
                component={BoughtBTCOrdersScreen}
            />

            <TopTabsNavigator.Screen
                options={{
                    title: "Sold"
                }}
                name={'SoldBTCOrders'}
                component={SoldBTCOrdersScreen}
            />

        </TopTabsNavigator.Navigator>
    );
}

export default OrdersTopTabsNavigator;
