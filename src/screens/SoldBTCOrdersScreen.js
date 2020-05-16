import React, {useState} from 'react';
import {Text, Title} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import OrderItem from '../components/shared/OrderItem';
import {Container, Fab, Button, Icon, Content} from 'native-base';

function SoldBTCOrdersScreen({navigation}) {

    const order = {
        user: {
            name: 'Stanley Hayford',
        },
        createdAt: '2020-08-29',
        transactionId: '887478374838',
        amountReceived: 550,
        amountSold: 100,
        bitcoinRate: 65879.75,
        bitcoinAmount: 0.001457485748,
        bitcoinAddress: 'Gaerhj348haefA3klhdf',
        sellRate: 5.5,
        status: 'COMPLETED',
        type: 'SELLING',
    };


    const order1 = {
        user: {
            name: 'Stanley Hayford',
        },
        createdAt: '2020-08-29',
        transactionId: '887478374838',
        amountReceived: 5500,
        amountPaid: 6000,
        bitcoinRate: 65879.75,
        bitcoinAmount: 0.01457485748,
        bitcoinAddress: 'Gaerhj3ASDFhaefA344lhdf',
        sellRate: 5.5,
        status: 'PENDING',
        type: 'SELLING',
    };

    const [soldOrders, setSoldOrders] = useState([order, order1, order, order1, order, order1, order, order1, order, order1, order, order1]);
    const [open, setOpen] = useState(false);

    function handleFabState() {
        setOpen(!open);
    }

    function handleBuyBTCPressed() {
        navigation.navigate('BuyBTCScreen');
    }

    function handleSellBTCPressed() {
        navigation.navigate('SellBTCScreen');
    }

    function keyExtractor(item, index) {
        return (
            index.toString()
        );
    }

    return (
        <Container>
            <View>
                {
                    (soldOrders.length === 0) ? (
                        <View style={styles.noOrdersContainer}>
                            <Title>No orders</Title>
                            {/*<Fab*/}
                            {/*    onPress={handleFabState}*/}
                            {/*    active={open}*/}
                            {/*    position="bottomRight"*/}
                            {/*    direction="up">*/}

                            {/*    <Button onPress={handleBuyBTCPressed}>*/}
                            {/*        <Text>Buy BTC</Text>*/}
                            {/*        <Icon name="plus"/>*/}
                            {/*    </Button>*/}
                            {/*    <Button onPress={handleSellBTCPressed}>*/}
                            {/*        <Text>Sell BTC</Text>*/}
                            {/*        <Icon name="plus"/>*/}
                            {/*    </Button>*/}
                            {/*</Fab>*/}
                        </View>
                    ) : (
                        <View>
                            {/*<Fab*/}
                            {/*    onPress={handleFabState}*/}
                            {/*    active={open}*/}
                            {/*    position="bottomRight"*/}
                            {/*    direction="up">*/}

                            {/*    <Button onPress={handleBuyBTCPressed}>*/}
                            {/*        <Text>Buy BTC</Text>*/}
                            {/*        <Icon name="plus"/>*/}
                            {/*    </Button>*/}
                            {/*    <Button onPress={handleSellBTCPressed}>*/}
                            {/*        <Text>Sell BTC</Text>*/}
                            {/*        <Icon name="plus"/>*/}
                            {/*    </Button>*/}
                            {/*</Fab>*/}
                            <FlatList
                                keyExtractor={keyExtractor}
                                data={soldOrders}
                                renderItem={function ({item, index}) {
                                    return (
                                        <OrderItem key={index} navigation={navigation} item={item}/>
                                    );
                                }}
                            />
                        </View>
                    )
                }
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    noOrdersContainer: {
        flex: 1,
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    groupFabContainer: {
        position: 'absolute',
        right: 60,
        top: 60,
        backgroundColor: 'green',
    },
    container: {
        flex: 1,
    },
});

export default SoldBTCOrdersScreen;
