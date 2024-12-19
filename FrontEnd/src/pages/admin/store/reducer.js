import * as constants from './constants';

const defaultState = {
  adminpage: 1,
  employeepage: 1,
  accesslist: [],
  materiallist: [],
  equipmentlist: [],
  boundarylist: [],
  approvelist: [],
  retrieve_employee: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_ADMIN_PAGE:
      return {
        ...state,
        adminpage: action.page
      };
    case constants.SET_EMPLOYEE_PAGE:
      return {
        ...state,
        employeepage: action.page
      }
    case constants.GET_ACCESS:
      return { ...state, accesslist: action.accesslist }
    case constants.GET_MATERIAL:
      return { ...state, materiallist: action.materiallist }
    case constants.GET_EQUIPMENT:
      return { ...state, equipmentlist: action.equipmentlist }
    case constants.GET_BOUNDARY:
      return { ...state, boundarylist: action.boundarylist }
    case constants.GET_APPROVE:
      return { ...state, approvelist: action.approvelist }
    case constants.RETRIEVE_EMPLOYEE:
      return {
        ...state,
        retrieve_employee: action.retrieve_employee,
      }
    default:
      return state;
  }
};

export default reducer;
