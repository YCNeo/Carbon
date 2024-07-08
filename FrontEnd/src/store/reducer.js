import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homereducer } from '../pages/home/store';
import { reducer as detailreducer } from '../pages/detail/store';
import { reducer as loginreducer } from '../pages/login/store';
import { reducer as adminreducer } from '../pages/admin/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homereducer,
  detail: detailreducer,
  login: loginreducer,
  admin: adminreducer
})

export default reducer;