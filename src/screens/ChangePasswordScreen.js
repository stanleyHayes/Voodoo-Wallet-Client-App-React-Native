import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Input, Item, Text, Button, Icon, Content, Container, Fab, Header, Body, Left} from 'native-base';

function ChangePasswordScreen({navigation}) {

    function handleSaveChangesPress() {

    }

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent={true} onPress={() => (navigation.goBack())}>
                        <Icon name="chevron-left" type="MaterialIcons"/>
                    </Button>
                </Left>

                <Body>
                    <Text>Change Password</Text>
                </Body>
            </Header>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.appNameText}>Voodoo Wallet</Text>
                    <Text style={styles.sloganText}>Where bitcoin rains</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.secondaryText}>Change Password</Text>


                    <View style={styles.fieldItem}>
                        <Text style={styles.label}>Current Password</Text>
                        <Item useNativeDriver={true} rounded={true} bordered={true}
                              secureTextEntry={true}>
                            <Icon style={styles.icon} name="lock"/>
                            <Input style={styles.input} placeholder="Current Password" secureTextEntry={true}/>
                        </Item>
                    </View>

                    <View style={styles.fieldItem}>
                        <Text style={styles.label}>New Password</Text>
                        <Item useNativeDriver={true} rounded={true} bordered={true}
                              secureTextEntry={true}>
                            <Icon style={styles.icon} name="lock"/>
                            <Input style={styles.input} placeholder="New Password" secureTextEntry={true}/>
                        </Item>
                    </View>


                    <View style={styles.fieldItem}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <Item useNativeDriver={true} rounded={true} bordered={true}
                              secureTextEntry={true}>
                            <Icon style={styles.icon} name="lock"/>
                            <Input style={styles.input} placeholder="Confirm New Password" secureTextEntry={true}/>
                        </Item>
                    </View>


                    <Button
                        style={styles.button}
                        full={true}
                        primary={true}
                        onPress={handleSaveChangesPress}
                        rounded={true}
                        iconLeft={true}>
                        <Icon name="paper-plane"/>
                        <Text style={styles.text}>Save Changes</Text>
                    </Button>
                </View>
            </View>
        </Container>
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
});

export default ChangePasswordScreen;
