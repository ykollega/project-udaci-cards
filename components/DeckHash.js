import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DeckHash = ({ title, questions }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subline}>{`${questions.length} cards`}</Text>
    </View>
);

export default DeckHash;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 100,
        backgroundColor: '#ddd',
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
    },
    subline: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
        color: '#666',
    },
});
