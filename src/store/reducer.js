import { combineReducers } from 'redux-immutable'
import todoReducer from '@/views/Home/Cinemas/store/reducer.js'
import movieReducer from '@/views/Home/Movies/store/reducer.js'
import userReducer from '@/views/Login/store/reducer.js'

// const defaultState = {}
//  export default (state = defaultState, action) => {
//     return {
//      /**
//      *@return { key : value} key 模块  value模块reducer函数的执行
//      */
//       TODO: todoRucer(state.TODO,action),
//       MOVIE: movieReducer(state.MOVIE,action)
//     }
//  }
export default combineReducers({
   TODO: todoReducer,
   MOVIE:movieReducer,
   USER:userReducer
})