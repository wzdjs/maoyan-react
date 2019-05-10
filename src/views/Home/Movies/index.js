import React from 'react'
import {
  Topbar,MovieList,BigBox,Film
} from './style.js'
import http from '@/utils/http';
import Header from '@/common/header'
import store from '@/store'
import {
  SetMovieList
} from '@/store/actionTypes'

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      filmList: store.getState().filmList
    }

    /**
     *  监听仓库的数据变化
     * @return { function }  调用这个函数可以销毁这个监听
     */
    this.clearSub = store.subscribe(() =>{
       this.setState (() =>({
        filmList : store.getState().filmList
      }))
    })
  }

  render() {
    const { filmList } = this.state
    return (
      <BigBox>
        <Header></Header>
        <Film>
          <Topbar>
          <div className="white-bg topbar-bg ">
            <div className="city-entry">
              <span className="city-name">深圳</span><i className="city-entry-arrow"></i>
            </div>
            <div className="switch-hot" data-active=".n-hot">
              <div className="hot-item active" data-tab=".n-hot">
              正在热映
              </div>
              <div className="hot-item " data-tab=".f-hot">
              即将上映
              </div>
            </div>
            <div className="search-entry search-icon" data-type="movie"></div>
          </div>
        </Topbar>
        <MovieList>
          {
            filmList.map((item) => {
              return (
                <div className="main-block" key={ item.id}>
                  <div className="avatar">
                    <div className="default-img-bg">
                      <img src={ item.img.replace('w.h','128.180') } alt=""/>
                    </div>
                  </div>
                  <div className="mb-outline-b content-wrapper">
                    <div className="column content">
                      <div className="box-flex movie-title">
                        <div className="title line-ellipsis v3dimax_title">{ item.nm }</div>
                          <span className="version v3d imax"></span>
                      </div>
                      <div className="detail column">
                            <div className="score line-ellipsis">
                              <span className="score-suffix">观众评分 </span>
                              <span className="grade">{ item.sc }</span>
                            </div>
                          <div className="actor line-ellipsis">主演: { item.star }</div>
                          <div className="show-info line-ellipsis">{ item.showInfo }</div>
                      </div>
                    </div>
                    <div className="button-block" data-id="248172">
                        { item.showst ===3 ? (
                          <div className="btn normal">
                          <span className="fix" data-bid="dp_wx_home_movie_btn">购票</span>
                        </div>
                        ) : (
                          <div className="btn normal">
                          <span className="fix" data-bid="dp_wx_home_movie_btn">预售</span>
                        </div>
                        )}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </MovieList>
        </Film>

      </BigBox>
    )
  }
  componentDidMount() {
    http.get('/api/ajax/movieOnInfoList?token=').then(
      (res) => {
        // console.log(res)
        // this.setState({
        //   filmList: res.movieList
        // })
        let action = {
          type: SetMovieList,
          list: res.movieList
        }
        store.dispatch(action)
      }
    )
  }
  componentWillUnmount() {
    // 销毁监听
    this.clearSub()
  }
}

export default Movies