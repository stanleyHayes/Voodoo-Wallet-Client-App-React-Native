import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Header, Body, Text, Content, Left, Right, Button, Card, CardItem} from 'native-base';

function DashboardScreen({navigation}) {

    const app = {
        buyInstructions: [
            'Enter amount needed in USD to get amount to pay in GHS',
            'Transfer amount in GHS to the provided payment number',
            'Enter transaction ID of the money transfer',
            'Enter your bitcoin address',
            'Choose miners fee',
        ],
        sellInstructions: [
            'Enter amount to sell in USD',
            'Get amount to receive in GHS',
            'Enter payment number',
            'Enter mobile money name',
        ],
    };

    return (
        <Container>
            <Header>
                <Body>
                    <Text>Dashboard</Text>
                </Body>
            </Header>
            <Content padder={true}>

                <View style={styles.currencyRatesContainer}>
                    <View style={styles.rateContainer}>
                        <Text style={styles.rateTitle}>Buy</Text>
                        <Text style={styles.rateValue}>5.9</Text>
                        <Text style={styles.rateInfo}>per 1 USD</Text>
                    </View>

                    <View style={styles.rateContainer}>
                        <Text style={styles.rateTitle}>Sell</Text>
                        <Text style={styles.rateValue}>5.5</Text>
                        <Text style={styles.rateInfo}>per 1 USD</Text>
                    </View>
                </View>

                <View style={styles.rateContainer}>
                    <Text style={styles.rateTitle}>Bitcoin</Text>
                    <Text style={styles.rateValue}>7895.64</Text>
                    <Text style={styles.rateInfo}>per 1 BTC</Text>
                </View>


                <Card>
                    <CardItem bordered={true} header={true} first={true}>
                        <Text style={styles.title}>Buy Instructions</Text>
                    </CardItem>
                    {
                        app.buyInstructions.map(function (instruction, index) {
                            return (
                                <CardItem bordered={true} key={index}>
                                    <Body>
                                        <Text style={styles.instruction}>{instruction}</Text>
                                    </Body>
                                </CardItem>
                            );
                        })
                    }
                </Card>

                <Card>
                    <CardItem bordered={true} header={true} first={true}>
                        <Text style={styles.title}>Sell Instructions</Text>
                    </CardItem>
                    {
                        app.sellInstructions.map(function (instruction, index) {
                            return (
                                <CardItem bordered={true} key={index}>
                                    <Body>
                                        <Text style={styles.instruction}>{instruction}</Text>
                                    </Body>
                                </CardItem>
                            );
                        })
                    }
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
    header: {
        textTransform: 'uppercase',
        color: '#555555',
        fontWeight: 'bold',
    },
    instruction: {
        color: '#555555',
        fontSize: 16,
    },
    rateContainer: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 24,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#777777',
        shadowColor: 'gray',
        shadowRadius: 24,
        shadowOpacity: 0.5,
        backgroundColor: 'white',
        marginVertical: 8,
        flex: 1,
        marginHorizontal: 4,
    },
    rateTitle: {
        color: 'gray',
        fontSize: 16,
    },
    rateValue: {
        fontSize: 48,
        color: 'gray',
        textAlign: 'center',
    },
    currencyRatesContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    },
    rateInfo: {
        fontSize: 12,
        color: 'gray',
    },
});

export default DashboardScreen;
