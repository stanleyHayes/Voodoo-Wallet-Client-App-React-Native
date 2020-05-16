import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import {Header, Left, Icon, Body, Button} from 'native-base';
import {Text} from 'react-native-paper';

const StackNavigator = createStackNavigator();

function AuthenticationStackNavigator({navigation}) {

    function handleBackPressed() {
        navigation.goBack();
    }
    return (
        <StackNavigator.Navigator initialRouteName="SignInScreen">
            <StackNavigator.Screen
                options={{
                    header: function () {
                        return null;
                    }
                }}
                name={'SignInScreen'}
                component={SignInScreen}
            />

            <StackNavigator.Screen
                options={{
                    header: function () {
                        return (
                            <Header>
                                <Left>
                                    <Button transparent={true} onPress={handleBackPressed}>
                                        <Icon name="chevron-left" type="MaterialIcons" size={30} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Forgot Password</Text>
                                </Body>
                            </Header>
                        );
                    }
                }}
                name={'ForgotPasswordScreen'}
                component={ForgotPasswordScreen}
            />

            <StackNavigator.Screen
                options={{
                    header: function () {
                        return null;
                    }
                }}
                name={'SignUpScreen'}
                component={SignUpScreen}
            />
        </StackNavigator.Navigator>
    );
}

export default AuthenticationStackNavigator;
