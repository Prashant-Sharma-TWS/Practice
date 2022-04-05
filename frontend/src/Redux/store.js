import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const thunk = (state) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

export const store = createStore(reducer, composer(applyMiddleware(thunk)));
