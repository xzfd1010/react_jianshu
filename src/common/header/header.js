import React, { Component } from 'react'
import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper } from './style'
import { Transition } from 'react-transition-group'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus () {
    this.setState({
      focused: true
    })
  }

  handleBlur () {
    this.setState({
      focused: false
    })
  }

  render () {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SearchWrapper>
            <Transition name="slide" timeout={1}>
              <NavSearch className={this.state.focused ? 'focused' : ''}
                         onFocus={this.handleFocus}
                         onBlur={this.handleBlur}/>
            </Transition>
            <i className="iconfont zoom">&#xe614;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header
