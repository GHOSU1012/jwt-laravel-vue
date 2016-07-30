import Vue from 'vue';
import * as types from './mutation-types';
import { fetchAccount, clearAccount } from './../account/actions';
import { fetchPosts, clearPost } from './../post/actions';
import { addNotification } from './../notification/actions';

export const login = ({ dispatch }, user) => {
  Vue.http.post('auth', user)
    .then(
      ({ data }) => {
        dispatch(types.LOGIN_SUCCESSFUL, data.token);
        fetchAccount({ dispatch });
        fetchPosts({ dispatch });
        addNotification({ dispatch }, {
          type: 'success',
          message: 'Login successful!',
        });
        window.router.go({
          name: 'post.index',
        });
      },
      () => {
        addNotification({ dispatch }, {
          type: 'danger',
          message: 'Login failed!',
        });
      }
    );
};

export const logout = ({ dispatch }) => {
  dispatch(types.LOGOUT);
  clearAccount({ dispatch });
  clearPost({ dispatch });
  addNotification({ dispatch }, {
    type: 'success',
    message: 'Logout successful!',
  });
  window.router.go({
    name: 'login.index',
  });
};

export const checkAuthentication = ({ dispatch }) => {
  dispatch(types.CHECK_AUTHENTICATION);
};
