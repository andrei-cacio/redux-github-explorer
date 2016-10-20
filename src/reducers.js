import { combineReducers } from 'redux';
import user from './modules/user-management/reducers';
import repos from './modules/repos/reducers';

export default combineReducers({
  userInformation: user.userInformation,
  repos: repos.repos
});
