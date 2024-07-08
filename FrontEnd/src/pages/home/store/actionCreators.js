import axios from 'axios';
import * as constants from './constants';

const changehomedata = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topiclist: result.topiclist,
  articlelist: result.articlelist,
  recommendlist: result.recommendlist
})

const addhomelist = (list, nextpage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list,
  nextpage
})

export const getmorelist = (page) => {
  return (dispatch) => {
    axios.get('/api/homelist.json?page' + page).then((res) => {
      const result = res.data.data;
      dispatch(addhomelist(result, page + 1));
    })
  }
}

export const gethomeinfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changehomedata(result));
    })
  }
}

export const toggletopshow = (show) => ({
  type: constants.TOGGLE_SCROLL_SHOW_TOP,
  show
})