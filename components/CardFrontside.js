import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';

class CardFrontside extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>{this.props.questionText}</Text>
                <Text style={styles.subline}>
                    Do you have the correct answer in mind?
                </Text>
                <TextButton
                    text="Correct"
                    onPressHandler={this.props.handlePressOnCorrectButton}
                    style={styles.correctButton}
                />
                <TextButton
                    text="Incorrect"
                    onPressHandler={this.props.handlePressOnIncorrectButton}
                    style={styles.incorrectButton}
                />
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
    question: {
        fontSize: 30,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        borderStyle: 'solid',
    },
    subline: {
        fontSize: 20,
        textAlign: 'center',
    },
    correctButton: {
        backgroundColor: '#0f0',
    },
    incorrectButton: {
        backgroundColor: '#f00',
    },
});

export default CardFrontside;
