import React from 'react';
import {Container, Content, Header, Left, Body, Button, Icon, Text, CardItem, Item, Input} from 'native-base';
import {Card} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

function OrderDetailScreen({navigation, route}) {

    const {order} = route.params;

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent={true} onPress={() => (navigation.goBack())}>
                        <Icon name="chevron-left" type="MaterialIcons"/>
                    </Button>
                </Left>

                <Body>
                    <Text>Order Detail</Text>
                </Body>
            </Header>
            <Content padder={true}>
                <View style={styles.formContainer}>
                    <Card elevation={2}>
                        <CardItem bordered={true} header={true}>
                            <Text style={styles.header}>Order Info</Text>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Bitcoin Amount</Text>
                                <Text style={styles.value}>{order.bitcoinAmount} BTC</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Type</Text>
                                <Text
                                    style={styles.value}>{order.type}</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Transaction Date</Text>
                                <Text style={styles.value}>{new Date('1993-08-29').toDateString()}</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Status</Text>
                                <Text style={styles.value}>{order.status}</Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Bitcoin Rate</Text>
                                <Text style={styles.value}>{order.bitcoinRate} USD per 1 BTC</Text>
                            </Body>
                        </CardItem>

                        <CardItem bordered={true}>
                            <Body>
                                <Text style={styles.title}>Amount Received</Text>
                                <Text style={styles.value}>{order.amountReceived} GHS</Text>
                            </Body>
                        </CardItem>

                        {
                            (order.type === 'BUYING') ? (
                                <View>
                                    <CardItem bordered={true}>
                                        <Body>
                                            <Text style={styles.title}>Bitcoin Address</Text>
                                            <Text style={styles.value}>{order.bitcoinAddress}</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered={true}>
                                        <Body>
                                            <Text style={styles.title}>Amount Paid</Text>
                                            <Text
                                                style={styles.value}>{order.amountPaid} GHS</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered={true}>
                                        <Body>
                                            <Text style={styles.title}>Transaction ID</Text>
                                            <Text style={styles.value}>{order.transactionId}</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered={true}>
                                        <Body>
                                            <Text style={styles.title}>Buy Rate</Text>
                                            <Text style={styles.value}>{order.buyRate} GHS per 1 USD</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered={true}>
                                        <Body>
                                            <Text style={styles.title}>Miners Fee</Text>
                                            <Text style={styles.value}>{order.minersFee} USD</Text>
                                        </Body>
                                    </CardItem>
                                </View>
                            ) : (
                                <View>
                                    <CardItem bordered={true}>
                                        <Body>
                                            <Text style={styles.title}>Amount Sold</Text>
                                            <Text style={styles.value}>{order.amountSold} USD</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered={true}>
                                        <Body>
                                            <Text style={styles.title}>Sell Rate</Text>
                                            <Text
                                                style={styles.value}>{order.sellRate} GHS per 1 USD</Text>
                                        </Body>
                                    </CardItem>
                                </View>
                            )
                        }
                    </Card>
                </View>

                <View>
                    <Text style={styles.header}>Issues</Text>
                    <Card elevation={2}>
                        <Card.Title title="Raise Issue"/>
                        <Card.Content>
                            <View style={styles.fieldItem}>
                                <Text style={styles.label}>Title</Text>
                                <Item
                                    useNativeDriver={true}
                                    rounded={true}
                                    bordered={true}>
                                    <Input style={styles.input} placeholder="Title"/>
                                </Item>
                            </View>

                            <View style={styles.fieldItem}>
                                <Text style={styles.label}>Description</Text>
                                <Item useNativeDriver={true} rounded={true} bordered={true}>
                                    <Input style={styles.input} placeholder="Description"/>
                                </Item>
                            </View>

                            <Button style={styles.button}
                                    full={true}
                                    rounded={true}
                                    primary={true}
                                    size="large">
                                <Text>Submit Issue</Text>
                            </Button>
                        </Card.Content>
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
    formContainer: {
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
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
        fontSize: 20,
        marginVertical: 8,
        fontWeight: 'bold',
        color: '#888888',
        textAlign: "center"
    }, button: {
        marginVertical: 8,
    }, label: {
        marginVertical: 8,
        marginLeft: 18,
        fontWeight: 'bold',
        color: '#888888',
        fontSize: 12,
    },
});

export default OrderDetailScreen;
