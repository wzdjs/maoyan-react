import http from '@/utils/http'
import { Toast } from 'antd-mobile'
import {
  CHANGE_INP,ADD_ADD,DEL_ADD,INIT_TODO
} from './actionTypes'
/**
 *@param {number} index 下标
 *@retyrn {object} inputchange的动作对象
 */
 const InputAction = (value) => {
  return {
    type: CHANGE_INP,
    value
  }
}

/**
 *@retyrn {object} 动作对象
 */
const Addction = () => {
  return {
    type: ADD_ADD
  }
}
/**
 *@retyrn {object} 动作对象
 *
 */
const DelAction = (index) => {
  // return 一个异步动作函数
  return (dispatch) =>{
    setTimeout(() => {
      dispatch({
        type: DEL_ADD,
        index
      })
    }, 1000)
  }
}

/**
 *@retyrn {object} 动作对象
 */
const Initction = (dispatch) => {
    Toast.loading('正在加载，请稍后...',0)
    setTimeout(() =>{
      http.get('/initTodo.json')
      .then(res => {
        dispatch({
          type: INIT_TODO,
          list: res
        })
        Toast.hide()
      })
    },1000)
}

export default {
  InputAction,
  Addction,
  DelAction,
  Initction
}
