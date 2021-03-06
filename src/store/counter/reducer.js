import * as actionType from './action-type';


export const counter = (state = 1, action = {}) => {
    
    switch (action.type) {
        case actionType.INCREMENT:
            return state + 1;
        case actionType.DECREMENT:
            return state - 1;
        default: return state;
    }
}

