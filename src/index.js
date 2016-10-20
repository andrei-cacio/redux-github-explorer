import './style.less';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/app';
import rootReducer from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
console.log(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

