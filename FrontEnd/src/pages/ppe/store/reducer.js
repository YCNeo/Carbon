import * as constants from './constants';

const defaultState = {
  ppepage: 1,
  materialpage: 1,
  equipmentpage: 1,
  retrieve_material: [],
  retrieve_equipment: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_PPE_PAGE:
      return {
        ...state,
        ppepage: action.page,
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
    case constants.RETRIEVE_MATERIAL:
      return {
        ...state,
        retrieve_material: action.retrieve_material,
      };
    case constants.RETRIEVE_EQUIPMENT:
      return {
        ...state,
        retrieve_equipment: action.retrieve_equipment,
      };
    default:
      return state;
  }
};

export default reducer;
