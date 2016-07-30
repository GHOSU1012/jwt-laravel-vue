/* ============
 * Post Create Page
 * ============
 */

import { storePost } from './../../../store/modules/post/actions';
import loader from './../../../utils/loader';

export default {
  /**
   * The Vuex data
   */
  vuex: {
    actions: {
      storePost,
    },
  },

  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },

  components: {
    VLayout: loader.layout('default'),
  },
};
