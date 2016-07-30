/* ============
 * Post Index Page
 * ============
 */

import loader from './../../../utils/loader';
import { fetchPosts } from './../../../store/modules/post/actions';

export default {
  data() {
    return {
      limit: this.pagination.limit,
    };
  },

  vuex: {
    getters: {
      posts: ({ post }) => post.all,
      pagination: ({ post }) => post.pagination,
    },
    actions: {
      fetchPosts,
    },
  },
  watch: {
    limit(newValue, oldValue) {
      if (newValue !== oldValue && newValue !== this.pagination.limit) {
        this.fetchPosts(1, newValue);
      }
    },
  },

  components: {
    VLayout: loader.layout('default'),
    VPagination: loader.component('pagination'),
  },
};
