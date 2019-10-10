import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default TitleText = props => (<Text {...props} style={{ ...styles.text, ...props.style }}>{props.children}</Text>);

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
});