import React from 'react';
import ReactDOM from 'react-dom';
import PomoApp from './components/PomoApp';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pomoReducer from './reducers/Pomo';

const store = createStore(pomoReducer);

ReactDOM.render(
  <Provider store={store}>
    <PomoApp />
  </Provider>,
  document.getElementById('root')
);
