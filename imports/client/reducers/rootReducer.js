import { combineReducers } from 'redux';
import visibilityFilter from './visibilityReducer';
import pageSkip from './pageSkipReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  visibilityFilter,
  pageSkip,
  routing: routerReducer
})

export default rootReducer;
