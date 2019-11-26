import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';
import { generalStyling } from '../constants';

const CardBackside = props => (
    <View>
        <Text style={generalStyling.largeText}>Answer: {props.answerText}</Text>
    </View>
);

const CardFrontside = props => (
    <View>
        <Text style={generalStyling.largeText}>
            Question: {props.questionText}
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
                        <TouchableOpacity onPress={this.switchSide}>
                            <Text style={generalStyling.smallText}>
                                Show answer
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <CardBackside answerText={this.props.answerText} />
                        <TouchableOpacity onPress={this.switchSide}>
                            <Text style={generalStyling.smallText}>
                                Show question
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                <Text style={generalStyling.smallText}>
                    Did you have the correct answer in mind?
                </Text>
                <TextButton
                    text="Yes, next question!"
                    onPressHandler={this.props.handlePressOnCorrectButton}
                />
                <TextButton
                    text="No, next question!"
                    onPressHandler={this.props.handlePressOnIncorrectButton}
                />
            </View>
        );
    }
}

export default Card;
