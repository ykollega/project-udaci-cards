export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

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
