import Vue from 'vue';
import * as types from './mutation-types';
import { addNotification } from './../notification/actions';

export const testPosts = ({ dispatch }, data, pagination) => {
  dispatch(types.FETCH_POSTS, data, pagination);
};

export const fetchPosts = ({ dispatch }, page = 1, limit = 5) => {
  Vue.http.get(`posts?page=${page}&limit=${limit}`)
    .then(
      ({ data }) => {
        dispatch(types.FETCH_POSTS, data.data, data.pagination);
      }
    );
};

export const storePost = ({ dispatch }, post) => {
  Vue.http.post('posts', post)
    .then(
      () => {
        fetchPosts({ dispatch });
        addNotification({ dispatch }, {
          type: 'success',
          message: 'The post has been created!',
        });
        window.router.go({
          name: 'post.index',
        });
      },

      () => {
        addNotification({ dispatch }, {
          type: 'danger',
          message: 'Saving post failed!',
        });
      }
    );
};

export const deletePost = ({ dispatch }, id) => {
  Vue.http.delete(`posts/${id}`)
    .then(
      () => {
        fetchPosts({ dispatch });
        addNotification({ dispatch }, {
          type: 'success',
          message: 'The post has been deleted!',
        });
        window.router.go({
          name: 'post.index',
        });
      },

      () => {
        addNotification({ dispatch }, {
          type: 'danger',
          message: 'Deleting post failed!',
        });
      }
    );
};

export const clearPost = ({ dispatch }) => {
  dispatch(types.CLEAR_POST);
};
