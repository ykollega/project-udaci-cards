import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckOverview from './components/DeckOverview';
import AddDeck from './components/AddDeck';

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Mobile Flash Cards</Text>
                <DeckOverview />
                <Text>Add Deck</Text>
                <AddDeck />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
