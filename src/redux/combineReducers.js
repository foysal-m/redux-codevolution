import { applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './user/userReducer'
const combineReducer = combineReducers({
  user: userReducer,
})

export default combineReducer
