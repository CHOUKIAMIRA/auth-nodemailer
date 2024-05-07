import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reduceruser } from './reducer/reducer';
import {thunk} from "redux-thunk"
import { error_reducer } from './reducer/errorReducer';
 
const rootReducer=combineReducers({
  users:reduceruser, 
  errors: error_reducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
 
    applyMiddleware(thunk)
  ));