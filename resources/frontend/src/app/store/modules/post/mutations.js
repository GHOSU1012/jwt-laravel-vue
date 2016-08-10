import { state as baseState } from './state';
import {
  FETCH_POSTS,
  CLEAR_POST,
} from './../../mutation-types';

export const mutations = {
  [FETCH_POSTS](state, posts, pagination) {
    state.all = posts;
    state.pagination = pagination;
  },

  [CLEAR_POST](state) {
    state.all = baseState.all;
    state.pagination = baseState.pagination;
  },
};
