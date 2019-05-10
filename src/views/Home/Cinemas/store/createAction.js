// 创建动作的文件
import {
  CHANGE_INP,ADD_ADD,DEL_ADD
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
 */
const DelAction = (index) => {
  return {
    type: DEL_ADD,
    index
  }
}

export default {
  InputAction,
  Addction,
  DelAction
}