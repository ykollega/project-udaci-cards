import { applyMiddleware } from 'redux';
// need thunker middleware to handle async calls in actions wrappers
import thunk from 'redux-thunk';
import logger from './logger';

export default applyMiddleware(thunk, logger);
