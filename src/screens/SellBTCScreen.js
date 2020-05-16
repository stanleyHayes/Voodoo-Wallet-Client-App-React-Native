import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Content, Container, Header, Body, Left, Icon, Button, Text, Item, Input} from 'native-base';
import {Card} from 'react-native-paper';

function SellBTCScreen({navigation}) {

    const app = {
        sellRate: 5.5,
        bitcoinAddress: "Agkljsfa#$GSrgj8hsrg"
    };

    const [userMinersFee, setUserMinersFee] = useState(0);
    const [amountToSell, setAmountToSell] = useState(0);
    const [bitcoinAmount, setBitcoinAmount] = useState(0);
    const [amountToReceive, setAmountToReceive] = useState(0);


    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent={true} onPress={() => (navigation.goBack())}>
                        <Icon name="chevron-left" type="MaterialIcons"/>
                    </Button>
                </Left>
                <Body>
                    <Text>Sell BTC</Text>
                </Body>
            </Header>
            <Content padder={true}>
                <Card elevation={4} style={styles.card}>
                    <Card.Title title="Sell BTC"/>
                    <Card.Content>
                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Amount to sell</Text>
                            <Item
                                useNativeDriver={true}
                                rounded={true}
                                bordered={true}>
                                <Input style={styles.input} placeholder="Amount to sell USD"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Amount to receive</Text>
                            <Item useNativeDriver={true} rounded={true} bordered={true}>
                                <Input style={styles.input} placeholder="Amount to receive GHS"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Payment phone number</Text>
                            <Item useNativeDriver={true} rounded={true} bordered={true}>
                                <Input style={styles.input} placeholder="Payment Phone"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Bitcoin Address</Text>
                            <Item useNativeDriver={true} rounded={true} bordered={true}>
                                <Input style={styles.input} placeholder="Payment name"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Bitcoin Address</Text>
                            <Text variant="caption">{app.bitcoinAddress}</Text>
                        </View>
                    </Card.Content>
                </Card>

                <Card elevation={4} style={styles.card}>
                    <Card.Title title="Order"/>
                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.information}>You are selling</Text>
                        <Text style={styles.amount}>{amountToSell} USD</Text>
                        <Text style={styles.information}>{bitcoinAmount} BTC </Text>

                        <Text style={styles.information}>And will pay <Text style={styles.amount}>{amountToReceive}</Text> GHS</Text>

                        <Text style={styles.information}>at <Text style={styles.amount}>{app && app.sellRate}</Text> GHS per 1 USD</Text>

                        <Text style={styles.information}>Miners Fee</Text>
                        <Text style={styles.amount}>{userMinersFee} GHS</Text>


                        <Text style={styles.information}>Total</Text>
                        <Text style={styles.amount}>
                            {amountToReceive} GHS
                        </Text>

                        <Button style={styles.button}
                                full={true}
                                rounded={true}
                                primary={true}
                                size="large">
                            <Text>
                                Sell Bitcoin
                            </Text>
                        </Button>
                    </Card.Content>
                </Card>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fieldItem: {
        marginVertical: 8,
    },
    card: {
        marginVertical: 16
    },label: {
        marginBottom: 8,
        marginLeft: 18,
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 12,
    }, button: {
        marginVertical: 8,
    },
    cardContent: {
        alignItems: "center"
    },
    amount: {
        color: "#555555",
        fontSize: 24,
        marginVertical: 4,
        fontWeight: "bold"
    },
    information: {
        color: "#777777",
        marginVertical: 4
    }
});

export default SellBTCScreen;

