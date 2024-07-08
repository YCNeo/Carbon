import * as constants from './constants';
import axios from 'axios';

const changelist = (data) => ({
  type: constants.CHANGE_LIST,
  data,
  totalpage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});


export const getlist = () => {
  return (dispatch) => {
    axios.get('/api/headerlist.json').then((res) => {
      const data = res.data;
      dispatch(changelist(data.data));
    }).catch(() => {
      console.log('error')
    })
  }
};

export const iforgotpassword = (value) => {
  return {
    type: constants.FORGET_PASSWORD_PAGE,
    value: value
  }
}