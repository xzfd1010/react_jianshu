import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const changePage = (nextPage) => ({
  type: constants.CHANGE_PAGE,
  nextPage
})

// 不需要导出的代码统一放在顶部或者底部
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data), // 将普通数组转为immutable对象
  totalPage: Math.ceil(data.length / 10)
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export function getList () {
  return (dispatch) => {
    // 处理异步请求
    axios.get('/api/headerList.json').then(({ data }) => {
      // 将数据派发给reducer
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
