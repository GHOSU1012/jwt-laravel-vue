import {
  FETCH_ACCOUNT,
  CLEAR_ACCOUNT,
} from './mutation-types';
import { state as baseState } from './state';

export const mutations = {
  [FETCH_ACCOUNT](state, account) {
    state.id = account.id;
    state.email = account.email;
    state.name = account.name;
  },

  [CLEAR_ACCOUNT](state) {
    state.id = baseState.id;
    state.email = baseState.email;
    state.name = baseState.name;
  },
};
