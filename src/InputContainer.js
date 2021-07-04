import React, { useState } from 'react'

import { connect } from 'react-redux'
import { getName } from './redux'
import store from './redux/store'
import { incrementNum } from './redux/'

function InputContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h1>Count {props.number}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => props.incrementNum(number)}>
        Add Num {number}
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    number: state.number,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementNum: (number) => dispatch(incrementNum(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)
