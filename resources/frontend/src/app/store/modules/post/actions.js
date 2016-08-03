import * as types from './mutation-types';

export const fetchPosts = ({ dispatch }, posts, pagination) => {
  dispatch(types.FETCH_POSTS, posts, pagination);
};

export const clearPost = ({ dispatch }) => {
  dispatch(types.CLEAR_POST);
};
