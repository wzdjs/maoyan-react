import React from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import Cinemas from './Cinemas'
import Movies from './Movies/temp'
import Bottom from '../../common/Tabs';


class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      Bottom: [
        {
          id: 'movies',name: '电影', icon: ''
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
      <Switch>
        <Route path="/movies" component= { Movies }></Route>
        <Route path="/cinemas" component= { Cinemas }></Route>
        <Redirect to="/movies"></Redirect>
      </Switch>
      <Bottom Bottom={ this.state.Bottom }>

      </Bottom>
      </>
    )
  }
 }

 export default Home