import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/Colors';
export default MainButton = props => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{ ...styles.buttonContainer, ...props.style }}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5
    },
    buttonText: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
});