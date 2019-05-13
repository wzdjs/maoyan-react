import React from 'react';
import { Route,Switch } from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import Login from './views/Login'
import './index.less'
import hoc from '@/common/Hoc'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/Detail" component={ hoc(Detail) }></Route>
        <Route path="/Login" component={ Login }></Route>
        <Route path="/" component={ Home }></Route>
      </Switch>
    )
  }
}

export default App;
