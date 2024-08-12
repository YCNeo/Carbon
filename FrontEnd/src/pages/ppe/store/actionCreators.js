import axios from 'axios'
import * as constants from './constants';

const API_URL = 'http://localhost:8000/';
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
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const materialretrieve = (name, supplier, MID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { MID, name, supplier }).then((res) => {
      const result = res.data.data;
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
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}

export const equipmentpostrepair = (date, EQID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { date, EQID }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}

export const equipmentretrieve = (name, supplier, EQIP) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { EQIP, name, supplier }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}