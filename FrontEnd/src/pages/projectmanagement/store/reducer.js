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
  updateflowlist: true,
  retrieve_member: [],
  retrieve_material: [],
  retrieve_equipment: [],
  retrieve_dailyrecord: []
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
    case constants.RETRIEVE_MEMBER:
      return {
        ...state,
        retrieve_member: action.retrieve_member
      };
    case constants.RETRIEVE_MATERIAL:
      return {
        ...state,
        retrieve_material: action.retrieve_material
      };
    case constants.RETRIEVE_EQUIPMENT:
      return {
        ...state,
        retrieve_equipment: action.retrieve_equipment
      };
    case constants.RETRIEVE_DAILYRECORD:
      return {
        ...state,
        retrieve_dailyrecord: action.retrieve_dailyrecord
      };
    default:
      return state;
  }
};

export default reducer;
