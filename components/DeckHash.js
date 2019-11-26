import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { generalStyling } from '../constants';

const DeckHash = ({ title, questions, onPressHandler }) => (
    <TouchableHighlight underlayColor="#eee" onPress={onPressHandler}>
        <View style={customStyling.deckHashWrapper}>
            <Text style={generalStyling.mediumText}>{title}</Text>
            <Text
                style={generalStyling.smallText}
            >{`${questions.length} cards`}</Text>
        </View>
    </TouchableHighlight>
);

export default DeckHash;

const customStyling = StyleSheet.create({
    deckHashWrapper: {
        width: '100%',
        padding: 20,
        backgroundColor: '#ddd',
        marginTop: 5,
    },
});
