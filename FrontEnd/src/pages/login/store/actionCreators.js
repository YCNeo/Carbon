import axios from 'axios'
import * as constants from './constants'

const changelogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

const failtologin = () => ({
  type: constants.LOG_FAIL,
  value: true
})

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})

export const login = (account, password) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/login.json', { account, password }).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changelogin())
      } else {
        dispatch(failtologin());
      }
    }).catch(() => {
      alert('登錄資訊獲取失敗')
    });
  }
}

export const revisepassword = (password, old_password, comfirm_new_password) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/login.json', { password, old_password, comfirm_new_password }).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changelogin(password, old_password, comfirm_new_password))
      } else {
        dispatch(failtologin());
      }
    }).catch(() => {
      alert('登錄資訊獲取失敗')
    });
  }
}