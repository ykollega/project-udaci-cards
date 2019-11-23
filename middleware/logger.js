import { IS_DEV_ENV } from '../constants';

// logger middleware
// logging actions to console, when in DEV environment
const logger = store => next => action => {
    if (IS_DEV_ENV) {
        console.group(action.type);
        console.log('The old state: ', store.getState());
        console.log('The action: ', action);
    }
    const result = next(action);
    if (IS_DEV_ENV) {
        console.log('The new state: ', store.getState());
        console.groupEnd();
    }
    return result;
};

export default logger;
