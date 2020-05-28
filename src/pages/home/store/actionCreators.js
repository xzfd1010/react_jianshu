import axios from 'axios'
import * as constants from './constants'

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: data.topicList, // 将普通数组转为immutable对象
  articleList: data.articleList,
  recommendList: data.recommendList,
})

export function getHomeList () {
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
