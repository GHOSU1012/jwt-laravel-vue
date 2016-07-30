/* ============
 * Post Index Page
 * ============
 */

import loader from './../../../utils/loader';
import { fetchPosts } from './../../../store/modules/post/actions';

export default {

  vuex: {
    getters: {
      posts: ({ post }) => post.all,
      pagination: ({ post }) => post.pagination,
    },
    actions: {
      fetchPosts,
    },
  },

  computed: {
    limit: {
      get() {
        return this.pagination.limit;
      },
      set(val) {
        this.fetchPosts(1, val);
      },
    },
  },

  components: {
    VLayout: loader.layout('default'),
    VPagination: loader.component('pagination'),
  },
};
