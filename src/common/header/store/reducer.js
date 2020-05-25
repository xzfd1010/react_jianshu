import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      // 直接这样写有问题，因为list是一个immutable类型的数组，而action.data是一个普通数组，二者在替换时会出错
      // 解决方法：在获取data之后，就将其转为immutable对象
      // return state.set('list', action.data)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.nextPage)
    default:
      return state
  }
}

