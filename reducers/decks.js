import { ADD_DECK, REMOVE_DECK, ADD_CARD, REMOVE_CARD } from '../actions';

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            return {
                ...state,
                [JSON.stringify(action.deckName)]: {
                    title: action.deckName,
                    questions: [],
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
