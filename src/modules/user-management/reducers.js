import { combineReducers } from 'redux';
import { AUTHENTICATED, AUTHENTICATING, AUTHENTICATE_FAILED } from './action-types';

const initialState = {
  isTalkingToServer: false,
  info: {}
}

const userInformation = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED: return { ...state, info: action.info, isTalkingToServer: false };
    case AUTHENTICATING: return { ...state, isTalkingToServer: action.isTalkingToServer, reason: '' };
    case AUTHENTICATE_FAILED: return { ...state, reason: action.reason, isTalkingToServer: false };
    default: return {}
  }
}

const rootReducer = combineReducers({ userInformation });

export default rootReducer;
