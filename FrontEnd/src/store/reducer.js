import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as loginreducer } from '../pages/login/store';
import { reducer as adminreducer } from '../pages/admin/store';
import { reducer as statementreducer } from '../pages/statement/store';
import { reducer as projectmanagementreducer } from '../pages/projectmanagement/store';
import { reducer as ppereducer } from '../pages/ppe/store';
import { reducer as esgreducer } from '../pages/esg/store';

const reducer = combineReducers({
  header: headerReducer,
  login: loginreducer,
  admin: adminreducer,
  statement: statementreducer,
  projectmanagement: projectmanagementreducer,
  ppe: ppereducer,
  esg: esgreducer
})

export default reducer;