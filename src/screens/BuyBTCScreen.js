import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Content, Container, Header, Body, Left, Icon, Button, Text, Item, Input, Picker} from 'native-base';
import {Card} from 'react-native-paper';

function BuyBTCScreen({navigation}) {

    const app = {
        buyRate: 5.9,
    };

    const [userMinersFee, setUserMinersFee] = useState(0.2);
    const [amountNeeded, setAmountNeeded] = useState(0);
    const [bitcoinAmount, setBitcoinAmount] = useState(0);
    const [amountToPay, setAmountToPay] = useState(0);

    function handleMinersFeeChange(fee) {
        setUserMinersFee(fee);
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
                    <Text>Buy BTC</Text>
                </Body>
            </Header>
            <Content padder={true}>
                <Card elevation={4} style={styles.card}>
                    <Card.Title title="Buy BTC"/>
                    <Card.Content>
                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Amount you need</Text>
                            <Item
                                useNativeDriver={true}
                                rounded={true}
                                bordered={true}>
                                <Input style={styles.input} placeholder="Amount needed USD"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Amount to pay</Text>
                            <Item useNativeDriver={true} rounded={true} bordered={true}>
                                <Input style={styles.input} placeholder="Amount to pay GHS"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Transaction ID</Text>
                            <Item useNativeDriver={true} rounded={true} bordered={true}>
                                <Input style={styles.input} placeholder="Transaction ID"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Bitcoin Address</Text>
                            <Item useNativeDriver={true} rounded={true} bordered={true}>
                                <Input style={styles.input} placeholder="Bitcoin Address"/>
                            </Item>
                        </View>

                        <View style={styles.fieldItem}>
                            <Text style={styles.label}>Miners Fee</Text>
                            <Picker
                                mode="dropdown"
                                enabled={true}
                                placeholder="Select Miners Fee"
                                onValueChange={handleMinersFeeChange}
                                selectedValue={userMinersFee}>
                                <Picker.Item label="LOW" value={0.2}/>
                                <Picker.Item label="MEDIUM" value={0.5}/>
                                <Picker.Item label="HIGH" value={0.7}/>
                            </Picker>
                        </View>
                    </Card.Content>
                </Card>

                <Card elevation={4} style={styles.card}>
                    <Card.Title title="Order"/>
                    <Card.Content style={styles.cardContent}>
                        <Text style={styles.information}>You are buying</Text>
                        <Text style={styles.amount}>{amountNeeded} USD</Text>
                        <Text style={styles.information}>{bitcoinAmount} BTC </Text>

                        <Text style={styles.information}>And will pay <Text style={styles.amount}>{amountToPay}</Text> GHS</Text>

                        <Text style={styles.information}>at <Text style={styles.amount}>{app && app.buyRate}</Text> GHS per 1 USD</Text>

                        <Text style={styles.information}>Miners Fee</Text>
                        <Text style={styles.amount}>{userMinersFee * (app && app.buyRate)} GHS</Text>


                        <Text style={styles.information}>Total</Text>
                        <Text style={styles.amount}>
                            {Math.ceil(amountToPay + userMinersFee * (app && app.buyRate) || 0)} GHS
                        </Text>

                        <Button style={styles.button}
                                full={true}
                                rounded={true}
                                primary={true}
                                size="large">
                            <Text>
                                Buy Bitcoin
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

export default BuyBTCScreen;
