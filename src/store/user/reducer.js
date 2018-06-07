import * as actionType from './action-type';

const initialState = {
    isFetching: false,
    error: null,
    user: {}
};

export const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionType.LOAD_USER_FULFILLED:
            return {
                isFetching: false,
                error: null,
                user: action.payload.data.results[0]
            };
        case actionType.LOAD_USER_PENDING:
            return {
                isFetching: true,
                error: null,
                user: {}
            }
        case actionType.LOAD_USER_REJECTED:
            return {
                isFetching: false,
                error: action.payload.response.data,
                user: {}
            };
        default: return state;
    }
}
