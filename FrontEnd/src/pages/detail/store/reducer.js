import * as constants from './constants';

const defaultState = {
  title: '',
  content: ''
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return { ...state, title: action.title, content: action.content }
    default:
      return state;
  }
};

export default reducer;
