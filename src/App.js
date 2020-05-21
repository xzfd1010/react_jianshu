import React from 'react'
import Index from './common/header'
import store from './store'
import { Provider } from 'react-redux'

function App () {
  return (
    <Provider store={store}>
      <Index/>
    </Provider>
  )
}

export default App
