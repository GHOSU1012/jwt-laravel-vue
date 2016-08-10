import { state as baseState } from './state';
import {
  FETCH_POSTS,
  CLEAR_POST,
  ADD_POST,
} from './../../mutation-types';

export const mutations = {
  [ADD_POST](state, post) {
    const onPage = state.pagination.currentPage === state.pagination.totalPages;

    if (onPage || state.pagination.totalCount === 0) {
      let newId = 1;

      if (state.all.length !== 0) {
        newId = state.all[state.all.length - 1].id + 1;
      }

      // Need to clone the post instead of editing the vm
      post.id = newId;
      state.all.push(post);
    }

    state.pagination.totalCount++;

    if (state.pagination.totalCount % state.pagination.limit === 1) {
      state.pagination.totalPages++;
    }
  },

  [FETCH_POSTS](state, posts, pagination) {
    state.all = posts;
    state.pagination = pagination;
  },

  [CLEAR_POST](state) {
    state.all = baseState.all;
    state.pagination = baseState.pagination;
  },
};
