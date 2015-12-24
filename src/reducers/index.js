import { combineReducers } from 'redux';
import counter from './counter';
import { routerStateReducer } from 'redux-router';

const rootReducer = combineReducers({
  counter,
  router: routerStateReducer
});

export default rootReducer;
