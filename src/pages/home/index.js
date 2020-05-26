import React, { Component } from 'react'
import { HomeLeft, HomeRight, HomeWrapper } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends Component {
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

export default Home
