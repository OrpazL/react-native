import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The MealDetailScreen screen!
            </Text>
            <Button title="Go back to categories" onPress={() => {
                props.navigation.popToTop()
            }} />
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