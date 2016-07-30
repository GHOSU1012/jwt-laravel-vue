import Vue from 'vue';
import * as types from './mutation-types';

export const fetchAccount = ({ dispatch }) => {
  Vue.http.get('account')
    .then(({ data }) => {
      dispatch(types.FETCH_ACCOUNT, data);
    });
};

export const clearAccount = ({ dispatch }) => {
  dispatch(types.CLEAR_ACCOUNT);
};
