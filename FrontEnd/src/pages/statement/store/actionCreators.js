import axios from 'axios'
import * as constants from './constants';
import { API_URL } from '../../../components/apiurl';

//axios.post(`${API_URL}/login`,{...     //測試替換部分

export const getproject = () => {
  return (dispatch) => {
    axios.get('/api/access.json').then((res) => {
      const result = res.data;
      dispatch({
        type: constants.GET_PROJECT,
        projectlist: result
      });
    }).catch((error) => {
      console.error('Error fetching access data:', error);
    });
  }
}

export const sendinfo = (PID ) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/statement_project.json', { PID}).then((res) => {      
      const result = res.data.data;
      dispatch({
        type: constants.PORJECT_DATA,
        projectdata: result
      });
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('AAsendinfo fail')
    });
  }
}