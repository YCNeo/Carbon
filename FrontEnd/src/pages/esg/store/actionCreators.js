import axios from 'axios'
import * as constants from './constants';

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
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const boundary_editionretrieve = (bid, name, type) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { bid, name, type }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const boundary_editionrevise = (name, address) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, address }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

/////////////////////////////source////////////////////////////

export const sourcepost = (ename, form, ingredient, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { ename, form, ingredient, category }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const sourceretrieve = (ename, form, ingredient, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { ename, form, ingredient, category }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const sourcedelete = (sid) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { sid }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const sourcerevise = (ename, form, ingredient, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { ename, form, ingredient, category }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

/////////////////////////////statement////////////////////////////

export const statementretrieve = (ename, form, category) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { ename, form, category }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
