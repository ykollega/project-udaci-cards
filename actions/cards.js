export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export function addCard(cardQuestion, cardAnswer) {
    return {
        type: ADD_CARD,
        cardQuestion,
        cardAnswer,
    };
}

export function removeCard(cardId) {
    return {
        type: REMOVE_CARD,
        cardId,
    };
}
