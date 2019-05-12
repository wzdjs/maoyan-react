import {
   CHANGE_INP,
   ADD_ADD,
   DEL_ADD,
   INIT_TODO
} from './actionTypes'

import { fromJS } from 'immutable'

const defaultState = fromJS({
   inputVal : 'hello',//输入框的内容
   todoList: [], //代办事项
 })

 export default (state = defaultState, action) => {
   //  console.log(state.get('todoList').toJS())
   // let NEWDATE = JSON.parse(JSON.stringify(state))
   //  根据不同的动作。操作数据
   switch(action.type) {
      case CHANGE_INP:
         return state.set('inputVal',action.value)
         // NEWDATE.inputVal = action.value
         // return NEWDATE

      case ADD_ADD:
         // console.log(state.get('inputVal'))
         // console.log(state.get('todoList'))

         let NewState = state.get('todoList').push(fromJS(state.get('inputVal')))
         // console.log(state.getIn(['todoList','inputVal']))

         let newDate = state.set('todoList', NewState)
         // console.log(newDate)

         return newDate.set('inputVal', '')
         // NEWDATE.todoList.push(state.inputVal)
         // NEWDATE.inputVal = ''
         // return NEWDATE

      case DEL_ADD:
         let delState = state.get('todoList').splice(action.index, 1)
         console.log(delState)
      return state.set('todoList', delState)
         // NEWDATE.todoList.splice(action.index,1)
         // return NEWDATE

      case INIT_TODO:
         return state.set('todoList', fromJS(action.list))
         // NEWDATE.todoList = action.list
         // return NEWDATE
      default:
         return state
      // 默认没有动作是的数据
         // return NEWDATE
   }
 }