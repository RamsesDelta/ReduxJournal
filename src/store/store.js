import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducer = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
    )  