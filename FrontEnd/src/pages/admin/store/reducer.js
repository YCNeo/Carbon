import * as constants from './constants';

const defaultState = {
  adminpage: 1,
  employeepage: 1,
  CUsend: false,
  CUsendvalue: false,
  AAsend: false,
  AAsendvalue: false,
  CPsend: false,
  CPsendvalue: false,
  Asend: false,
  Asendvalue: false,
  EPsend: false,
  EPsendvalue: false,
  ERsend: false,
  ERsendvalue: false,
  EDsend: false,
  EDsendvalue: false,
  ESsend: false,
  ESsendvalue: false,
  accesslist: [],
  materiallist: [],
  equipmentlist: [],
  approve_pid: "pid",
  approve_pmid: "pmid",
  approve_time: "time",
  oldcontent: "",
  newcontent: ""
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_ADMIN_PAGE:
      return {
        ...state,
        adminpage: action.page,
        CUsend: false,
        CUsendvalue: false,
        AAsend: false,
        AAsendvalue: false,
        CPsend: false,
        CPsendvalue: false,
        Asend: false,
        Asendvalue: false
      };
    case constants.SET_EMPLOYEE_PAGE:
      return {
        ...state,
        employeepage: action.page,
        EPsend: false,
        EPsendvalue: false,
        ERsend: false,
        ERsendvalue: false,
        EDsend: false,
        EDsendvalue: false,
        ESsend: false,
        ESsendvalue: false
      }
    case constants.CUSEND:
      return { ...state, CUsendvalue: action.value, CUsend: true };
    case constants.AASEND:
      return { ...state, AAsendvalue: action.value, AAsend: true };
    case constants.CPSEND:
      return { ...state, CPsendvalue: action.value, CPsend: true };
    case constants.ASEND:
      return { ...state, Asendvalue: action.value, Asend: true };
    case constants.EPSEND:
      return { ...state, EPsendvalue: action.value, EPsend: true };
    case constants.ERSEND:
      return { ...state, ERsendvalue: action.value, ERsend: true };
    case constants.EDSEND:
      return { ...state, EDsendvalue: action.value, EDsend: true };
    case constants.ESSEND:
      return { ...state, ESsendvalue: action.value, ESsend: true };
    case constants.GET_ACCESS:
      return { ...state, accesslist: action.accesslist }
    case constants.GET_MATERIAL:
      return { ...state, materiallist: action.materiallist }
    case constants.GET_EQUIPMENT:
      return { ...state, equipmentlist: action.equipmentlist }
    case constants.GET_OLD_CONTENT:
      return {
        ...state,
        approve_pid: action.pid,
        approve_pmid: action.pmid,
        approve_time: action.time,
        oldcontent: action.oldcontent,
      }
    case constants.GET_NEW_CONTENT:
      return {
        ...state,
        newcontent: action.newcontent,
      }
    default:
      return state;
  }
};

export default reducer;
