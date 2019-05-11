import {
   CHANGE_INP,
   ADD_ADD,
   DEL_ADD,
   INIT_TODO
} from './actionTypes'

const defaultState = {
   inputVal : 'hello',//输入框的内容
   todoList: [], //代办事项
 }

 export default (state = defaultState, action) => {
   let NEWDATE = JSON.parse(JSON.stringify(state))
   //  根据不同的动作。操作数据
   switch(action.type) {
      case CHANGE_INP:
         NEWDATE.inputVal = action.value
         return NEWDATE

      case ADD_ADD:
         NEWDATE.todoList.push(state.inputVal)
         NEWDATE.inputVal = ''
         return NEWDATE

      case DEL_ADD:
         NEWDATE.todoList.splice(action.index,1)
         return NEWDATE

      case INIT_TODO:
         NEWDATE.todoList = action.list
         return NEWDATE
      default:

      // 默认没有动作是的数据
         return NEWDATE
   }
 }