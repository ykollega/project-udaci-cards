import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

const TextButton = ({ text, isDark, onPressHandler }) => (
    <TouchableHighlight
        underlayColor={isDark ? '#222' : '#ddd'}
        style={isDark ? styles.darkContainer : styles.container}
        onPress={onPressHandler}
    >
        <Text style={isDark ? styles.whiteText : styles.darkText}>{text}</Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        marginBottom: 20,
        minWidth: 100,
        maxWidth: 260,
    },
    darkContainer: {
        backgroundColor: '#111',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        minWidth: 100,
        maxWidth: 260,
    },
    whiteText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    darkText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
    },
});

export default TextButton;
