import { ADD_DECK, REMOVE_DECK, ADD_CARD, REMOVE_CARD } from '../actions';

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            const newDeckKey = JSON.stringify(action.deckName);
            const deckKeysUntilNow = Object.keys(state);
            if (deckKeysUntilNow.includes(newDeckKey)) {
                alert('This deck already exists');
                return state;
            }
            return {
                ...state,
                [newDeckKey]: {
                    title: action.deckName,
                    questions: [
                        {
                            question: 'What is React?',
                            answer: 'A library for managing user interfaces',
                        },
                        {
                            question:
                                'Where do you make Ajax requests in React?',
                            answer: 'The componentDidMount lifecycle event',
                        },
                    ],
                },
            };
        }
        case REMOVE_DECK: {
            return state;
        }
        case ADD_CARD: {
            return state;
        }
        case REMOVE_CARD: {
            return state;
        }
        default:
            return state;
    }
}
