import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_TOP_SHOW,
  show
})

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: data.topicList, // 将普通数组转为immutable对象
  articleList: data.articleList,
  recommendList: data.recommendList,
})

const addHomeList = (data,nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(data), // 数组 => immutable
  nextPage
})

export function getHomeInfo () {
  return (dispatch) => {
    // 处理异步请求
    axios.get('/api/home.json').then(({ data }) => {
      // 将数据派发给reducer
      dispatch(changeHomeData(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then(({ data }) => {
      // 将数据派发给reducer
      console.log(data)
      dispatch(addHomeList(data.data, page+ 1))
    })
  }
}

