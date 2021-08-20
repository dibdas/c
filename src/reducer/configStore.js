import rootReducer from "./index"
import thunk from 'redux-thunk';

import { applyMiddleware,createStore } from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default store;