import axios from 'axios'
import * as constants from './constants';
import { API_URL } from '../../../components/apiurl';
//axios.post(`${API_URL}/login`,{...     //測試替換部分

export const setesgpage = (page) => ({
  type: constants.SET_ESG_PAGE,
  page
});

export const setboundary_editionpage = (page) => ({
  type: constants.SET_BOUNDARY_EDITION_PAGE,
  page
});

export const setsourcepage = (page) => ({
  type: constants.SET_SOURCE_PAGE,
  page
});

export const setstatementpage = (page) => ({
  type: constants.SET_STATEMENT_PAGE,
  page
});

export const setauditpage = (page) => ({
  type: constants.SET_AUDIT_PAGE,
  page
});

/////////////////////////////boundart_edition////////////////////////////

export const boundary_editionpost = (name, address, type) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, address, type }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const boundary_editionretrieve = (BID, name, type) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/esgboundaryretrieve.json', { BID, name, type }).then((res) => {
      const result = res.data;
      dispatch({
        type: constants.RETRIEVE_BOUNDARY,
        retrieve_boundary: result
      })
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const boundary_editionrevise = (BID, address) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { BID, address }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const boundary_editiondelete = (BID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { BID }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
/////////////////////////////source////////////////////////////

export const sourcepost = (EName, form, MName, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { EName, form, MName, category }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const sourceretrieve = (EName, form, MName, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/esgsourceretrieve.json', { EName, form, MName, category }).then((res) => {
      const result = res.data;
      dispatch({
        type: constants.RETRIEVE_SOURCE,
        retrieve_source: result
      })
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const sourcedelete = (SID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { SID }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const sourcerevise = (EName, form, MName, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { EName, form, MName, category }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

/////////////////////////////statement////////////////////////////

export const statementretrieve = (EName, form, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { category, form, EName }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
