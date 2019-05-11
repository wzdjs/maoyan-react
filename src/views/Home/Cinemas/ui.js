// cinema页面的UI组件
import React from 'react'
import { Flex, InputItem, Button, List, WhiteSpace } from 'antd-mobile'


class UI extends React.Component{
  render() {
    const {
      inputVal, todoList, CHANGE, ADD, DEL
    } = this.props
    return (
      <div>
        <Flex>
          <Flex.Item>
            <InputItem
            value={ inputVal }
            onChange={ CHANGE }
            />
          </Flex.Item>

          <Flex.Item>
            <Button onClick={ ADD } >增加</Button>
          </Flex.Item>
        </Flex>
        <WhiteSpace></WhiteSpace>
        <List>
          {
            todoList.map((item, index) => {
              return(
                <List.Item
                  key= { index }
                  onClick= { DEL.bind(null, index) }
                  >
                { item }
                </List.Item>
              )
            })
          }
        </List>
      </div>)
  }

  componentWillMount() {
    console.log(this.props)
      this.props.Initction()
  }
}
export default UI