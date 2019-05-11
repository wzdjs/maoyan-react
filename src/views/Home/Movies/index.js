import React from 'react'
import createAction from './store/createAction'
import store from '@/store'
import UI from './store/ui'

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      filmList: store.getState().MOVIE.filmList
    }

    /**
     *  监听仓库的数据变化
     * @return { function }  调用这个函数可以销毁这个监听
     */
    this.clearSub = store.subscribe(() =>{
       this.setState (() =>({
        filmList : store.getState().MOVIE.filmList
      }))
    })
  }

  render() {
    return (
    <UI
    filmList={this.state.filmList}
    />
    )
  }
  componentDidMount() {
    store.dispatch(createAction.FilmAction)
    // http.get('/api/ajax/movieOnInfoList?token=').then(
    //   (res) => {
    //     // console.log(res)
    //     // this.setState({
    //     //   filmList: res.movieList
    //     // })
    //     let action = {
    //       type: SetMovieList,
    //       list: res.movieList
    //     }
    //     store.dispatch(action)
    //   }
    // )
  }
  componentWillUnmount() {
    // 销毁监听
    this.clearSub()
  }
}

export default Movies