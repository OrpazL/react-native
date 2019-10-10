import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TitleText from '../components/TitleText';
import Header from '../components/Header';
import MainButton from '../components/MainButton';

export default StartGameScreen = props => {


    return (
        <View style={styles.screen}>
            <Text style={styles.instructions}>Click the button to Start the Game!</Text>
            <MainButton onPress={props.onStartGame}>START GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    instructions: {
        marginVertical: 30,
        fontWeight: 'bold',
        fontSize: 18
    }
});