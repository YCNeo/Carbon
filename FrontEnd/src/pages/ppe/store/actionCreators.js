import axios from 'axios'
import * as constants from './constants';

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

///////////////////////////material//////////////////////////////////////
export const materialpost = (name, supplier_name, amount, unit, factor, startDate, endDate, age) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, supplier_name, amount, unit, factor, startDate, endDate, age }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const materialrevise = (name, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, amount, unit }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const materialretrieve = (name) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////equipment/////////////////////////////////////
export const equipmentpost = (name, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, amount, unit }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
export const equipmentrevise = (name, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, amount, unit }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
export const equipmentretrieve = (name) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
