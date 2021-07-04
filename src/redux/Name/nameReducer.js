import { FULL_NAME } from './nameTypes'
const initialState = {
  name: 'Foysal',
}

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FULL_NAME:
      return {
        ...state,
        name: state.name,
      }
    default:
      return state
  }
}

export default nameReducer
