import {
   CHANGE_INP,
   ADD_ADD,
   DEL_ADD
} from './actionTypes'

const defaultState = {
   inputVal : 'hello',//输入框的内容
   todoList: [], //代办事项
 }

 export default (state = defaultState, action) => {

   //  根据不同的动作。操作数据
   switch(action.type) {
      case CHANGE_INP:
      return Object.assign({}, state,
         { inputVal: action.value
      })

      case ADD_ADD:
      return Object.assign({}, state,
         { todoList: [...state.todoList, state.inputVal],
         inputVal: ''
      })

      case DEL_ADD:
         let newState = [...state.todoList]
         newState.splice(action.index,1)
      return Object.assign({}, state,
         { todoList: newState
      })

      default:
      // 默认没有动作是的数据
      return state
   }
 }