import React from 'react';
import {Container, Content, Header, Left, Body, Button, Icon, Text, Card, CardItem, Right} from 'native-base';
import {StyleSheet, View} from 'react-native';

function ProfileScreen({navigation}) {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent={true} onPress={() => (navigation.goBack())}>
                        <Icon name="chevron-left" type="MaterialIcons"/>
                    </Button>
                </Left>

                <Body>
                    <Text>Profile</Text>
                </Body>

                <Right>
                    <Button transparent={true} onPress={() => (navigation.navigate("EditProfileScreen"))}>
                        <Icon name="edit" type="MaterialIcons"/>
                    </Button>
                </Right>
            </Header>
            <Content>
                <View style={styles.formContainer}>
                    <Card>
                        <CardItem bordered={true} header={true}>
                            <Text style={styles.header}>Personal Info</Text>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Name</Text>
                                <Text style={styles.value}>Stanley Hayford</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Email</Text>
                                <Text
                                    style={styles.value} dataDetectorType="email">hayfordstanley@gmail.com</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Phone</Text>
                                <Text style={styles.value} dataDetectorType="phoneNumber">+233270048319</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Date of Birth</Text>
                                <Text style={styles.value}>{new Date('1993-08-29').toDateString()}</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Role</Text>
                                <Text style={styles.value}>USER</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem bordered={true} header={true}>
                            <Text style={styles.header}>Address Information</Text>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Country</Text>
                                <Text style={styles.value}>Ghana</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Region or State</Text>
                                <Text style={styles.value}>Central</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>City</Text>
                                <Text style={styles.value}>Cape Coast</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Address</Text>
                                <Text style={styles.value}>Aboom Wells Street</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>House Number</Text>
                                <Text style={styles.value}>F 96B/3</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Ghana Post Address</Text>
                                <Text style={styles.value}>GP 0048</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
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
    title: {
        color: 'gray',
        fontSize: 12,
    },
    value: {
        fontSize: 18,
        color: '#555555',
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
});

export default ProfileScreen;
