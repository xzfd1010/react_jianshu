import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
// 需要传入 reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store
