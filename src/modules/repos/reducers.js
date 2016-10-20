import { RECEIVE_REPOS, SEARCHING } from './action-types';

const initialState = {
  all: [],
  query: '',
  results: []
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REPOS: return { ...state, all: action.repos };
    case SEARCHING: return { ...state, query: action.query, results: filterList(state.all, action.query) };
    default: return state;
  }
};

function filterList(list, query) {
  const nameRegex = new RegExp(query, 'g');
  return list.filter(repo => nameRegex.test(repo.name));
}

export default { repos };
