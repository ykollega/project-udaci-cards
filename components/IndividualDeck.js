import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { generalStyling } from '../constants';

class IndividualDeck extends React.Component {
    render() {
        // deckId is route parameter
        const deckId = this.props.navigation.getParam('deckId');
        const deckTitle = this.props.decks[deckId].title;
        const deckQuestions = this.props.decks[deckId].questions;
        const deckQuestionsCount = deckQuestions.length;
        return (
            <View style={generalStyling.container}>
                <Text style={generalStyling.largeText}>{deckTitle}</Text>
                <Text style={generalStyling.smallText}>
                    {`${deckQuestionsCount} card${
                        deckQuestionsCount > 1 ? 's' : ''
                    }`}
                </Text>
                <TextButton
                    text="Add Card"
                    onPressHandler={() => {
                        this.props.navigation.navigate('AddCard', { deckId });
                    }}
                />
                {deckQuestions.length > 0 ? (
                    <TextButton
                        text="Start Quiz"
                        isDark="true"
                        onPressHandler={() => {
                            this.props.navigation.navigate('Quiz', { deckId });
                        }}
                    />
                ) : (
                    <Text style={generalStyling.smallText}>
                        Quiz is only startable when deck is having cards.
                    </Text>
                )}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

export default connect(mapStateToProps)(IndividualDeck);
