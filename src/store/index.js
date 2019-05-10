import { createStore } from 'redux'
import reducer from './reducer'

/**
 * @param{ function } reducer纯函数
 * @retyrn { object } store的实例对象
 */

 const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export default store