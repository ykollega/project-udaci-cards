// import api calls (AsyncStorage)
import {
    getDecksFromStorage,
    addEmptyDeckToStorage,
    removeDeckFromStorage,
} from '../api';

// action names
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

// action wrappers (returning objects)

export function addDeck(deckName) {
    return {
        type: ADD_DECK,
        deckName,
    };
}

export function removeDeck(deckName) {
    return {
        type: REMOVE_DECK,
        deckName,
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

export function handleInitialData() {
    return dispatch => {
        getDecksFromStorage().then(data => {
            if (data) {
                const allDecksSavedInStorage = JSON.parse(data);
                console.log('DATA', data);
                dispatch(receiveData(allDecksSavedInStorage));
            }
        });
    };
}

export function handleAddDeck(deckName) {
    return dispatch => {
        dispatch(addDeck(deckName));
        addEmptyDeckToStorage(deckName);
    };
}

export function handleRemoveDeck(deckTitle) {
    return dispatch => {
        dispatch(removeDeck(deckTitle));
        removeDeckFromStorage(deckTitle);
    };
}

export function handleAddCard(deckId, questionText, answerText) {
    return dispatch => {
        dispatch(addCard(deckId, questionText, answerText));
    };
}
