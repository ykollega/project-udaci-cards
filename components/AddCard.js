import React from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import TextButton from './TextButton';
import { generalStyling } from '../constants';

class AddCard extends React.Component {
    state = {
        questionText: '',
        answerText: '',
    };

    handleOnChangeQuestionText = newText => {
        this.setState({
            answerText: this.state.answerText,
            questionText: newText,
        });
    };

    handleOnChangeAnswerText = newText => {
        this.setState({
            questionText: this.state.questionText,
            answerText: newText,
        });
    };

    handleSubmit = () => {
        const textMinLength = 1;
        const textMaxLength = 255;
        const questionLength = this.state.questionText.length;
        const answerLength = this.state.answerText.length;

        // check if given question is too short or too long
        if (questionLength > textMaxLength || questionLength < textMinLength) {
            alert(
                `Question must be longer than ${textMinLength} but shorter than ${textMaxLength} characters.`
            );
            return;
        }

        // check if given question is too short or too long
        if (answerLength > textMaxLength || answerLength < textMinLength) {
            alert(
                `Answer must be longer than ${textMinLength} but shorter than ${textMaxLength} characters.`
            );
            return;
        }

        // insert only if all error cases do not trigger, then go back to IndividualDeck view
        this.props.addCard(
            this.props.navigation.getParam('deckId'),
            this.state.questionText,
            this.state.answerText
        );
        this.props.navigation.goBack();
    };

    render() {
        return (
            <KeyboardAvoidingView
                style={generalStyling.container}
                behavior="padding"
            >
                <Text style={generalStyling.largeText}>
                    {`Add a new card to deck ${
                        this.props.decks[
                            this.props.navigation.getParam('deckId')
                        ].title
                    }`}
                </Text>
                <Text style={generalStyling.mediumText}>Question:</Text>
                <TextInput
                    placeholder="Insert question here..."
                    style={generalStyling.textInput}
                    onChangeText={this.handleOnChangeQuestionText}
                    value={this.state.questionText}
                />
                <Text style={generalStyling.mediumText}>Answer:</Text>
                <TextInput
                    placeholder="Insert correct answer here..."
                    style={generalStyling.textInput}
                    onChangeText={this.handleOnChangeAnswerText}
                    value={this.state.answerText}
                />

                <TextButton text="Submit" onPressHandler={this.handleSubmit} />
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addCard: (deckId, questionText, answerText) => {
            dispatch(addCard(deckId, questionText, answerText));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
