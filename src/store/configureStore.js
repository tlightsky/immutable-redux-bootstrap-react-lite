import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import { createHistory, createHashHistory } from 'history';
import { reduxReactRouter } from 'redux-router';
import { batchedUpdatesMiddleware } from './batchedUpdatesMiddleware';
import { Iterable } from 'immutable';
import _ from 'lodash';
import reducer from '../reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true,
  stateTransformer: state => _.mapValues(state, v => Iterable.isIterable(v) ? v.toJS() : v),
  predicate: (getState, action) => {
      return true;
  },
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk,logger,batchedUpdatesMiddleware),
  reduxReactRouter({ createHistory: _.partial(createHashHistory, { queryKey: false }) })
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
