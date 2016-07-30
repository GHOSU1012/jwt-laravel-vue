/* ============
 * Login Index Page
 * ============
 */

import { login } from './../../../store/modules/auth/actions';
import loader from './../../../utils/loader';

export default {
  /**
   * The Vuex data
   */
  vuex: {
    actions: {
      login,
    },
  },

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },

  components: {
    VLayout: loader.layout('minimal'),
  },
};
