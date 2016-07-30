import Vue from 'vue';
import * as types from './mutation-types';

export const fetchPosts = ({ dispatch }, page = 1, limit = 5) => {
  Vue.http.get(`posts?page=${page}&limit=${limit}`)
    .then(
      ({ data }) => {
        dispatch(types.FETCH_POSTS, data.data, data.pagination);
      }
    );
};

export const clearPost = ({ dispatch }) => {
  dispatch(types.CLEAR_POST);
};
