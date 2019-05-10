import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

/**
 * @param{ function } reducer纯函数
 * @retyrn { object } store的实例对象
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(
  reducer, /* preloadedState, */
  // 使用中间件
  composeEnhancers(
    applyMiddleware(logger)
    )
  )

 export default store