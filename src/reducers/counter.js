import Immutable from 'immutable';
import actions from '../constants/ActionTypes';
import createReducer from '../lib/createReducer';

const initialState = Immutable.fromJS({});

export default createReducer(initialState, {
  [actions.counter.increment]: (state, { type, domain }) => {
    var count = state.get(domain) || 0;
    count = count + 1;
    return state.set(domain, count);
  },
  [actions.counter.decrement]: (state, { type, domain }) => {
    var count = state.get(domain) || 0;
    count = count - 1;
    return state.set(domain, count);
  }
});
