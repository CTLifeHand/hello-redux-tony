import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as counter from './counter/reducer';
import * as user from './user/reducer';
import * as reminder from './reminder/reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(
    combineReducers({ ...counter, ...user, ...reminder }),
    composeWithDevTools(applyMiddleware(logger, thunk, promise()))
);

export default store;