import * as constants from './constants';

const defaultState = {
  login: false,
  loginfail: false,
  forgetpassword: false,
  pm_ranklist:[]
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return { ...state, login: action.value, loginfail: !action.value }
    case constants.LOGOUT:
      return { ...state, login: action.value, forgetpassword: action.value }
    case constants.LOG_FAIL:
      return { ...state, loginfail: action.value }
    case constants.FORGET_PASSWORD_PAGE:
      return { ...state, forgetpassword: action.value }
    case constants.FIRST_LOGIN:
      return { ...state, forgetpassword: action.value }
    case constants.PMRANK:
      return { ...state, pm_ranklist: action.list }
    default:
      return state;
  }
};

export default reducer;
