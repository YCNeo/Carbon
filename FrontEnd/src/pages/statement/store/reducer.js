import * as constants from './constants';

const defaultState = {
  projectlist: [],
  projectdata: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_PROJECT:
      return { ...state, projectlist: action.projectlist }
    case constants.PORJECT_DATA:
      return { ...state, projectdata: action.projectdata }
    default:
      return state;
  }
};

export default reducer;
