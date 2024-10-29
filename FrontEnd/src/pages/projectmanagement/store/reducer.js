import * as constants from './constants';

const defaultState = {
  projectmanagementpage: 1,
  memberpage: 1,
  flowpage: 1,
  materialpage: 1,
  equipmentpage: 1,
  dailyrecordpage: 1,
  positionlist: [],
  flowlist: [],
  updateflowlist: true
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_PROJECTMANAGEMENT_PAGE:
      return {
        ...state,
        projectmanagementpage: action.page,
      };
    case constants.SET_MEMBER_PAGE:
      return {
        ...state,
        memberpage: action.page,
      };
    case constants.SET_FLOW_PAGE:
      return {
        ...state,
        flowpage: action.page,
      };
    case constants.SET_MATERIAL_PAGE:
      return {
        ...state,
        materialpage: action.page,
      };
    case constants.SET_EQUIPMENT_PAGE:
      return {
        ...state,
        equipmentpage: action.page,
      };
    case constants.SET_DAILY_RECORD_PAGE:
      return {
        ...state,
        dailyrecordpage: action.page,
      };
    case constants.GET_POSITION:
      return {
        ...state,
        positionlist: action.position
      };
    case constants.GET_FLOW:
      return {
        ...state,
        flowlist: action.flow,
        updateflowlist: true
      };
    case constants.FLOW_UPDATED:
      return {
        ...state,
        updateflowlist: false
      };
    default:
      return state;
  }
};

export default reducer;
