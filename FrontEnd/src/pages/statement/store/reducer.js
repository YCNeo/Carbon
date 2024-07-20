import * as constants from './constants';

const defaultState = {
  projectlist: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_PROJECT:
      return { ...state, projectlist: action.projectlist }
    default:
      return state;
  }
};

export default reducer;
