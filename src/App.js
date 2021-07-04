import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import Counter from './Counter'
import store from './redux/store'
import InputContainer from './InputContainer'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <InputContainer />
      </div>
    </Provider>
  )
}

export default App
