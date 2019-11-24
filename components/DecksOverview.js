import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AddDeck from './AddDeck';

class DecksOverview extends React.Component {
    handleOpenDeckDetails = deckId => {
        this.props.navigation.navigate('IndividualDeck', { deckId: deckId });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headline}>Decks Overview</Text>
                {Object.keys(this.props.decks).map(key => {
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
                })}
                <AddDeck />
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
        marginBottom: 50,
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
