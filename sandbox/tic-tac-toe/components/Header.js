import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from './TitleText';
import Colors from '../constants/Colors';

export default Header = props => {

    return (
        <View style={styles.header}>
            <TitleText style={styles.title}>Tic Tac Toe</TitleText>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 24,
    }
});