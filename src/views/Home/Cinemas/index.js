import { connect } from 'react-redux'
import UI from './ui'
import createAction from './store/createAction'

/**
 * 映射到UI组件上的props
 *@param{object} state :recux的state放在最外层（路由的外面）
 *return {object} 映射到UI组件上的prpos
 **/
 const mapStateToProps =({ TODO }) => {
    return{
      inputVal: TODO.inputVal,
      todoList: TODO.todoList
    }
 }

 /**
 * 映射到UI组件上的props
 *@param{funcction} dispatch :store.dispatch
 *return {object} 映射到UI组件上的prpos，是方法（函数）类型的props
 **/
 const mapDispatchToProps = (dispatch) => {
    return {
      CHANGE: (value) =>{
        dispatch(createAction.InputAction(value))
      },
      ADD: () =>{
        dispatch(createAction.Addction())
      },
      DEL: (index) =>{
        dispatch(createAction.DelAction(index))
      },
      Initction: () =>{
        dispatch(createAction.Initction)
      }
    }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(UI)