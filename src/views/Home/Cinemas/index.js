import React from 'react'
import store from '@/store'
import createAction from './store/createAction'
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
    // let action = {
    //   type: CHANGE_INP,
    //   value
    // }
    store.dispatch(createAction.InputAction(value))
  }

  /**
   * 添加list数据
   */
  ADD() {
    // console.log(111)
    // let action = {
    //   type: ADD_ADD
    // }

    store.dispatch(createAction.Addction())
  }

   /**
   * 删除list数据
   */
  DEL(index) {
    // let action ={
    //   type: DEL_ADD
    // }
    // store.dispatch(function (dispatch) {
    //   // 这个异步函数可以接收一个参数dispatch，就是store.dispatch
    //   setTimeout(() => {
    //     store.dispatch(createAction.DelAction(index))
    //   },1000)
    // })
    store.dispatch(createAction.DelAction(index))
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
      </div>)
  }

  componentDidMount() {
    store.dispatch(createAction.Initction)
    // Toast.loading('正在加载，请稍后...',0)
    // setTimeout(() =>{
    //   http.get('/initTodo.json')
    //   .then(res => {
    //     store.dispatch(createAction.Initction(res))
    //       Toast.hide()
    //   })
    // },1000)
  }

  componentWillUnmount() {
    // 销毁监听
    this.clearSub()
  }
 }

 export default Cinemas