import axios from 'axios'
import * as constants from './constants'

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})


const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export function login (account, password) {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(({ data:{data:result} }) => {
      if(result){
        dispatch(changeLogin())
      }else{
        console.log('登录失败')
      }
    })
  }
}
