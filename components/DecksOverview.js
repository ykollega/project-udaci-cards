import React from 'react';
import { Text, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import DeckHash from './DeckHash';
import TextButton from './TextButton';
import { generalStyling } from '../constants';

class DecksOverview extends React.Component {
    handleOpenDeckDetails = deckId => {
        this.props.navigation.navigate('IndividualDeck', { deckId: deckId });
    };

    render() {
        const allDeckIds = Object.keys(this.props.decks);
        return (
            <ScrollView contentContainerStyle={generalStyling.container}>
                <Text style={generalStyling.largeText}>Decks Overview</Text>
                {Object.keys(this.props.decks).length > 0 ? (
                    allDeckIds.map(deckId => (
                        <DeckHash
                            key={deckId}
                            {...this.props.decks[deckId]}
                            onPressHandler={() => {
                                this.handleOpenDeckDetails(deckId);
                            }}
                        />
                    ))
                ) : (
                    <Text style={customStyling.noDecksMessage}>
                        No Decks found
                    </Text>
                )}
                <TextButton
                    text="Add new deck"
                    onPressHandler={() => {
                        this.props.navigation.navigate('AddDeck');
                    }}
                ></TextButton>
            </ScrollView>
        );
    }
}

const customStyling = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    noDecksMessage: {
        fontSize: 20,
        color: 'red',
    },
});

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addDeck: deckName => {
            dispatch(addDeck(deckName));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksOverview);
