import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function PlaceholderScreen({navigation, route}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{route.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    text: {
        color: "white"
    }
})

export default PlaceholderScreen;