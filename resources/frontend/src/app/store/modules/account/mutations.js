import {
  RECEIVE_ACCOUNT,
} from './mutation-types';

export const mutations = {
  [RECEIVE_ACCOUNT](state, account) {
    state.id = account.id;
    state.email = account.email;
    state.name = account.name;
  },
};
