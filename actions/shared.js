// action names

export const RECEIVE_DATA = 'RECEIVE_DATA';

// action wrappers (return objects)

function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        data,
    };
}

export function handleInitialData() {
    return dispatch => {
        return Promise.all([_getData()]).then(data =>
            dispatch(receiveData(data))
        );
    };
}
