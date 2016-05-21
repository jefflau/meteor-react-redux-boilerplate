import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

const logger = createLogger();
const middleware = [reduxThunk, logger];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;

export const history = syncHistoryWithStore(browserHistory, store);
