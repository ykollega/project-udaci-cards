import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DecksOverview from './components/DecksOverview';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import IndividualDeck from './components/IndividualDeck';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const store = createStore(reducer, middleware);

const RootStack = createStackNavigator(
    {
        DecksOverview: {
            screen: DecksOverview,
        },
        IndividualDeck: {
            screen: IndividualDeck,
        },
    },
    {
        initialRouteName: 'DecksOverview',
    }
);

const RouteContainer = createAppContainer(RootStack);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RouteContainer />
            </Provider>
        );
    }
}
export default App;
