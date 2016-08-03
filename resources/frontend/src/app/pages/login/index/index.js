/* ============
 * Login Index Page
 * ============
 */

import authService from './../../../services/auth';
import loader from './../../../utils/loader';

export default {

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },

  methods: {
    login() {
      authService.login(this.user);
    },
  },

  components: {
    VLayout: loader.layout('minimal'),
  },
};
