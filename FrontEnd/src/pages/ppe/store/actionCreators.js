import axios from 'axios'
import * as constants from './constants';
import { API_URL } from '../../../components/apiurl';

//axios.post(`${API_URL}/login`,{...     //測試替換部分

export const setppepage = (page) => ({
  type: constants.SET_PPE_PAGE,
  page
});

export const setmaterialpage = (page) => ({
  type: constants.SET_MATERIAL_PAGE,
  page
});

export const setequipmentpage = (page) => ({
  type: constants.SET_EQUIPMENT_PAGE,
  page
});

///////////////////////////material/////////////////////////////////////
export const materialpost = (name, supplier, amount, unit, factor, purchaseDate, disposalDate, age, EXPDate) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, supplier, amount, unit, factor, purchaseDate, age, disposalDate, EXPDate }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const materialretrieve = (name, supplier, MID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/ppematerialretrieve.json', { MID, name, supplier }).then((res) => {
      const result = res.data;
      dispatch({
        type: constants.RETRIEVE_MATERIAL,
        retrieve_material: result
      })
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const materialdelete = (name, MID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, MID }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////eqipment//////////////////////////////////////
export const equipmentpost = (name, supplier, amount, unit, factor, purchaseDate, disposalDate, age, ageUnit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, supplier, amount, unit, factor, purchaseDate, disposalDate, age, ageUnit }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}

export const equipmentpostrepair = (date, EQID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { date, EQID }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}

export const equipmentretrieve = (name, supplier, EQIP) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/ppeequipmentretrieve.json', { EQIP, name, supplier }).then((res) => {
      const result = res.data;
      dispatch({
        type: constants.RETRIEVE_EQUIPMENT,
        retrieve_equipment: result
      })
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}

export const equipmentdelete = (EQIP) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { EQIP }).then((res) => {
      const result = res.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}