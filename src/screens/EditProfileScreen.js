import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Input, Item, Text, Button, Icon, Content, Container, Fab, Header, Body, Left} from 'native-base';

function EditProfileScreen({navigation}) {

    function handleSaveProfilePress() {

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
                    <Text>Edit Profile</Text>
                </Body>

            </Header>
            <Content padder={true}>
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
                    <Text style={styles.label}>Address</Text>
                    <Item useNativeDriver={true} rounded={true} bordered={true}
                          secureTextEntry={true}>
                        <Icon style={styles.icon} name="location-on" type="MaterialIcons"/>
                        <Input style={styles.input} placeholder="Address"/>
                    </Item>
                </View>

                <View style={styles.fieldItem}>
                    <Text style={styles.label}>Ghana Post Address</Text>
                    <Item useNativeDriver={true} rounded={true} bordered={true}>
                        <Icon style={styles.icon} type="MaterialIcons" name="person-pin"/>
                        <Input style={styles.input} placeholder="Ghana Post Address"/>
                    </Item>
                </View>

                <View style={styles.fieldItem}>
                    <Text style={styles.label}>House Number</Text>
                    <Item useNativeDriver={true} rounded={true} bordered={true}
                          secureTextEntry={true}>
                        <Icon style={styles.icon} name="home"/>
                        <Input style={styles.input} placeholder="House Number"/>
                    </Item>
                </View>


                <Button
                    style={styles.button}
                    full={true}
                    primary={true}
                    onPress={handleSaveProfilePress}
                    rounded={true}
                    iconLeft={true}>
                    <Icon name="paper-plane"/>
                    <Text style={styles.text}>Save Changes</Text>
                </Button>
            </Content>
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
        flex: 1,
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
    }
});

export default EditProfileScreen;
