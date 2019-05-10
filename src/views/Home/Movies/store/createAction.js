// 创建动作的文件
import http from '@/utils/http'
import { Toast } from 'antd-mobile'
import {
  SetMovieList
} from './actionTypes'
/**
 *
 *@retyrn {object} inputchange的动作对象
 */

  const FilmAction = (dispatch) => {
    Toast.loading('正在加载，请稍后...',0)
    setTimeout(() =>{
      http.get('/api/ajax/movieOnInfoList?token=')
      .then(res => {
        dispatch({
          type: SetMovieList,
          list: res.movieList
        })
        Toast.hide()
      })
    },1000)
  }

export default {
  FilmAction
}