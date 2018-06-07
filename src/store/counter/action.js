import * as actionType from './action-type';

export const increment = () => {
    // return dispatch => {
    //     console.log('dispatch');
        
    // //   setTimeout(() => {
    // //     dispatch({
    // //         type: actionType.INCREMENT
    // //     });
    // //   }, 2000);
    // };
    return {
        type: actionType.INCREMENT,
        // payload: new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve("rails365");
        //     });
        // })
    }
};

export const decrement = () => {
    return {
        type: actionType.DECREMENT
    }
};
