import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, IconButton} from 'react-native-paper';
import NavigationBar from 'react-native-navbar';
import DashboardScreen from '../screens/DashboardScreen';
import BuyBTCScreen from '../screens/BuyBTCScreen';
import SellBTCScreen from '../screens/SellBTCScreen';

const StackNavigator = createStackNavigator();

function DashboardStackNavigator({navigation}) {

    console.log(navigation);

    function handleMenuItemClicked() {
        navigation.toggleDrawer();
    }

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                options={{
                    title: 'Dashboard',
                    header: function () {
                        return null;
                    },
                }}
                name={'Dashboard'}
                component={DashboardScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: 'Buy BTC',
                    header: function () {
                        return null;
                    },
                }}
                name={'BuyBTCScreen'}
                component={BuyBTCScreen}
            />

            <StackNavigator.Screen
                options={{
                    title: 'Sell BTC',
                    header: function () {
                        return null;
                    },
                }}
                name={'SellBTCScreen'}
                component={SellBTCScreen}
            />

        </StackNavigator.Navigator>
    );
}

export default DashboardStackNavigator;
