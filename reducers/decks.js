import { ADD_DECK, REMOVE_DECK } from '../actions/decks';

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            return state;
        }
        case REMOVE_DECK: {
            return state;
        }
        default:
            return state;
    }
}
