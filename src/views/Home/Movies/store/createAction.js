// 创建动作的文件
import {
  SetMovieList
} from './actionTypes'
/**
 * 
 *@retyrn {object} inputchange的动作对象
 */
 const FilmAction = (value) => {
  return {
    type: SetMovieList,
    value
  }
}


export default {
  FilmAction
}