import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default FavoritesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The FavoritesScreen screen!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});