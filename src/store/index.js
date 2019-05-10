import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

/**
 * @param{ function } reducer纯函数
 * @retyrn { object } store的实例对象
 */

 const store = createStore(
  reducer, /* preloadedState, */
  // 使用中间件
  applyMiddleware(logger))
 export default store