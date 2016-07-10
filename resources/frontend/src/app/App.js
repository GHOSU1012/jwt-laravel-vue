import store from './store';
import { receiveAccount } from './store/modules/account/actions';

export default {
  /**
   * The store
   */
  store,

  /**
   * Vuex
   */
  vuex: {
    getters: {
      authenticated: ({ auth }) => auth.authenticated,
    },
    actions: {
      receiveAccount,
    },
  },

  /**
   * Fires when the component is created
   */
  ready() {
    if (this.authenticated) {
      this.receiveAccount();
    }
  },
};
