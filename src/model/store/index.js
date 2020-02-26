import { createStore, applyMiddleware, compose  } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import apiAuthInjector from '../middleware/authApiInjector';
import { apiMiddleware } from 'redux-api-middleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk, apiAuthInjector))
);
export default store;
