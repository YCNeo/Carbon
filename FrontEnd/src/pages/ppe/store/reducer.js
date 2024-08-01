import * as constants from './constants';

const defaultState = {
  ppepage: 1,
  materialpage: 1,
  equipmentpage:1,
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
    default:
      return state;
  }
};

export default reducer;
