import axios from 'axios'
import * as constants from './constants';

export const setadminpage = (page) => ({
  type: constants.SET_ADMIN_PAGE,
  page
});

export const setpage = (page) => ({
  type: constants.SET_EMPLOYEE_PAGE,
  page
});

/////////////////admin///////////////////

export const CUsendinfo = (user_name, access) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/CUinfo.json', { user_name, access }).then((res) => {
      const result = res.data.data;
      dispatch(CUsuccesssend(result));
    }).catch(() => {
      alert('CUsendinfo fail')
    });
  }
}

const CUsuccesssend = (result) => ({
  type: constants.CUSEND,
  value: result
})

export const AAsendinfo = (user_id, access) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { user_id, access }).then((res) => {
      const result = res.data.data;
      dispatch(AAsuccesssend(result));
    }).catch(() => {
      alert('AAsendinfo fail')
    });
  }
}

const AAsuccesssend = (result) => ({
  type: constants.AASEND,
  value: result
})

export const CPsendinfo = (project_id, pm_id, material, equipment) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/CPinfo.json', { project_id, pm_id, material, equipment }).then((res) => {
      const result = res.data.data;
      dispatch(CPsuccesssend(result));
    }).catch(() => {
      alert('CPsendinfo fail')
    });
  }
}

const CPsuccesssend = (result) => ({
  type: constants.CPSEND,
  value: result
})

//type: 1=accept 0=reject
export const Asendinfo = (type, project_id, pm_id, material, equipment) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/Ainfo.json', { type, project_id, pm_id, material, equipment }).then((res) => {
      const result = res.data.data;
      dispatch(Asuccesssend(result));
    }).catch(() => {
      alert('Asendinfo fail')
    });
  }
}

const Asuccesssend = (result) => ({
  type: constants.ASEND,
  value: result
})

///////////////////////////employee//////////////////////////////////////

const EPsuccesssend = (result) => ({
  type: constants.EPSEND,
  value: result
})

export const employeepost = (name, gender, phone, mail, region) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/Ainfo.json', { name, gender, phone, mail, region }).then((res) => {
      const result = res.data.data;
      dispatch(EPsuccesssend(result));
    }).catch(() => {
      alert('EPsendinfo fail')
    });
  }
}

const ERsuccesssend = (result) => ({
  type: constants.ERSEND,
  value: result
})

export const employeerevise = (eid, name, gender, phone, mail, region) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { eid, name, gender, phone, mail, region }).then((res) => {
      const result = res.data.data;
      dispatch(ERsuccesssend(result));
    }).catch(() => {
      alert('ERsendinfo fail')
    });
  }
}

const EDsuccesssend = (result) => ({
  type: constants.EDSEND,
  value: result
})

export const employeedelete = (eid, name) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { eid, name }).then((res) => {
      const result = res.data.data;
      dispatch(EDsuccesssend(result));
    }).catch(() => {
      alert('EDsendinfo fail')
    });
  }
}

const ESsuccesssend = (result) => ({
  type: constants.ESSEND,
  value: result
})

export const employeeretrieve = (eid, name, pid, region) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/Ainfo.json', { eid, name, pid, region }).then((res) => {
      const result = res.data.data;
      dispatch(ESsuccesssend(result));
    }).catch(() => {
      alert('ESsendinfo fail')
    });
  }
}