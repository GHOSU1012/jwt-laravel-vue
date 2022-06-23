/* ============
 * Account Show Page
 * ============
 */

import * as VLayout from './../../../layouts/Default/Default.vue';

export default {
  vuex: {
    getters: {
      account: ({ account }) => account,
    },
  },

  components: {
    VLayout,
  },
};
