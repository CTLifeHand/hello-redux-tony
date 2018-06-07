import axios from 'axios'; 
import * as actionType from './action-type';

export const get_user = () => {
    // return dispatch => {
    //   dispatch(fetch_user_request())
    //   axios.get("https://randomuser.me/api/")
    //     .then(res => {
    //       dispatch(fetch_user(res.data.results[0]));
    //     })
    //     .catch(error => {
    //       dispatch(fetch_user_failure(error.response.data));
    //     })
    // };
    return {
        type: actionType.LOAD_USER,
        // payload: axios.get("https://randomuser.me/api/")
        payload: {
            promise: axios.get("https://randomuser.me/api/")
        }
    };
};

export const fetch_user_failure = (error) => {
    return {
        type: actionType.FETCH_USER_FAILURE,
        error
    };
};

export const fetch_user = (user) => {
    return {
        type: actionType.FETCH_USER_SUCCESS,
        user
    }
};

export const fetch_user_request = () => {
    return {
        type: actionType.FETCH_USER_REQUEST
    }
};
