import {
   SetMovieList
} from './actionTypes'
const defaultState = {
   filmList: [] //影片列表
 }

 export default (state = defaultState, action) => {
   //  根据不同的动作。操作数据
   switch(action.type) {

      case SetMovieList:
      return Object.assign({}, state,
         { filmList: action.list
      })
      
      default:
      // 默认没有动作是的数据
      return state
   }
 }