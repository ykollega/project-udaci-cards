import { ADD_DECK, RECEIVE_DATA, ADD_CARD } from '../actions';
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
