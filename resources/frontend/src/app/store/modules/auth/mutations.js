import Vue from 'vue';
import {
  LOGOUT,
  CHECK_AUTHENTICATION,
  LOGIN_SUCCESSFUL,
} from './mutation-types';

export const mutations = {
  [CHECK_AUTHENTICATION](state) {
    state.authenticated = !!localStorage.getItem('id_token');
    if (state.authenticated) {
      Vue.http.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
    }
  },

  [LOGIN_SUCCESSFUL](state, token) {
    state.authenticated = true;
    localStorage.setItem('id_token', token);
    Vue.http.headers.common.Authorization = `Bearer ${token}`;
  },

  [LOGOUT](state) {
    state.authenticated = false;
    localStorage.removeItem('id_token');
    Vue.http.headers.common.Authorization = null;
  },
};
