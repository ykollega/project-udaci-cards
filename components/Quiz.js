import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CardFrontside from './CardFrontside';

class Quiz extends React.Component {
    state = {
        currentCardIndex: 0,
        correctAnswersCount: 0,
    };

    // how many entries/cards does the deck have, this quiz is run onto
    countCardsInDeck = () => {
        const deckId = this.props.navigation.getParam('deckId');
        return this.props.decks[deckId].questions.length;
    };

    // increments state variable for current card index
    incrementCurrentCardIndex = () => {
        this.setState(prevState => ({
            currentCardIndex: prevState.currentCardIndex + 1,
        }));
    };

    // increments state variable for count of correct answers
    incrementCorrectAnswersCount = () => {
        this.setState(prevState => ({
            correctAnswersCount: prevState.correctAnswersCount + 1,
        }));
    };

    handlePressOnCorrectButton = () => {
        this.incrementCurrentCardIndex();
        this.incrementCorrectAnswersCount();
        console.log(
            'handlePressOnCorrectButton: new currentCardIndex: ',
            this.state.currentCardIndex
        );
        console.log(
            'handlePressOnCorrectButton: new correctAnswersCount: ',
            this.state.correctAnswersCount
        );
    };

    handlePressOnIncorrectButton = () => {
        this.incrementCurrentCardIndex();
        console.log(
            'handlePressOnCorrectButton: new currentCardIndex: ',
            this.state.currentCardIndex
        );
        console.log(
            'handlePressOnCorrectButton: new correctAnswersCount: ',
            this.state.correctAnswersCount
        );
    };

    render() {
        const deckId = this.props.navigation.getParam('deckId');
        const quizzedDeck = this.props.decks[deckId];
        const currentCard = quizzedDeck.questions[this.state.currentCardIndex];

        return (
            <View style={styles.container}>
                <Text style={styles.headline}>
                    Quiz on {quizzedDeck.title} deck
                </Text>
                {!currentCard ? (
                    <View>
                        <Text style={styles.succeedMessage}>
                            You have finsihed this quiz!
                        </Text>
                        <Text style={styles.score}>
                            {`Score: ${(
                                (this.state.correctAnswersCount * 100) /
                                this.countCardsInDeck()
                            ).toFixed(1)} %`}
                        </Text>
                    </View>
                ) : (
                    <CardFrontside
                        questionText={currentCard.question}
                        answerText={currentCard.answer}
                        handlePressOnCorrectButton={
                            this.handlePressOnCorrectButton
                        }
                        handlePressOnIncorrectButton={
                            this.handlePressOnIncorrectButton
                        }
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontSize: 30,
        textAlign: 'center',
    },
    succeedMessage: {
        fontSize: 20,
        textAlign: 'center',
    },
    score: {
        fontSize: 40,
        marginTop: 50,
        color: 'green',
        textAlign: 'center',
    },
});

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

export default connect(mapStateToProps)(Quiz);
