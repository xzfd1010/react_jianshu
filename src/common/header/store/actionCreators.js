import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'

// 不需要导出的代码统一放在顶部或者底部
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data) // 将普通数组转为immutable对象
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

export const searchFocus = () => {
  return {
    type: constants.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: constants.SEARCH_BLUR
  }
}
