/* ============
 * Post Index Page
 * ============
 */

import loader from './../../../utils/loader';
import postService from './../../../services/post';

export default {
  vuex: {
    getters: {
      posts: ({ post }) => post.all,
      pagination: ({ post }) => post.pagination,
    },
  },

  computed: {
    limit: {
      get() {
        return this.pagination.limit;
      },
      set(val) {
        postService.all(1, val);
      },
    },
  },

  methods: {
    all(page, limit) {
      return postService.all(page, limit);
    },
    destroy(id) {
      return postService.destroy(id);
    },
  },

  components: {
    VLayout: loader.layout('default'),
    VPagination: loader.component('pagination'),
  },
};
