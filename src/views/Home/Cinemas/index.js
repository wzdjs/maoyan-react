import React from 'react'
import store from '@/store'
import {
  CHANGE_INP, ADD_ADD, DEL_ADD
} from './store/actionTypes'
import { Flex, InputItem, Button, List, WhiteSpace } from 'antd-mobile'

class Cinemas extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      inputVal: store.getState().TODO.inputVal,
      todoList: store.getState().TODO.todoList
    }
    /**
     *  监听仓库的数据变化
     * @return { function }  调用这个函数可以销毁这个监听
     */
    this.clearSub = store.subscribe(() => {
      this.setState(() => ({
        inputVal: store.getState().TODO.inputVal,
        todoList: store.getState().TODO.todoList
      }))
    })

    this.CHANGE =this.CHANGE.bind(this)
    this.ADD = this.ADD.bind(this)
    this.DEL = this.DEL.bind(this)
  }

/**
 * input 输入
 * @param{ string }  value 返回的值
 */
CHANGE(value) {
    let action = {
      type: CHANGE_INP,
      value
    }
    store.dispatch(action)
  }

  /**
   * 添加list数据
   */
  ADD() {
    console.log(111)
    let action = {
      type: ADD_ADD
    }
    store.dispatch(action)
  }

   /**
   * 删除list数据
   */
  DEL() {
    let action ={
      type: DEL_ADD
    }
    store.dispatch(action)
  }

  render() {
    const {inputVal, todoList} = this.state
    return (
      <div>
        <Flex>
          <Flex.Item>
            <InputItem
            value={ inputVal }
            onChange={ this.CHANGE }
            />
          </Flex.Item>

          <Flex.Item>
            <Button onClick={ this.ADD } >增加</Button>
          </Flex.Item>
        </Flex>
        <WhiteSpace></WhiteSpace>
        <List>
          {
            todoList.map((item, index) => {
              return(
                <List.Item
                  key= { index }
                  onClick= { this.DEL }
                  >
                { item }
                </List.Item>
              )
            })
          }
        </List>
      </div>
    )
  }
  componentWillUnmount() {
    // 销毁监听
    this.clearSub()
  }
 }

 export default Cinemas