import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Input, Item, Text, Button, Icon} from 'native-base';

function SignUpScreen({navigation}) {

    function handleSignInPress() {

    }

    function handleAlreadyHaveAccountPress() {
        navigation.navigate("SignInScreen");
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.appNameText}>Voodoo Wallet</Text>
                    <Text style={styles.sloganText}>Where bitcoin rains</Text>
                </View>


                <View style={styles.formContainer}>
                    <Text style={styles.secondaryText}>Create new account</Text>

                    <View style={styles.fieldItem}>
                        <Text style={styles.label}>Email</Text>
                        <Item useNativeDriver={true} rounded={true} bordered={true}>
                            <Icon style={styles.icon} name="mail"/>
                            <Input style={styles.input} placeholder='Email' keyboardType="email-address"/>
                        </Item>
                    </View>

                    <View style={styles.fieldItem}>
                        <Text style={styles.label}>Name</Text>
                        <Item useNativeDriver={true} rounded={true} bordered={true}
                              secureTextEntry={true}>
                            <Icon style={styles.icon} name="person"/>
                            <Input style={styles.input} placeholder="Name"/>
                        </Item>
                    </View>


                    <View style={styles.fieldItem}>
                        <Text style={styles.label}>Phone</Text>
                        <Item useNativeDriver={true} rounded={true} bordered={true}
                              secureTextEntry={true}>
                            <Icon style={styles.icon} name="call"/>
                            <Input style={styles.input} placeholder="Phone"/>
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

                    <View style={styles.fieldItem}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <Item useNativeDriver={true} rounded={true} bordered={true}
                              secureTextEntry={true}>
                            <Icon style={styles.icon} name="lock"/>
                            <Input style={styles.input} placeholder="Confirm Password" secureTextEntry={true}/>
                        </Item>
                    </View>


                    <Button
                        style={styles.button}
                        full={true}
                        primary={true}
                        onPress={handleSignInPress}
                        rounded={true}
                        iconLeft={true}>
                        <Icon name="paper-plane"/>
                        <Text style={styles.text}>Sign Up</Text>
                    </Button>

                    <Button onPress={handleAlreadyHaveAccountPress} block={true} transparent={true}>
                        <Text style={styles.forgotPasswordText}>Already have an account? Sign In</Text>
                    </Button>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 50
    },
    formContainer: {
        padding: 16,
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: 'white',
        flex: 1
    },
    fieldItem: {
        marginVertical: 8,
    },
    label: {
        marginBottom: 8,
        marginLeft: 18,
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 12,
    }, button: {
        marginVertical: 8,
    },
    forgotPasswordText: {
        color: 'gray',
        textTransform: 'capitalize',
        textAlign: 'left',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'rgba(0,125,125,0.1)',
        borderBottomRightRadius: 24,
        borderTopRightRadius: 24,
    },
    icon: {
        color: 'blue',
    },
    appNameText: {
        fontSize: 36,
        textAlign: 'center',
        color: 'white',
    },
    secondaryText: {
        fontSize: 24,
        color: 'blue',
        marginLeft: 16,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    sloganText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default SignUpScreen;
