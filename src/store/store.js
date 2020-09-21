import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiRefucer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiRefucer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
