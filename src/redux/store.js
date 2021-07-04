import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './counter/counterReducer'
import combineReducer from './combineReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(combineReducer, applyMiddleware(thunk))

export default store
