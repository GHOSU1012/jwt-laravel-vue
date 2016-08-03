/* ============
 * Post Create Page
 * ============
 */

import postService from './../../../services/post';
import loader from './../../../utils/loader';

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },

  methods: {
    store() {
      postService.store(this.post);
    },
  },

  components: {
    VLayout: loader.layout('default'),
  },
};
