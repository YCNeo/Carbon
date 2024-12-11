import * as constants from './constants';

const defaultState = {
  login: false,
  loginfail: false,
  forgetpassword: false,
  pm_ranklist: [],
  EID: '',
  Ename: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return { ...state, login: action.value, loginfail: !action.value, forgetpassword: !action.value }
    case constants.LOGOUT:
      return { ...state, login: action.value, forgetpassword: action.value, EID: '', Ename: '' }
    case constants.LOG_FAIL:
      return { ...state, loginfail: action.value }
    case constants.FORGET_PASSWORD_PAGE:
      return { ...state, forgetpassword: action.value }
    case constants.FIRST_LOGIN:
      return { ...state, forgetpassword: action.value }
    case constants.PMRANK:
      return { ...state, pm_ranklist: action.list }
    case constants.USER_INFO:
      return { ...state, EID: action.eid, Ename: action.ename }
    default:
      return state;
  }
};

export default reducer;
