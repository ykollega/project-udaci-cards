import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckOverview from './components/DeckOverview';
import AddDeck from './components/AddDeck';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Text>Mobile Flash Cards</Text>
                    <DeckOverview />
                    <Text>Add Deck</Text>
                    <AddDeck />
                </View>
            </Provider>
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
