import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as counter from './counter/reducer';
import * as user from './user/reducer';
import * as reminder from './reminder/reducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

let store = createStore(
    combineReducers({ ...counter, ...user, ...reminder}),
    applyMiddleware(thunk, promise())
);

export default store;