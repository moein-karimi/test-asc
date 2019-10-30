import { combineReducers } from 'redux';

import listReducer from './list/list.reducer';
import loginReducer from './login/login.reducer';

export default combineReducers({
  list: listReducer,
  login: loginReducer
});
