import { RECEIVE_DATA } from '../actions/shared';

// loading reducer just does one thing:
// react on RECEICVE_DATA action which fills the store on app load
// initially with API data
export default function loading(state = true, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return false;
        default:
            return state;
    }
}
