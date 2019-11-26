import { ADD_DECK, REMOVE_DECK, ADD_CARD, RECEIVE_DATA } from '../actions';
import { encodeDeckName } from '../helpers';

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            const newDeckKey = encodeDeckName(action.deckName);
            return {
                ...state,
                [newDeckKey]: {
                    title: action.deckName,
                    questions: [],
                },
            };
        }
        case REMOVE_DECK: {
            const deckId = encodeDeckName(action.deckName);
            return { ...state, [deckId]: null };
        }
        case ADD_CARD: {
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: [
                        ...state[action.deckId].questions,
                        {
                            question: action.questionText,
                            answer: action.answerText,
                        },
                    ],
                },
            };
        }
        case RECEIVE_DATA:
            return action.decks;
        default:
            return state;
    }
}
