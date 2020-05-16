import React from 'react';
import {Headline} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

function ResetPasswordScreen() {
    return (
        <View style={styles.container}>
            <Headline>Reset Password Screen</Headline>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ResetPasswordScreen;
