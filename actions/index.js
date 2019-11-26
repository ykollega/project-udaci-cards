// import api calls (AsyncStorage)
import { loadAllFromStorage, saveAllToStorage, saveDeckTitle } from '../api';

// action names
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

// action wrappers (return objects)
export function addDeck(deckName) {
    return {
        type: ADD_DECK,
        deckName,
    };
}

export function removeDeck(deckId) {
    return {
        type: REMOVE_DECK,
        deckId,
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

export function removeCard(cardId) {
    return {
        type: REMOVE_CARD,
        cardId,
    };
}

function receiveData(decks) {
    return {
        type: RECEIVE_DATA,
        decks,
    };
}

// async action wrappers (return objects)

export function handleInitialData() {
    return dispatch => {
        loadAllFromStorage().then(results => {
            dispatch(receiveData(JSON.parse(results)));
        });
    };
}

export function handleAddDeck(deckName) {
    return dispatch => {
        dispatch(addDeck(deckName));
        saveDeckTitle(deckName);
    };
}

export function handleAddCard(deckId, questionText, answerText, allDecks) {
    return dispatch => {
        dispatch(addCard(deckId, questionText, answerText));
        saveAllToStorage(allDecks);
    };
}
