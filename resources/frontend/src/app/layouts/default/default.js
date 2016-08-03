/* ============
 * Default Layout
 * ============
 */

import authService from './../../services/auth';

export default {
  methods: {
    logout() {
      authService.logout();
    },
  },
};
