// Import node modules
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';

// Application specific
import auth from './modules/auth';
import account from './modules/account';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * The modules used in the store
   */
  modules: {
    auth,
    account,
    notification,
  },

  /**
   * If strict mode should be used
   */
  strict: process.env.NODE_ENV !== 'production',

  /**
   * The middlewares
   */
  middlewares: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
