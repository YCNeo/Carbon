import * as constants from './constants';

const defaultState = {
  login: false,
  loginfail: false,
  forgetpassword: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return { ...state, login: action.value, loginfail: !action.value }
    case constants.LOGOUT:
      return { ...state, login: action.value }
    case constants.LOG_FAIL:
      return { ...state, loginfail: action.value }
    case constants.FORGET_PASSWORD_PAGE:
      return { ...state, forgetpassword: action.value }
    default:
      return state;
  }
};

export default reducer;
