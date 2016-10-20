import { RECEIVE_REPOS } from './action-types';

const initialState = {
  all: [],
  search: {
    query: '',
    results: []
  }
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REPOS: return { ...state, all: action.repos };
    default: return state;
  }
}

export default { repos };
