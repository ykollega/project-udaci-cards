import React from 'react';
import { Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions';
import { encodeDeckName } from '../helpers';
import { generalStyling } from '../constants';
import TextButton from './TextButton';

class AddDeck extends React.Component {
    // state is holding the current value of the text input field
    state = {
        text: '',
    };

    handleOnChangeText = newText => {
        this.setState({ text: newText });
    };

    handleSubmit = () => {
        const deckNameMinLength = 1;
        const deckNameMaxLength = 50;
        const newDeckNameLength = this.state.text.length;
        const newDeckKey = encodeDeckName(this.state.text);

        // check whether key already exists
        if (Object.keys(this.props.decks).includes(newDeckKey)) {
            alert('This deck already exists');
            return;
        }

        // check if given deck name is too short or too long
        if (
            newDeckNameLength > deckNameMaxLength ||
            newDeckNameLength < deckNameMinLength
        ) {
            alert(
                `Deck name must be longer than ${deckNameMinLength} but shorter than ${deckNameMaxLength}`
            );
            return;
        }

        // insert only if all error cases do not trigger, then go to IndividualDeck view
        this.props.handleAddDeck(this.state.text);
        this.props.navigation.navigate('IndividualDeck', {
            deckId: newDeckKey,
        });
        // reset textInput to empty string
        this.setState({ text: '' });
    };

    render() {
        return (
            <KeyboardAvoidingView
                style={generalStyling.container}
                behavior="padding"
            >
                <Text style={generalStyling.largeText}>
                    What is the name of your new deck?
                </Text>
                <TextInput
                    placeholder="Name of your new deck..."
                    style={generalStyling.textInput}
                    onChangeText={this.handleOnChangeText}
                    value={this.state.text}
                />
                <TextButton
                    text="Submit"
                    onPressHandler={this.handleSubmit}
                ></TextButton>
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
        handleAddDeck: deckName => {
            dispatch(handleAddDeck(deckName));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
