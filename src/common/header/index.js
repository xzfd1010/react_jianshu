import React, { PureComponent } from 'react'
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchWrapper
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store/'
import { Link } from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'

class Header extends PureComponent {
  getListArea () {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS() // immutable  => 普通数组，因为immutable数组不支持普通引用
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <i ref={(icon) => {
                  this.spinIcon = icon
                }} className="iconfont spin">&#xe851;</i>
              </CSSTransition>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login ?
              <NavItem onClick={logout} className="right">退出</NavItem> :
              <Link to='/login'><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            {/*in 控制进出场*/}
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch className={focused ? 'focused' : ''}
                         onFocus={() => handleInputFocus(list)}
                         onBlur={handleInputBlur}/>
            </CSSTransition>
            <i className={focused ? 'iconfont zoom focused' : 'zoom iconfont'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writing">
              <i className="iconfont">&#xe615;</i>写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  // focused: state.get('header').get('focused') // state.getIn(['header','focused'])
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      originAngle = originAngle ? parseInt(originAngle) : 0
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      const nextPage = page < totalPage ? page + 1 : 1
      dispatch(actionCreators.changePage(nextPage))
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
