import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import TextButton from './TextButton';

class AddCard extends React.Component {
    state = {
        questionText: 'What?',
        answerText: 'Yo!',
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
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.headline}>Question:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleOnChangeQuestionText}
                    value={this.state.questionText}
                />
                <View
                    style={{
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        borderBottomStyle: 'solid',
                    }}
                />
                <Text style={styles.headline}>Answer:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleOnChangeAnswerText}
                    value={this.state.answerText}
                />
                <View
                    style={{
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        borderBottomStyle: 'solid',
                    }}
                />
                <TextButton text="Submit" onPressHandler={this.handleSubmit} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        padding: 10,
        width: '100%',
        marginBottom: 10,
        fontSize: 16,
    },
});

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
