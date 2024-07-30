import axios from 'axios'
import * as constants from './constants';

export const getproject = () => {
  return (dispatch) => {
    axios.get('/api/access.json').then((res) => {
      const result = res.data.data;
      dispatch({
        type: constants.GET_PROJECT,
        projectlist: result
      });
    }).catch((error) => {
      console.error('Error fetching access data:', error);
    });
  }
}

export const sendinfo = (projectChecked, startDate, endDate, chart, selectedOption1, selectedOption2) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { projectChecked, startDate, endDate, chart, selectedOption1, selectedOption2 }).then((res) => {
      const result = res.data.data;
      result? alert('success'):alert('fail')
    }).catch(() => {
      alert('AAsendinfo fail')
    });
  }
}