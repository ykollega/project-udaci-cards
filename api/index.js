import { AsyncStorage } from 'react-native';
import { encodeDeckName } from '../helpers';

const STORAGE_KEY = 'UdaciCards:decks';

// clear complete storage for this project to empty string
export function clearStorage() {
    AsyncStorage.setItem(STORAGE_KEY, '');
}

// get all complete data from storage
export function getDecksFromStorage() {
    return AsyncStorage.getItem(STORAGE_KEY);
}

// add one deck to storage, which could be empty
export function addEmptyDeckToStorage(newDeckTitle) {
    AsyncStorage.getItem(STORAGE_KEY)
        .then(data => {
            const existingDecks = JSON.parse(data);
            if (
                !Object.keys(existingDecks).includes(
                    encodeDeckName(newDeckTitle)
                )
            ) {
                const existingDecksAndNewOne = {
                    ...existingDecks,
                    [encodeDeckName(newDeckTitle)]: {
                        title: newDeckTitle,
                        questions: [],
                    },
                };
                return AsyncStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(existingDecksAndNewOne)
                );
            }
        })
        .catch(() => {
            return AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    [encodeDeckName(newDeckTitle)]: {
                        title: newDeckTitle,
                        questions: [],
                    },
                })
            );
        });
}

// add one card to existing deck in storage
export function addCardToDeckInStorage(deckId, questionText, answerText) {
    AsyncStorage.getItem(STORAGE_KEY).then(data => {
        const existingDecks = JSON.parse(data);
        if (existingDecks && existingDecks[deckId]) {
            existingDecks[deckId].questions.push({
                question: questionText,
                answer: answerText,
            });
            return AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(existingDecks)
            );
        }
    });
}
