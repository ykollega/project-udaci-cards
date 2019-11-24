import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class DeckOverview extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Deck Overview</Text>
                {Object.keys(this.props.decks).map(key => {
                    return <Text>{this.props.decks[key].title}</Text>;
                })}
            </View>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DeckOverview);
