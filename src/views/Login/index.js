import React from 'react'
import { connect } from 'react-redux'
import { InputItem,Button} from 'antd-mobile'
import createAction from './store/createAction'

const Login = ( { userName, password,CHANG_NAME,CHANG_WORD, toLOGIN }) =>{
  return (
    <div>
      <InputItem
      placeholder="用户名"
      value= { userName }
      onChange= { CHANG_NAME}
      />
      <InputItem
      type="password"
      placeholder="密码"
      value={ password }
      onChange= { CHANG_WORD }
      />
      <Button onClick= { toLOGIN}>登陆</Button>
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
    CHANG_NAME: (value) => {
      dispatch(createAction.UserNameAction(value))
    },

    CHANG_WORD: (value) => {
      dispatch(createAction.PassWordAction(value))
    },
    toLOGIN: () => {
    dispatch(createAction.SET_LOGIN(props.history))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)