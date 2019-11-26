import { AsyncStorage } from 'react-native';
import { encodeDeckName } from '../helpers';

const STORAGE_KEY = 'UdaciCards';

export function saveAllToStorage(allDecks) {
    return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(allDecks));
}

export function loadAllFromStorage() {
    return AsyncStorage.getItem(STORAGE_KEY);
}

/*
getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.  
*/

export function clearStorage() {
    AsyncStorage.clear();
}

export function saveDeckTitle(newDeckTitle) {
    AsyncStorage.getItem(STORAGE_KEY)
        .then(data => {
            const existingDecks = JSON.parse(data);
            console.log('existingDecks:', existingDecks);
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
