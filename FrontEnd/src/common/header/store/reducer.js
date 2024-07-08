import * as constants from './constants';

const defaultState = {
  focused: false,
  mousein: false,
  list: [],
  page: 1,
  totalpage: 1
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return { ...state, focused: true };
    case constants.SEARCH_BLUR:
      return { ...state, focused: false };
    case constants.MOUSE_ENTER:
      return { ...state, mousein: true };
    case constants.MOUSE_LEAVE:
      return { ...state, mousein: false };
    case constants.CHANGE_PAGE:
      return { ...state, page: action.page};
    case constants.CHANGE_LIST:
      return { ...state, list: action.data, totalpage: action.totalpage };
    default:
      return state;
  }
};

export default reducer;
