import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL_DATA:
      return state.merge({
        title: action.data.get('title'),
        content: action.data.get('content')
      })
    default:
      return state
  }
}

