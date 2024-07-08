import * as constants from './constants';

const defaultState = {
  topiclist: [],
  articlelist: [],
  recommendlist: [],
  articlepage: 1,
  showscroll: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return {
        ...state,
        topiclist: action.topiclist,
        articlelist: action.articlelist,
        recommendlist: action.recommendlist
      };
    case constants.ADD_ARTICLE_LIST:
      return {
        ...state,
        articlelist: [...state.articlelist, ...action.list],
        articlepage: action.nextpage
      };
    case constants.TOGGLE_SCROLL_SHOW_TOP:
      return {
        ...state,
        showscroll: action.show
      };
    default:
      return state;
  }
};

export default reducer;
