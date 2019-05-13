import React from 'react'
import { connect } from 'react-redux'
import { InputItem,Button} from 'antd-mobile'
import createAction from './store/createAction'

const Login = ( { userName, password,CHANG_FORM, toLOGIN }) =>{
  return (
    <div>
      <InputItem
      placeholder="用户名"
      value= { userName }
      onChange= { (value) =>{CHANG_FORM('userName',value)}}
      />
      <InputItem
      type="password"
      placeholder="密码"
      value={ password }
      onChange= { (value) =>{CHANG_FORM('password',value)} }
      />
      <Button onClick= { toLOGIN }>登陆</Button>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    userName: state.getIn(['USER','userName']),
    password: state.getIn(['USER','password'])
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    // CHANG_NAME: (value) => {
    //   dispatch(createAction.UserNameAction(value))
    // },

    // CHANG_WORD: (value) => {
    //   dispatch(createAction.PassWordAction(value))
    // },
    CHANG_FORM: (key,value) => {
      dispatch(createAction.FromAction(key,value))
    },

    toLOGIN: () => {
      // 传递过来props.history和props.location.search(想去的页面的参数)
      let redirect = props.location.search.substr(11)
    dispatch(createAction.SET_LOGIN(props.history,redirect))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)