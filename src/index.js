import React from 'react';
import ReactDOM from 'react-dom';
// Provider组件将store主动传递给项目的所有组件
import { Provider } from 'react-redux'
import { HashRouter as Router} from 'react-router-dom'
import './index.less';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
 document.getElementById('root'));