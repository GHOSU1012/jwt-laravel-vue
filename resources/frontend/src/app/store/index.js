/* ============
 * The Vuex store
 * ============
 *
 * The store of the application
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import auth from './modules/auth';
import account from './modules/account';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  /*
   * Assign the modules to the store
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

  /*
   * Middleware for Vuex
   */
  middlewares: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
