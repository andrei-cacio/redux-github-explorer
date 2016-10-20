import { AUTHENTICATED, AUTHENTICATING, AUTHENTICATE_FAILED } from './action-types';

const initialState = {
  isTalkingToServer: false,
  isLoggedIn: false,
  info: {}
}

const userInformation = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED: return { ...state, info: action.info, isTalkingToServer: false, isLoggedIn: true };
    case AUTHENTICATING: return { ...state, isTalkingToServer: action.isTalkingToServer, reason: '' };
    case AUTHENTICATE_FAILED: return { ...state, reason: action.reason, isTalkingToServer: false };
    default: return state
  }
}

export default { userInformation };
