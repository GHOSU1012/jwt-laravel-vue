/* ============
 * Account Show Page
 * ============
 */

import loader from './../../../utils/loader';

export default {
  vuex: {
    getters: {
      account: ({ account }) => account,
    },
  },

  components: {
    VLayout: loader.layout('default'),
  },
};
