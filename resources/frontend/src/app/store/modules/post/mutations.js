import customerTransformer from './../../../transformers/post';
import paginationTransformer from './../../../transformers/pagination';
import { state as baseState } from './state';
import {
  FETCH_POSTS,
  CLEAR_POST,
} from './mutation-types';

export const mutations = {
  [FETCH_POSTS](state, customers, pagination) {
    state.all = customerTransformer.fetchCollection(customers);
    state.pagination = paginationTransformer.fetch(pagination);
  },

  [CLEAR_POST](state) {
    state.all = baseState.all;
    state.pagination = baseState.pagination;
  },
};
