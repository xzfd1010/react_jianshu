import React from 'react'
import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store/'

function Header (props) {
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
          {/*in 控制进出场*/}
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch className={props.focused ? 'focused' : ''}
                       onFocus={props.handleInputFocus}
                       onBlur={props.handleInputBlur}/>
          </CSSTransition>
          <i className={props.focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#xe614;</i>
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

const mapStateToProps = ({ header }) => {
  return {
    focused: header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
