
import { pushState } from 'redux-router';
import actions from '../constants/ActionTypes';

export function increment(domain) {
  return {
    type: actions.counter.increment,
    domain: domain
  }
}

export function decrement(domain) {
  return {
    type: actions.counter.decrement,
    domain: domain
  }
}

export function home() {
  return dispatch => {
    dispatch(pushState(null, '/'));
  }
}
