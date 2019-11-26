import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { generalStyling } from '../constants';

const DeckHash = ({ title, questions, onPressHandler }) => (
    <TouchableOpacity onPress={onPressHandler}>
        <View style={customStyling.deckHashWrapper}>
            <Text style={generalStyling.mediumText}>{title}</Text>
            <Text
                style={generalStyling.smallText}
            >{`${questions.length} cards`}</Text>
        </View>
    </TouchableOpacity>
);

export default DeckHash;

const customStyling = StyleSheet.create({
    deckHashWrapper: {
        padding: 20,
        backgroundColor: '#ddd',
        marginTop: 5,
    },
});
