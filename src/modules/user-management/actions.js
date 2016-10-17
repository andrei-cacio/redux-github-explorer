import { AUTHENTICATED, AUTHENTICATE_FAILED, AUTHENTICATING } from './action-types';
import { API, HTTP_CODES } from '../core/constants';

const requestAuthenticate = (isAuthenticating) => ({ type: AUTHENTICATING, isAuthenticating });
const authenticateDone = (info) => ({ type: AUTHENTICATED, info });
const authenticateFailed = (reason) => ({ type: AUTHENTICATE_FAILED, reason });

export const authenticate = dispatch => (user, pass) => {
  const credentials = btoa(user + ':' + pass);

  dispatch(requestAuthenticate(true));
    fetch(API.GITHUB.auth, {
      headers: {
        'Authorization': 'Basic ' + credentials
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(HTTP_CODES[res.status]);
      }
      else {
        return res.json();
      }
    })
    .then(res => dispatch(authenticateDone(res)),
      err => dispatch(authenticateFailed(err.message));
}
}
