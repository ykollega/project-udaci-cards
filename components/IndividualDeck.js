import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';

class IndividualDeck extends React.Component {
    handleAddCard = () => {
        console.log('open add card route!');
    };

    handleStartQuiz = () => {
        console.log('start quiz!');
    };

    render() {
        // deckId is route parameter
        const deckId = this.props.navigation.getParam('deckId');
        const deckTitle = this.props.decks[deckId].title;
        const deckQuestions = this.props.decks[deckId].questions;
        return (
            <View style={styles.container}>
                <Text style={styles.headline}>{deckTitle}</Text>
                <Text style={styles.cardCount}>
                    {deckQuestions.length} cards
                </Text>
                <TextButton
                    text="Add Card"
                    onPressHandler={() => {
                        this.props.navigation.navigate('AddCard', { deckId });
                    }}
                />
                <TextButton
                    text="Start Quiz"
                    isDark="true"
                    onPressHandler={() => {
                        this.handleStartQuiz;
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5,
    },
    cardCount: {
        padding: 0,
        marginBottom: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
    addCardButton: {
        backgroundColor: 'white',
        padding: 10,
        width: 100,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    addCardButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    startQuizButton: {
        backgroundColor: 'black',
        padding: 10,
        width: 100,
        alignSelf: 'center',
    },
    startQuizButtonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

export default connect(mapStateToProps)(IndividualDeck);
