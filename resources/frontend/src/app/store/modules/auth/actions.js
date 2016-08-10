import * as types from './../../mutation-types';

export const login = ({ dispatch }, token) => {
  dispatch(types.LOGIN, token);
};

export const logout = ({ dispatch }) => {
  dispatch(types.LOGOUT);
};

export const checkAuthentication = ({ dispatch }) => {
  dispatch(types.CHECK_AUTHENTICATION);
};
