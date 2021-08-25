import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';
import rootReducer from './index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default store;
