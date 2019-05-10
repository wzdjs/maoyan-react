import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  TabUL, TabLi
} from './style'

class Bottom extends React.Component {
  constructor(props) {
    super(props)
    this.state= {

    }
  }
  render() {
    const { Bottom } = this.props
    return (
      <TabUL>
        {
          Bottom.map(item => {
            return (
              <TabLi key={ item.id}>
                <NavLink to={ `/${item.id}` }>{ item.name }</NavLink>
              </TabLi>
            )
          })
        }
      </TabUL>
    )
  }
}
// props的校验
Bottom.prototypes ={
  Bottom: PropTypes.array.isRequired
}
// props的初始值
Bottom.defaultProps = {
  Bottom: []
}
export default Bottom;
