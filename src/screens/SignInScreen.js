import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Item, Text, Button, Icon} from 'native-base';

function SignInScreen({navigation}) {

    function handleSignInPress() {
        navigation.navigate("MainBottomTabsNavigator");
    }

    function handleDontHaveAccountPress() {
        navigation.navigate("SignUpScreen");
    }

    function handleForgotPasswordPress() {
        navigation.navigate("ForgotPasswordScreen");
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.appNameText}>Voodoo Wallet</Text>
                <Text style={styles.sloganText}>Where bitcoin rains</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.secondaryText}>Sign in</Text>
                <View style={styles.fieldItem}>
                    <Text style={styles.label}>Email</Text>
                    <Item useNativeDriver={true} rounded={true} bordered={true}>
                        <Icon style={styles.icon} name="mail"/>
                        <Input style={styles.input} placeholder='Email' keyboardType="email-address"/>
                    </Item>
                </View>

                <View style={styles.fieldItem}>
                    <Text style={styles.label}>Password</Text>
                    <Item useNativeDriver={true} rounded={true} bordered={true}
                          secureTextEntry={true}>
                        <Icon style={styles.icon} name="lock"/>
                        <Input style={styles.input} placeholder="Password" secureTextEntry={true}/>
                    </Item>
                </View>

                <Button onPress={handleForgotPasswordPress} block={true} transparent={true}>
                    <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
                </Button>

                <Button
                    style={styles.button}
                    full={true}
                    primary={true}
                    onPress={handleSignInPress}
                    rounded={true}
                    iconLeft={true}>
                    <Icon name="paper-plane"/>
                    <Text style={styles.text}>Sign In</Text>
                </Button>

                <Button onPress={handleDontHaveAccountPress} block={true} transparent={true}>
                    <Text style={styles.forgotPasswordText}>Don't have an account? Sign Up</Text>
                </Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flex: 1
    },
    info: {
        flex: 1,
        justifyContent: "center"
    },
    formContainer: {
        padding: 16,
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: "white"
    },
    fieldItem: {
        marginVertical: 8,
    },
    label: {
        marginBottom: 8,
        marginLeft: 18,
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 12
    }, button: {
        marginVertical: 8,
    },
    forgotPasswordText: {
        color: 'gray',
        textTransform: "capitalize",
        textAlign: "left"
    },
    text: {
        color: "white",
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "rgba(0,125,125,0.1)",
        borderBottomRightRadius: 24,
        borderTopRightRadius: 24
    },
    icon: {
        color: "blue"
    },
    appNameText: {
        fontSize: 36,
        textAlign: "center",
        color: "white"
    },
    secondaryText: {
        fontSize: 24,
        color: "blue",
        marginLeft: 16,
        marginVertical: 8,
        fontWeight: "bold"
    },
    sloganText: {
        color: "white",
        textAlign: "center",
        fontSize: 16
    }
});

export default SignInScreen;
