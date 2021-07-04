import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { getName } from './redux'
import store from './redux/store'
import { incrementNum } from './redux/'

function Counter() {
  const num = useSelector((state) => state.num)
  const dispatch = useDispatch()

  console.log(num)
  return (
    <div>
      <h1>Count {num}</h1>
      <button onClick={() => dispatch(incrementNum())}>Add Num</button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     num: state.num,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getName: () => dispatch(getName()),
//   }
// }

export default Counter
