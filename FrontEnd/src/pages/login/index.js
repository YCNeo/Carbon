import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { actionCreators } from "./store";
import {
  LoginWrapper,
  LoginBox,
  LoginInput,
  LoginBotton,
  Loginfail,
  Logintitle
} from '../../components/style'

class Login extends Component {
  render() {
    const { loginstate, loginfailstate, forgetpassword, revisepassword } = this.props;
    if (!loginstate) {
      return (
        <LoginWrapper>
          {forgetpassword ?
            <LoginBox>
              <Logintitle>修改密碼</Logintitle>
              <LoginInput placeholder='user name' ref={(input) => { this.uid = input }} />
              <LoginInput placeholder='原密碼' ref={(input) => { this.old_password = input }} />
              <LoginInput placeholder='新密碼' ref={(input) => { this.new_password = input }} type='password' />
              <LoginInput placeholder='再次確認新密碼' ref={(input) => { this.comfirm_new_password = input }} type='password' />
              <LoginBotton onClick={() => revisepassword(this.uid, this.old_password, this.new_password, this.comfirm_new_password)}>確認</LoginBotton>
              {loginfailstate ? <Loginfail>修改失敗</Loginfail> : null}
            </LoginBox>
            :
            <LoginBox>
              <Logintitle>登入</Logintitle>
              <LoginInput placeholder='帳號' ref={(input) => { this.account = input }} />
              <LoginInput placeholder='密碼' ref={(input) => { this.password = input }} type='password' />
              <LoginBotton onClick={() => this.props.login(this.account, this.password)}>確認</LoginBotton>
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
    revisepassword(uid, old_password, new_password, comfirm_new_password) {
      dispatch(actionCreators.revisepassword(uid.value, old_password.value, new_password.value, comfirm_new_password.value))
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Login);