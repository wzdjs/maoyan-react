import http from '@/utils/http'
import { Toast } from 'antd-mobile'
import store from '@/store'
import {
  LOGIN_DATA,
  SET_FORM
  // PASSWORD_DATA,
  // USERNAME_DATA
} from './actionTypes'

/**
 *@param {object} 动作对象
 */
const SET_LOGIN = ( history,redirect ) => {
  return (dispatch) => {
    let state = store.getState()
      // Toast.loading('正在加载，请稍后...',0)
      setTimeout(() =>{
        http.post('http://localhost:3001/user/login', {
          userName: state.getIn(['USER','userName']),
          password: state.getIn(['USER','password'])
        })
        .then(res => {
          if(res.code === 0) {
            dispatch({
              type: LOGIN_DATA,
              user: res.data
            })
            // 登陆成功保存登陆的数据
            window.sessionStorage.setItem('USER',JSON.stringify(res.data))
            // 登陆成功跳转页面  history.replace
            //redirect 想要去的页面的pathname参数
            history.replace(redirect)

          }else{
            Toast.fail('登陆失败', 1)
          }
          // Toast.hide()
        })
      },1000)
  }
}

// const UserNameAction = (value) => {
//   return {
//     type: USERNAME_DATA,
//     value
//   }
// }

// const PassWordAction = (value) => {
//   return {
//     type: PASSWORD_DATA,
//     value
//   }
// }

const FromAction = (key,value) => {
  return {
    type: SET_FORM,
    value,
    key
  }
}

export default {
  SET_LOGIN,
  // UserNameAction,
  // PassWordAction
  FromAction
}