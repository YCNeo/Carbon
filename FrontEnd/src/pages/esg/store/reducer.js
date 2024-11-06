import * as constants from './constants';

const defaultState = {
  esgpage: 1,
  boundary_editionpage: 1,
  sourcepage: 1,
  statementpage: 1,
  auditpage: 1,
  retrieve_boundary: [],
  retrieve_source: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_ESG_PAGE:
      return {
        ...state,
        esgpage: action.page,
      };
    case constants.SET_BOUNDARY_EDITION_PAGE:
      return {
        ...state,
        boundary_editionpage: action.page,
      };
    case constants.SET_SOURCE_PAGE:
      return {
        ...state,
        sourcepage: action.page,
      };
    case constants.SET_STATEMENT_PAGE:
      return {
        ...state,
        statementpage: action.page,
      };
    case constants.SET_AUDIT_PAGE:
      return {
        ...state,
        auditpage: action.page,
      };
    case constants.RETRIEVE_BOUNDARY:
      return {
        ...state,
        retrieve_boundary: action.retrieve_boundary,
      };
    case constants.RETRIEVE_SOURCE:
      return {
        ...state,
        retrieve_source: action.retrieve_source,
      };
    default:
      return state;
  }
};

export default reducer;
