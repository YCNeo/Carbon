import axios from 'axios'
import * as constants from './constants';

const API_URL = 'http://localhost:8000/';
//axios.post(`${API_URL}/login`,{...     //測試替換部分

export const setadminpage = (page) => ({
  type: constants.SET_ADMIN_PAGE,
  page
});

export const setpage = (page) => ({
  type: constants.SET_EMPLOYEE_PAGE,
  page
});

/////////////////admin///////////////////

export const CUsendinfo = (name, access) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/CUinfo.json', { name, access }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('CUsendinfo fail')
    });
  }
}

export const AAsendinfo = (name, access) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { name, access }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('AAsendinfo fail')
    });
  }
}

export const CPsendinfo = (projectName, PMID, materialChecked, equipmentChecked) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/CPinfo.json', { projectName, PMID, materialChecked, equipmentChecked }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('CPsendinfo fail')
    });
  }
}

//type: 1=accept 0=reject
export const Asendinfo = (type, project_id, pm_id, material, equipment) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/Ainfo.json', { type, project_id, pm_id, material, equipment }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('Asendinfo fail')
    });
  }
}

///////////////////////////employee///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const employeepost = (name, gender, phone, mail, nation) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/Ainfo.json', { name, gender, phone, mail, nation }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('EPsendinfo fail')
    });
  }
}

export const employeerevise = (EID, name, gender, phone, mail, nation) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { EID, name, gender, phone, mail, nation }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('ERsendinfo fail')
    });
  }
}

export const employeedelete = (EID, name) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { EID, name }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('EDsendinfo fail')
    });
  }
}

export const employeeretrieve = (EID, name, PID, region) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/Ainfo.json', { EID, name, PID, region }).then((res) => {
      const result = res.data.data;
      result ? alert('success') : alert('fail')
    }).catch(() => {
      alert('ESsendinfo fail')
    });
  }
}

///////////////////////get list//////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getaccess = () => {
  return (dispatch) => {
    axios.get('/api/access.json').then((res) => {
      const result = res.data.data;
      dispatch({
        type: constants.GET_ACCESS,
        accesslist: result
      });
    }).catch((error) => {
      console.error('Error fetching access data:', error);
    });
  }
}

export const getmaterial = () => {
  return (dispatch) => {
    axios.get('/api/material.json').then((res) => {
      const result = res.data.data;
      console.log('material');
      
      dispatch({
        type: constants.GET_MATERIAL,
        materiallist: result
      });
    }).catch((error) => {
      console.error('Error fetching material data:', error);
    });
  }
}

export const getequipment = () => {
  return (dispatch) => {
    axios.get('/api/equipment.json').then((res) => {
      const result = res.data.data;
      dispatch({
        type: constants.GET_EQUIPMENT,
        equipmentlist: result
      });
    }).catch((error) => {
      console.error('Error fetching equipment data:', error);
    });
  }
}

export const getapprove=()=>{
  return (dispatch) => {
    axios.get('/api/approve.json').then((res) => {
      const result = res.data.approve_list;
      dispatch({
        type: constants.GET_APPROVE,
        approvelist: result
      });
    }).catch((error) => {
      console.error('Error fetching approve list:', error);
    });
  };
}

/////////////////////////////比較新舊參考用////////////////////////////////////////////////////////////////
/*
import DiffMatchPatch from 'diff-match-patch';
const dmp = new DiffMatchPatch();

export const getnewcontent = () => {
  return (dispatch, getState) => {
    axios.get('/api/newcontent.json').then((res) => {
      const result = res.data.data;
      const { oldcontent } = getState().admin;
      const diff = dmp.diff_main(oldcontent, result.content);
      dmp.diff_cleanupSemantic(diff);
      const diffHTML = diff.map(part => {
        const [op, text] = part;
        if (op === DiffMatchPatch.DIFF_INSERT) {
          return `<span style="background-color: #00DB00;">${text}</span>`;
        } else if (op === DiffMatchPatch.DIFF_DELETE) {
          return `<span style="background-color: #FF5151;">${text}</span>`;
        } else {
          return `<span>${text}</span>`;
        }
      }).join('');

      dispatch({
        type: constants.GET_NEW_CONTENT,
        newcontent: diffHTML
      });
    }).catch((error) => {
      console.error('Error fetching newcontent data:', error);
    });
  };
};
*/