import { combineReducers } from 'redux';

import loading from './loading';
import questions from './decks';
import users from './cards';

export default combineReducers({
    loading,
    decks,
    cards,
});
