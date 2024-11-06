import axios from 'axios'
import * as constants from './constants';

const API_URL = 'http://localhost:8000/';
const project = localStorage.getItem('project');

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
export const memberpost = (EID, position) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, EID, position }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const memberrevise = (EID, position) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, EID, position }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const memberremove = (EID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, EID }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const memberretrieve = (EID, name, position) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/pmmemberretrieve.json', { project, EID, name, position }).then((res) => {
      const result = res.data.data;
      dispatch({
        type: constants.RETRIEVE_MEMBER,
        retrieve_member: result
      })
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////flow//////////////////////////////////////////

export const flowrevise = (steps) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, steps }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////material//////////////////////////////////////
export const materialpost = (name, MID, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, name, MID, amount, unit }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const materialrevise = (name, MID, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, name, MID, amount, unit }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const materialretrieve = (name, MID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/pmmaterialretrieve.json', { project, name, MID }).then((res) => {
      const result = res.data.data;
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
///////////////////////////equipment/////////////////////////////////////
export const equipmentpost = (name, EQID, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, name, EQID, amount, unit }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const equipmentrevise = (name, EQID, amount, unit) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, name, EQID, amount, unit }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const equipmentretrieve = (name, EQID) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/pmequipmentretrieve.json', { project, name, EQID }).then((res) => {
      const result = res.data.data;
      dispatch({
        type: constants.RETRIEVE_EQUIPMENT,
        retrieve_equipment: result
      })
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////daily record/////////////////////////////////////

export const dailyrecordpost = (date, equipment, material, description) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, date, equipment, material, description }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const dailyrecordretrieve = (date) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, date }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const dailyrecordrevise = (date, equipment, material, description) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/member.json', { project, date, equipment, material, description }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}
///////////////////////////list//////////////////////

export const getposition = () => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/position.json').then((res) => {
      const result = res.data.data;
      dispatch({
        type: constants.GET_POSITION,
        position: result
      })
    }).catch((error) => {
      console.error('Error fetching position data:', error);
    });
  }
}

export const getflow = () => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/flow.json').then((res) => {
      const result = res.data.data;
      dispatch({
        type: constants.GET_FLOW,
        flow: result
      })
    }).catch((error) => {
      console.error('Error fetching flow data:', error);
    });
  }
}
///////////////////////////////////////////////////////other
export const updateflow = () => {
  return (dispatch) => {
    dispatch({
      type: constants.FLOW_UPDATED
    })
  }
}