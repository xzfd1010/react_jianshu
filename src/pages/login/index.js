import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button, Input, LoginBox, LoginWrapper } from './style'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class A extends PureComponent {
  render () {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {this.accountElem = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.passwordElem = input}}/>
            <Button onClick={() => this.props.login(this.accountElem, this.passwordElem)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }

  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login (accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(A)
