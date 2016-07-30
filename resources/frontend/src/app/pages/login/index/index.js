/* ============
 * Login Index Page
 * ============
 */

import * as VLayout from './../../../layouts/Minimal/Minimal.vue';
import { login } from './../../../store/modules/auth/actions';

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
    VLayout,
  },
};
