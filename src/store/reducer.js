// reducer 纯函数
/**
 * @param {any} state  上一次创库的数据
 * @param {object} action 这次的动作
 * @return 返回一个新的state
 */
const defaultState = {
   inputVal : 'hello',//输入框的内容
   todoList: [], //代办事项
   filmList: [] //影片列表
 }

 export default (state = defaultState, action) => {
    console.log(state.inputVal,state.todoList)

   //  根据不同的动作。操作数据
   switch(action.type) {
      case 'CHANGE_INP':
      return Object.assign({}, state,
         { inputVal: action.value
      })

      case 'ADD_ADD':
      return Object.assign({}, state,
         { todoList: [...state.todoList, state.inputVal],
         inputVal: ''
      })

      case 'DEL_ADD':
         let newState = [...state.todoList]
         newState.splice(action.index,1)
      return Object.assign({}, state,
         { todoList: newState
      })

      case 'SetMovieList':
      return Object.assign({}, state,
         { filmList: action.list
      })
      default:
      // 默认没有动作是的数据
      return state
   }
 }