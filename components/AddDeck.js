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
import { addDeck } from '../actions';

class AddDeck extends React.Component {
    state = {
        text: 'hase',
    };

    handleOnChangeText = newText => {
        this.setState({ text: newText });
    };

    handleSubmit = () => {
        this.props.addDeck(this.state.text);
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <Text>Add Deck</Text>
                <Text style={styles.headline}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleOnChangeText}
                    value={this.state.text}
                />
                <TouchableHighlight
                    underlayColor="#eee"
                    style={styles.button}
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
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
        marginBottom: 5,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        width: 100,
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        addDeck: deckName => {
            dispatch(addDeck(deckName));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
