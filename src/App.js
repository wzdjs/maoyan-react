import React from 'react';
import { Button } from 'antd-mobile'
import Header from './common/header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Button type="primary"> 点击按钮</Button>
      </div>
    )
  }
}

export default App;
