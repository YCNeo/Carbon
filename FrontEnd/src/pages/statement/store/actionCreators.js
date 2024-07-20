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