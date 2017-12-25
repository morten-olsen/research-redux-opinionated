import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import App from 'app';

import { search } from 'actions/users';
import api from 'middleware/api';
import usersStore from 'reducers/users';
import petsStore from 'reducers/pets';
import userStore from 'reducers/user';

const store = createStore(
  combineReducers({
    users: usersStore,
    user: userStore,
    pets: petsStore,
  }),
  applyMiddleware(api),
);

global.store = store;
store.dispatch(search());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
);
