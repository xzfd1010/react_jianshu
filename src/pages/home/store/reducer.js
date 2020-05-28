import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      console.log(action)
      state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
      return state;
    default:
      return state
  }
}
