import axios from 'axios'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userTypes'

export const fetchUser = () => {
  return {
    type: FETCH_USER_REQUEST,
  }
}

export const fetchSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  }
}

export const fetchFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  }
}

export const fetchUsers = () => {
  //this does not have to be pure, it allows to cause side effects such as async api call

  return (dispatch) => {
    dispatch(fetchUser)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data
        dispatch(fetchSuccess(users))
      })
      .catch((err) => {
        const error = err.message
        dispatch(fetchFailure(error))
      })
  }
}
