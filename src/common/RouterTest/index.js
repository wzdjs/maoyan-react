import React,{ Fragment } from 'react'
import store from '@/store'

/**
 * 那个页面要验证登陆 那么使用LoginRouter将它包裹
 *@param { * } 需要验证登陆的组件
 *@return 组件
 */
const LoginRouter = (Component) => {
  return class extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          user: store.getState().getIn(['USER', 'user'])
        }
      }

    render() {
      console.log(this.state.user)
      return (
        <Fragment>
          {
            this.state.user ? (
              // 存在   说明已经登陆  渲染原组件
              <Component { ...this.props } />
            ) : (
              // 不存在  跳转到登陆
              // console.log(this.props)
              this.props.history.replace('/Login')
            )
          }
        </Fragment>
      )
    }
  }
}

export default LoginRouter