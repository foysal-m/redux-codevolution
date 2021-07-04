import { INCREMENT } from './counterTypes'

export const incrementNum = (number = 1) => {
  return {
    type: INCREMENT,
    payload: number,
  }
}
