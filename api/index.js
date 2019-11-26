import { AsyncStorage } from 'react-native';
import { encodeDeckName } from '../helpers';

const STORAGE_KEY = 'UdaciCards';

/*
getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.  
*/

export function clearStorage() {
    AsyncStorage.clear();
}

export function getDecksFromStorage() {
    return AsyncStorage.getItem(STORAGE_KEY);
}

export function addEmptyDeckToStorage(newDeckTitle) {
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

// remove deck from AsyncStorage
// export function removeDeckFromStorage(deckTitle) {
//     AsyncStorage.getItem(STORAGE_KEY).then(data => {
//         const deckId = encodeDeckName(deckTitle);
//         const existingDecks = JSON.parse(data);
//         if (!Object.keys(existingDecks).includes(deckId)) {
//             delete existingDecks[deckId];
//             return AsyncStorage.setItem(
//                 STORAGE_KEY,
//                 JSON.stringify(existingDecks)
//             );
//         }
//     });
// }
