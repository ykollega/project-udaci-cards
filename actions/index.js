// import api calls (AsyncStorage)
import {
    getDecksFromStorage,
    addEmptyDeckToStorage,
    addCardToDeckInStorage,
} from '../api';

// action names
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

// action wrappers (returning objects)

export function addDeck(deckTitle) {
    return {
        type: ADD_DECK,
        deckTitle,
    };
}

export function addCard(deckId, questionText, answerText) {
    return {
        type: ADD_CARD,
        deckId,
        questionText,
        answerText,
    };
}

function receiveData(decks) {
    return {
        type: RECEIVE_DATA,
        decks,
    };
}

// async action wrappers (returning functions)

// fills redux store with data from storage
export function handleInitialData() {
    return dispatch => {
        getDecksFromStorage().then(data => {
            if (data) {
                dispatch(receiveData(JSON.parse(data)));
            }
        });
    };
}

// adds new deck to redux store AND to storage
export function handleAddDeck(deckTitle) {
    return dispatch => {
        dispatch(addDeck(deckTitle));
        addEmptyDeckToStorage(deckTitle);
    };
}

// adds new card to given deck (deckId) in redux store AND in storage
export function handleAddCard(deckId, questionText, answerText) {
    return dispatch => {
        dispatch(addCard(deckId, questionText, answerText));
        addCardToDeckInStorage(deckId, questionText, answerText);
    };
}
