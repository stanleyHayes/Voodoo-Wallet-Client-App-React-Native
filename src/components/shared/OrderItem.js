import React from 'react';
import {ListItem, Icon, Left, Body, Right, Text, List} from 'native-base';
import {StyleSheet} from 'react-native';

function OrderItem({item, navigation, index, size}) {

    function handleItemPressed() {
        navigation.navigate('OrderDetail', {order: item});
    }

    return (
        <List>
            <ListItem
                first={index === 0}
                last={index === size - 1}
                button={true}
                thumbnail={true}
                onPress={handleItemPressed}>
                <Left>
                    <Icon
                        type="MaterialIcons"
                        name={item.status === 'COMPLETED' ? 'check-circle' : 'check'}
                        style={{
                            color: item.status === 'COMPLETED' ? 'green' : 'black',
                        }}
                    />
                </Left>
                <Body>
                    <Text style={styles.date}>{new Date(item.createdAt).toDateString()}</Text>
                    {item.type === 'SELLING' ? (
                        <Text style={styles.contentText}>{item.bitcoinAmount} bitcoin sold
                            for {item.amountSold} GHS at {' '}
                            {item.sellRate} per 1 USD
                        </Text>
                    ) : (
                        <Text style={styles.contentText}>{item.bitcoinAmount} bitcoin received
                            for {item.amountPaid} GHS at {' '}
                            {item.buyRate} per 1 USD
                        </Text>
                    )}
                </Body>
                <Right>
                    <Icon name="chevron-right" type="MaterialIcons"/>
                </Right>
            </ListItem>
        </List>
    );
}

const styles = StyleSheet.create({
    completedContainer: {
        backgroundColor: 'green',
        borderRadius: 16,
    },
    pendingContainer: {
        backgroundColor: 'black',
        borderRadius: 16,
    },
    completedText: {
        color: 'white',
        fontWeight: 'bold',
    },
    pendingText: {
        color: 'yellow',
        fontWeight: 'bold',
    },
    textContainer: {
        marginVertical: 8,

    },
    text: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#111111',
    },
    card: {
        marginBottom: 2,
    },
    date: {
        color: 'gray',
        fontSize: 14,
    },
    contentText: {
        fontSize: 16,
        color: '#666666',
        fontWeight: "bold"
    },
});

export default OrderItem;
