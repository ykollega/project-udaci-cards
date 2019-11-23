import { ADD_CARD, REMOVE_CARD } from '../actions/cards';

export default function cards(state = {}, action) {
    switch (action.type) {
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
