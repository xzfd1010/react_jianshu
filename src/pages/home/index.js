import React, { Component } from 'react'
import { BackTop, HomeLeft, HomeRight, HomeWrapper } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  componentDidMount () {
    this.props.getHomeInfo()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
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
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  getHomeInfo () {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow(e){
    if(document.documentElement.scrollTop > 400){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
