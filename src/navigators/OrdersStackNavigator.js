import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersTopTabsNavigator from './OrdersTopTabsNavigator';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import BuyBTCScreen from '../screens/BuyBTCScreen';
import SellBTCScreen from '../screens/SellBTCScreen';
import {Body, Header, Text, Right, Icon, Button} from 'native-base';

const StackNavigator = createStackNavigator();

function OrdersStackNavigator({navigation}) {

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                options={{
                    title: 'Dashboard',
                    header: function () {
                        return (
                            <Header>
                                <Body>
                                    <Text>Orders</Text>
                                </Body>
                                <Right>
                                    <Button transparent={true} onPress={() => (navigation.navigate('BuyBTCScreen'))}>
                                        <Icon name="add-shopping-cart" type="MaterialIcons" />
                                        <Text>Buy</Text>
                                    </Button>
                                    <Button transparent={true} onPress={() => (navigation.navigate('SellBTCScreen'))}>
                                        <Icon name="send" type="MaterialIcons" />
                                        <Text>Sell</Text>
                                    </Button>
                                </Right>
                            </Header>
                        );
                    },
                }}
                name={'OrdersTopTabsNavigator'}
                component={OrdersTopTabsNavigator}
            />

            <StackNavigator.Screen
                options={{
                    header: function () {
                        return null;
                    }
                }}
                name={'OrderDetail'}
                component={OrderDetailScreen}
            />


            <StackNavigator.Screen
                name={'BuyBTCScreen'}
                component={BuyBTCScreen}
                options={{
                    header: function () {
                        return null;
                    }
                }}
            />

            <StackNavigator.Screen
                options={{
                    header: function () {
                        return null;
                    }
                }}
                name={'SellBTCScreen'}
                component={SellBTCScreen}
            />

        </StackNavigator.Navigator>
    );
}

export default OrdersStackNavigator;
