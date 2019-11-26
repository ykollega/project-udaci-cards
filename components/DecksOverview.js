import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import DeckHash from './DeckHash';
import TextButton from './TextButton';
import { IS_DEV_ENV, generalStyling } from '../constants';
import { clearStorage } from '../api';

class DecksOverview extends React.Component {
    handleOpenDeckDetails = deckId => {
        this.props.navigation.navigate('IndividualDeck', { deckId: deckId });
    };

    render() {
        const allDeckIds = Object.keys(this.props.decks);
        return (
            <View style={[generalStyling.container]}>
                <Text style={generalStyling.largeText}>Decks Overview</Text>
                {IS_DEV_ENV && (
                    <TextButton
                        text="Clear AsyncStorage"
                        onPressHandler={() => {
                            clearStorage();
                        }}
                    />
                )}
                {Object.keys(this.props.decks).length > 0 ? (
                    <ScrollView style={{ width: '100%' }}>
                        {allDeckIds.map(deckId => {
                            if (this.props.decks[deckId] !== null) {
                                return (
                                    <DeckHash
                                        key={deckId}
                                        {...this.props.decks[deckId]}
                                        onPressHandler={() => {
                                            this.handleOpenDeckDetails(deckId);
                                        }}
                                    />
                                );
                            }
                        })}
                    </ScrollView>
                ) : (
                    <Text style={customStyling.noDecksMessage}>
                        No decks found
                    </Text>
                )}
                <TextButton
                    text="Add new deck"
                    onPressHandler={() => {
                        this.props.navigation.navigate('AddDeck');
                    }}
                ></TextButton>
            </View>
        );
    }
}

const customStyling = StyleSheet.create({
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
