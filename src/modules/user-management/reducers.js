import { combineReducers } from 'redux';
import { AUTHENTICATED } from './action-types';

const userInformation = (state = {}, action) => {
  switch(action.type) {
    case AUTHENTICATED: return Object.assign({}, action.info);
    default: return {}
  }
}

const rootReducer = combineReducers({ userInformation });

export default rootReducer;
