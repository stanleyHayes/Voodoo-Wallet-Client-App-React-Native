import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Item, Text, Button, Icon, Fab} from 'native-base';

function ForgotPasswordScreen({navigation}) {

    function handleForgotPress() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.appNameText}>Voodoo Wallet</Text>
                <Text style={styles.sloganText}>Where bitcoin rains</Text>
            </View>

            <View style={styles.formContainer}>

                <Text style={styles.secondaryText}>forgot password</Text>

                <View style={styles.fieldItem}>
                    <Text style={styles.label}>Email</Text>
                    <Item useNativeDriver={true} rounded={true} bordered={true}>
                        <Icon style={styles.icon} name="mail"/>
                        <Input style={styles.input} placeholder='Email' keyboardType="email-address"/>
                    </Item>
                </View>

                <Text style={styles.instructionText}>Enter the email associated with your account</Text>

                <Button
                    style={styles.button}
                    full={true}
                    primary={true}
                    onPress={handleForgotPress}
                    rounded={true}
                    iconLeft={true}>
                    <Icon name="paper-plane"/>
                    <Text style={styles.text}>Reset Password</Text>
                </Button>

            </View>
        </View>
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
        paddingVertical: 50,
    },
    formContainer: {
        padding: 16,
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: 'white',

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
    instructionText: {
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 16,
        color: "gray"
    },
    fab: {
        backgroundColor: "white",
        elevation: 4
    },
    backIcon: {
        color: "blue"
    }
});

export default ForgotPasswordScreen;
