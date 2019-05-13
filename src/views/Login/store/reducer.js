import {
   LOGIN_DATA,
   // PASSWORD_DATA,
   // USERNAME_DATA
   SET_FORM
} from './actionTypes'

import { fromJS } from 'immutable'
let user =window.sessionStorage.getItem('USER')
const defaultState = fromJS({
   user: user ? JSON.parse(user) : null,
   userName: '',
   password: ''
 })

 export default (state = defaultState, action) => {
   //  根据不同的动作。操作数据
   switch(action.type) {
      case LOGIN_DATA:
         return state.set('user', action.user)

      // case USERNAME_DATA:
      //    return state.set('userName',action.value)

      // case PASSWORD_DATA:
      //    return state.set('password',action.value)

      case SET_FORM:
      return state.set(action.key,action.value)

      default:
         return state
   }
 }