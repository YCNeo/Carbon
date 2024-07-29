import axios from 'axios'
import * as constants from './constants'
import CryptoJS from 'crypto-js';

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
    const hash1 = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    axios./*正是對接時用post*/get('/api/login.json', { account, hash1 }).then((res) => {
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

export const revisepassword = (old_password, new_password, comfirm_new_password) => {
  return (dispatch) => {
    if (new_password === comfirm_new_password) {
      axios./*正是對接時用post*/get('/api/login.json', { old_password }).then((res) => {
        const result = res.data.data;
        if (result) {
          const hash1 = CryptoJS.SHA256(new_password).toString(CryptoJS.enc.Hex);
          //const salt = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
          //const hash2 = CryptoJS.SHA512(salt + hash1).toString(CryptoJS.enc.Hex);
          //const salt_hash2 = `${salt}:${hash2}`;
          axios./*正是對接時用post*/get('/api/login.json', { hash1 })
          dispatch(changelogin())
        } else {
          alert('舊密碼錯誤')
        }
      }).catch(() => {
        alert('登錄資訊獲取失敗')
      });
    }
    else {
      alert('新密碼不同')
    }
  }
}
