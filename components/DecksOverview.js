import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AddDeck from './AddDeck';

class DecksOverview extends React.Component {
    handleOpenDeckDetails = deckId => {
        this.props.navigation.navigate('IndividualDeck', { deckId: deckId });
    };

    render() {
        const allDeckIds = Object.keys(this.props.decks);

        return (
            <View style={styles.container}>
                <Text style={styles.headline}>Decks Overview</Text>
                {allDeckIds.length > 0 ? (
                    allDeckIds.map(key => {
                        return (
                            <TouchableHighlight
                                key={key}
                                onPress={() => {
                                    this.handleOpenDeckDetails(key);
                                }}
                            >
                                <Text>{this.props.decks[key].title}</Text>
                            </TouchableHighlight>
                        );
                    })
                ) : (
                    <Text style={styles.noDecksMessage}>No Decks found</Text>
                )}
                <TouchableHighlight
                    underlayColor="#eee"
                    style={styles.addNewDeckButton}
                    onPress={() => {
                        this.props.navigation.navigate('AddDeck');
                    }}
                >
                    <Text style={styles.addNewDeckButtonText}>
                        Add new deck
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
    },
    addNewDeckButton: {
        width: 150,
        backgroundColor: '#eee',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginTop: 40,
    },
    addNewDeckButtonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
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
