import React from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions';
import { encodeDeckName } from '../helpers';

class AddDeck extends React.Component {
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
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.headline}>
                    What is the name of your new deck?
                </Text>
                <TextInput
                    placeholder="Name of your new deck..."
                    style={styles.input}
                    onChangeText={this.handleOnChangeText}
                    value={this.state.text}
                />
                <TouchableHighlight
                    underlayColor="#ddd"
                    style={styles.button}
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
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
    button: {
        backgroundColor: '#eee',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        width: 100,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
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
        handleAddDeck: deckName => {
            dispatch(handleAddDeck(deckName));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
