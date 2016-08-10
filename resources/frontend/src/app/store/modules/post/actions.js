import * as types from './../../mutation-types';

export const fetchPosts = ({ dispatch }, posts, pagination) => {
  dispatch(types.FETCH_POSTS, posts, pagination);
};

export const clearPost = ({ dispatch }) => {
  dispatch(types.CLEAR_POST);
};

export const addPost = ({ dispatch }, post) => {
  dispatch(types.ADD_POST, post);
};
