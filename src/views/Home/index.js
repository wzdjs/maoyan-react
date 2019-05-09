import React from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import Cinemas from './Cinemas'
import Movies from './Movies'
import Header from '../../common/header';
import Bottom from '../../common/Tabs';


class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      Bottom: [
        {
          id: 'movie',name: '电影', icon: ''
        },
        {
          id: 'cinemas',name: '影院', icon: ''
        },
        {
          id: 'center',name: '我的', icon: ''
        }
      ]
    }
  }
  render() {
    return (
      <>
      <Header></Header>
      <Switch>
        <Route path="/movies/:id" component= { Movies }></Route>
        <Route path="/cinemas" component= { Cinemas }></Route>
        <Redirect to="/movies/nowplaying"></Redirect>
      </Switch>
      <Bottom Bottom={ this.state.Bottom }>

      </Bottom>
      </>
    )
  }
 }

 export default Home