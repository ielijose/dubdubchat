import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from "redux-logger";

import charactersReducer from './characters/reducer';
import chatReducer from './chat/reducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  chat: chatReducer,
});

export const createPreloadedStore = preloadedState => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
