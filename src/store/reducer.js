import todoRucer from '@/views/Home/Cinemas/store/reducer.js'
import movieReducer from '@/views/Home/Movies/store/reducer.js'

const defaultState = {}

 export default (state = defaultState, action) => {
    return {
     /**
     *@return { key : value} key 模块  value模块reducer函数的执行
     *
     */
      TODO: todoRucer(state.TODO,action),
      MOVIE: movieReducer(state.MOVIE,action)
    }
 }