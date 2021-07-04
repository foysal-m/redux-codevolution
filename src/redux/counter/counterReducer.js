import { INCREMENT } from './counterTypes'

const initialState = {
  number: 20,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: +state.number + action.payload,
      }
    default:
      return state
  }
}

export default counterReducer
