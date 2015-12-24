import React from 'react';
import routes from '../routes';
import { ReduxRouter } from 'redux-router';

class App extends React.Component {
  render() {
    return (
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    );
  }
}

export default App;
