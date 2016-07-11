import Vue from 'vue';
import * as types from './mutation-types';
import { receiveAccount, clearAccount } from './../account/actions';
import { addNotification } from './../notification/actions';

export const login = ({ dispatch }, user) => {
  Vue.http.post('auth', user)
    .then(
      ({ data }) => {
        dispatch(types.LOGIN_SUCCESSFUL, data.token);
        receiveAccount({ dispatch });
        addNotification({ dispatch }, {
          type: 'success',
          message: 'Login successful!',
        });
        Vue.router.go({
          name: 'account.show',
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
  addNotification({ dispatch }, {
    type: 'success',
    message: 'Logout successful!',
  });
  Vue.router.go({
    name: 'login.index',
  });
};

export const checkAuthentication = ({ dispatch }) => {
  dispatch(types.CHECK_AUTHENTICATION);
};
