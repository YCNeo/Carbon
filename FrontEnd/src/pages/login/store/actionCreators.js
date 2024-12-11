import axios from 'axios'
import * as constants from './constants'
import CryptoJS from 'crypto-js';
import { API_URL } from '../../../components/apiurl';

const changelogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

const failtologin = () => ({
  type: constants.LOG_FAIL,
  value: true
})

const firstlogin = () => ({
  type: constants.FIRST_LOGIN,
  value: true
})

const pmrank = (rank) => ({
  type: constants.PMRANK,
  list: rank
})

const userinfo =(data)=>({
  type: constants.USER_INFO,
  eid: data.EID,
  ename: data.Ename
})

export const logout = () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('authority');
  localStorage.removeItem('PM_rank');
  localStorage.removeItem('project');
  localStorage.removeItem('pm_rank');
  return {
    type: constants.LOGOUT,
    value: false
  };
};
// 預設登入成功且是第一次登入
export const login = (user, ori_password) => {
  return (dispatch) => {
    const password = CryptoJS.SHA256(ori_password).toString(CryptoJS.enc.Hex);
    // axios.post(`${API_URL}/login`, { user, password }).then((res) => {                //back end ok
    axios./*正是對接時用post*/get('/api/login.json', { user, password }).then((res) => {    //backend not ok
      const result = res.data.success;
      if (result) {
        if (res.data.first_login) {
          dispatch(firstlogin())
        }
        else {
          dispatch(changelogin())
        }
      } else {
        dispatch(failtologin());
      }
      const token = res.data.JWT;
      localStorage.setItem('jwtToken', token);// put
      axios./*正是對接時用post*/get('/api/login.json', { user }).then((res) => { //記得改route
        const result2 = res.data;
        dispatch(userinfo(result2));
        localStorage.setItem('authority', result2.authority);
        dispatch(pmrank(result2.PM_rank));
      })

      //localStorage.setItem('EID', '1111111111');
      //localStorage.setItem('Ename', 'apple');
      //localStorage.setItem('authority', 'admin');
      //localStorage.setItem('PM_rank', 'admin');
      //const token1 = localStorage.getItem('jwtToken');// take
      //console.log("take:"+token1);
    }).catch(() => {
      alert('登錄資訊獲取失敗')
    });
  }
}
//預設修改成功，先傳驗證舊密碼的api，成功再傳新密碼的api
export const revisepassword = (UID, old_password, new_password, comfirm_new_password) => {
  return (dispatch) => {
    if (new_password === comfirm_new_password) {
      const oldPw = CryptoJS.SHA256(old_password).toString(CryptoJS.enc.Hex);
      //axios.post(`${API_URL}/login`, { UID, oldPw }).then((res) => {                   //back end ok
      axios./*正是對接時用post*/get('/api/login.json', { UID, oldPw }).then((res) => {    //backend not ok
        const result = res.data.success;
        if (result) {
          const newPw = CryptoJS.SHA256(new_password).toString(CryptoJS.enc.Hex);
          //const salt = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
          //const hash2 = CryptoJS.SHA512(salt + hash1).toString(CryptoJS.enc.Hex);
          //const salt_hash2 = `${salt}:${hash2}`;
          //axios.post(`${API_URL}/Revisepassword`, { UID, newPw })         //back end ok
          axios./*正是對接時用post*/get('/api/login.json', { UID, newPw })   //back end not ok
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
