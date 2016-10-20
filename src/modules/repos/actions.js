import { API } from '../core/constants';
import { RECEIVE_REPOS } from './action-types';

const fetchedRepos = (repos) => ({ type: RECEIVE_REPOS, repos });

export const fetchRepos = () => (dispatch, getState) => {
  const { username } = getState().userInformation.info;
  fetch(API.GITHUB.repos(username))
    .then(res => res.json())
    .then(res => dispatch(fetchedRepos(res)));
}
