import axios from 'axios'
import { constants } from './index'
import { fromJS } from 'immutable'

const changeDetailData = (data) => ({
  type: constants.CHANGE_DETAIL_DATA,
  data: fromJS(data)
})

export const getDetailInfo = () => {
  return (dispatch) => {
    // 处理异步请求
    axios.get('/api/detail.json').then(({ data }) => {
      // 将数据派发给reducer
      dispatch(changeDetailData(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export default {}
