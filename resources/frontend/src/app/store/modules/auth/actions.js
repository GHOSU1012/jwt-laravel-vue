import Vue from 'vue';
import * as types from './mutation-types';
import { receiveAccount } from './../account/actions';

export const login = ({ dispatch }, user) => {
  Vue.http.post('auth', user)
    .then(
      ({ data }) => {
        dispatch(types.LOGIN_SUCCESSFUL, data.token);
        receiveAccount({ dispatch });
        Vue.router.go({
          name: 'account.show',
        });
      },
      ({ data }) => {
        console.log(data);
      }
    );
};

export const logout = ({ dispatch }) => {
  dispatch(types.LOGOUT);
  Vue.router.go({
    name: 'login.index',
  });
};

export const checkAuthentication = ({ dispatch }) => {
  dispatch(types.CHECK_AUTHENTICATION);
};
