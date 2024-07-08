import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { actionCreators } from "./store";
import {
  LoginWrapper,
  LoginBox,
  Input,
  Botton,
  Loginfail,
  Logintitle
} from './styled'

class Login extends Component {
  render() {
    const { loginstate, loginfailstate, forgetpassword, revisepassword } = this.props;
    if (!loginstate) {
      return (
        <LoginWrapper>
          {forgetpassword ?
            <LoginBox>
              <Logintitle>修改密碼</Logintitle>
              <Input placeholder='原密碼' ref={(input) => { this.old_password = input }} />
              <Input placeholder='新密碼' ref={(input) => { this.new_password = input }} type='password' />
              <Input placeholder='再次確認新密碼' ref={(input) => { this.comfirm_new_password = input }} type='password' />
              <Botton onClick={() => revisepassword(this.old_password, this.new_password, this.comfirm_new_password)}>確認</Botton>
              {loginfailstate ? <Loginfail>修改失敗</Loginfail> : null}
            </LoginBox>
            :
            <LoginBox>
              <Logintitle>登入</Logintitle>
              <Input placeholder='帳號' ref={(input) => { this.account = input }} />
              <Input placeholder='密碼' ref={(input) => { this.password = input }} type='password' />
              <Botton onClick={() => this.props.login(this.account, this.password)}>確認</Botton>
              {loginfailstate ? <Loginfail>登入失敗</Loginfail> : null}
            </LoginBox>
          }
        </LoginWrapper>
      )
    } else {
      return <Navigate to='/' />
    }
  }
}

const mapStateToProps = (state) => ({
  loginstate: state.login.login,
  loginfailstate: state.login.loginfail,
  forgetpassword: state.login.forgetpassword
})

const mapDisptchToProps = (dispatch) => {
  return {
    login(account, password) {
      dispatch(actionCreators.login(account.value, password.value))
    },
    revisepassword(password, old_password, comfirm_new_password) {
      dispatch(actionCreators.revisepassword(password.value, old_password.value, comfirm_new_password.value))
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Login);