
import React from 'react'; // eslint-disable-line no-unused-vars
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import app from './components';
import Counter from './containers/Counter';

export default (
  <Route >
    <Route path="/counter/:domain" component={Counter}></Route>
    <Route path="/" component={app.List} ></Route>
  </Route>
);
