import axios from 'axios'
import * as constants from './constants';

export const setprojectmanagementpage = (page) => ({
  type: constants.SET_PROJECTMANAGEMENT_PAGE,
  page
});

export const setmemberpage = (page) => ({
  type: constants.SET_MEMBER_PAGE,
  page
});

export const setflowpage = (page) => ({
  type: constants.SET_FLOW_PAGE,
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

export const setdailyrecordpage = (page) => ({
  type: constants.SET_DAILY_RECORD_PAGE,
  page
});

///////////////////////////member///////////////////////////////////////
export const memberpost = (eid, position) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { eid, position }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const memberrevise = (eid, position) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { eid, position }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const memberremove = (eid) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { eid }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const memberretrieve = (eid, name, position) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { eid, name, position }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////flow//////////////////////////////////////////
export const flowdesign = (eid) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { eid }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const flowrevise = (eid) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { eid }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////material//////////////////////////////////////
export const materialpost = (name, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { name, amount, unit }).then((res) => {
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
