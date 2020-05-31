import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './style'
import App from './App'
import { IconFont } from './statics/iconfont/iconfont'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <IconFont/>
    <App/>
  </React.Fragment>,
  document.getElementById('root')
)
