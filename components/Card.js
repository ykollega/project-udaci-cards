import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import TextButton from './TextButton';

const CardBackside = props => (
    <View>
        <Text style={styles.headline}>Answer: {props.answerText}</Text>
        <Text style={styles.subline}>Did you really know it!?</Text>
    </View>
);

const CardFrontside = props => (
    <View>
        <Text style={styles.headline}>Question: {props.questionText}</Text>
        <Text style={styles.subline}>
            Did you have the correct answer in mind?
        </Text>
    </View>
);

class Card extends React.Component {
    state = {
        showFrontside: true,
    };

    switchSide = () => {
        this.setState(prevState => {
            return {
                showFrontside: !prevState.showFrontside,
            };
        });
    };

    render() {
        return (
            <View>
                {this.state.showFrontside ? (
                    <View>
                        <CardFrontside questionText={this.props.questionText} />
                        <TextButton
                            text="Show answer"
                            onPressHandler={this.switchSide}
                        />
                    </View>
                ) : (
                    <View>
                        <CardBackside answerText={this.props.answerText} />
                        <TextButton
                            text="Show question"
                            onPressHandler={this.switchSide}
                        />
                    </View>
                )}
                <TextButton
                    text="Yes, next question!"
                    onPressHandler={this.props.handlePressOnCorrectButton}
                    style={styles.correctButton}
                />
                <TextButton
                    text="No, next question!"
                    onPressHandler={this.props.handlePressOnIncorrectButton}
                    style={styles.incorrectButton}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
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

export default Card;
