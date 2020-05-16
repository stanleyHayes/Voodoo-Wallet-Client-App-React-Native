import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {Text, Content, Container} from "native-base";
import OrderItem from '../components/shared/OrderItem';

function BoughtBTCOrdersScreen({navigation}) {

    const order = {
        user: {
            name: 'Stanley Hayford',
        },
        createdAt: '2020-08-29',
        transactionId: '887478374838',
        amountReceived: 580,
        amountPaid: 600,
        bitcoinRate: 65879.75,
        bitcoinAmount: 0.001457485748,
        bitcoinAddress: 'Gaerhj348haefA3klhdf',
        minersFee: 0.7,
        buyRate: 5.8,
        status: 'COMPLETED',
        type: "BUYING"
    };


    const order1 = {
        user: {
            name: 'Stanley Hayford',
        },
        createdAt: '2020-08-29',
        transactionId: '887478374838',
        amountReceived: 5800,
        amountPaid: 6000,
        bitcoinRate: 65879.75,
        bitcoinAmount: 0.01457485748,
        bitcoinAddress: 'Gaerhj3ASDFhaefA344lhdf',
        minersFee: 0.7,
        buyRate: 5.8,
        status: 'PENDING',
        type: "SELLING"
    };

    const [boughtOrders, setBoughtOrders] = useState([order, order1, order, order1, order, order1, order, order1, order, order1, order, order1]);
    const [open, setOpen] = useState(false);

    function handleFabGroupOpen({open}) {
        setOpen(open);
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
                (boughtOrders.length === 0) ? (
                    <View style={styles.noOrdersContainer}>
                        <Text>No orders</Text>
                    </View>
                ) : (
                    <FlatList
                        keyExtractor={keyExtractor}
                        data={boughtOrders}
                        renderItem={function ({item, index}) {
                            return (
                                <OrderItem index={index} size={boughtOrders.length} key={index} navigation={navigation} item={item}/>
                            );
                        }}
                    />
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

export default BoughtBTCOrdersScreen;
