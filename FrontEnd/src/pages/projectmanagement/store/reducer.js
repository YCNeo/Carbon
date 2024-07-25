import * as constants from './constants';

const defaultState = {
  projectmanagementPagepage: 1,
  employeepage: 1,
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
    case constants.SET_PROJECTMANAGEMENT_PAGE:
      return {
        ...state,
        projectmanagementpage: action.page,
      };
    case constants.SET_EMPLOYEE_PAGE:
      return {
        ...state,
        employeepage: action.page,
      }
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
