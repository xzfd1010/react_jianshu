import React, { Component } from 'react'
import { HomeLeft, HomeRight, HomeWrapper } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
  componentDidMount () {
    this.props.getHomeInfo()
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img src="https://goss.veer.com/creative/vcg/veer/800water/veer-153835898.jpg" className="banner-img" alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getHomeInfo () {
    dispatch(actionCreators.getHomeList())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
