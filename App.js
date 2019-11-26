import React from 'react';
import DecksOverview from './components/DecksOverview';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { handleInitialData } from './actions';
import { clearStorage } from './api';
import { IS_DEV_ENV } from './constants';
import IndividualDeck from './components/IndividualDeck';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

if (IS_DEV_ENV) {
    import('./ReactotronConfig').then(() =>
        console.log('Reactotron Configured')
    );
}

// redux store
const store = createStore(reducer, middleware);

// all possible routes
const RootStack = createStackNavigator(
    {
        DecksOverview: {
            screen: DecksOverview,
            navigationOptions: {
                title: 'List over all decks',
            },
        },
        IndividualDeck: {
            screen: IndividualDeck,
            navigationOptions: {
                title: 'Deck overview',
            },
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                title: 'Add new deck',
            },
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                title: 'Add new card',
            },
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                title: 'Run a quiz',
            },
        },
    },
    {
        initialRouteName: 'DecksOverview',
    }
);

const RouteContainer = createAppContainer(RootStack);

class App extends React.Component {
    componentDidMount() {
        clearStorage();
    }

    render() {
        return (
            <Provider store={store}>
                <RouteContainer />
            </Provider>
        );
    }
}
export default App;
