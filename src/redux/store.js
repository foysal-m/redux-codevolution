import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './counter/counterReducer'
import logger from 'redux-logger'
const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger)),
)

export default store
