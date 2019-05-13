import React from 'react';
import { Route,Switch } from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import Login from './views/Login'
import './index.less'
import hoc from '@/common/Hoc'
import RouterTest from './common/RouterTest'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/Detail" component={ hoc(Detail) }></Route>
        <Route path="/Login" component={ Login }></Route>
        <Route path="/" component={ RouterTest(Home) }></Route>
      </Switch>
    )
  }
}

export default App;
