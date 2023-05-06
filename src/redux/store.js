import {  legacy_createStore as createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import ReceipeReducer from "./reducers"

const middlewares = [thunk]

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

const store = createStore(
	ReceipeReducer,
	// composeEnhancers(applyMiddleware(...middlewares))
)

export default store