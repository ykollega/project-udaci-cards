import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

class AddDeck extends React.Component {
    state = {
        text: 'hase',
    };

    handleOnChangeText = newText => {
        this.setState({ text: newText });
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this.handleOnChangeText}
                    value={this.state.text}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
});

export default AddDeck;
