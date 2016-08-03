import * as types from './mutation-types';

export const fetchAccount = ({ dispatch }, account) => {
  dispatch(types.FETCH_ACCOUNT, account);
};

export const clearAccount = ({ dispatch }) => {
  dispatch(types.CLEAR_ACCOUNT);
};
