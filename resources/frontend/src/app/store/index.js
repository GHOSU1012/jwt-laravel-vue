/* ============
 * Vuex Store
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
import post from './modules/post';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: {
    auth,
    account,
    notification,
    post,
  },

  /**
   * If strict mode should be used
   */
  strict: process.env.NODE_ENV !== 'production',

  /**
   * Plugins for Vuex
   */
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
