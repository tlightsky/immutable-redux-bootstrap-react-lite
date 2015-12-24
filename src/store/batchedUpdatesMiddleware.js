import ReactDOM from 'react-dom';

exports.batchedUpdatesMiddleware = batchedUpdatesMiddleware;

function batchedUpdatesMiddleware() {
  return function (next) {
    return function (action) {
      return ReactDOM.unstable_batchedUpdates(function () {
        return next(action);
      });
    };
  };
}
