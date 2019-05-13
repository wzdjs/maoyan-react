import React from 'react'
import { HocName } from './style'

const HOC = (Component) =>{
  return class extends React.Component{
    render() {
      return (
        <div>
          <HocName>
            这是一个高阶组件模块
          </HocName>
          <Component />
          <HocName>
            这是一个高阶组件模块
          </HocName>
        </div>
      )
    }
  }
}

export default HOC