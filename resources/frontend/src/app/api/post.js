import Vue from 'vue';
import store from './../store';
import { fetchPosts } from './../store/modules/post/actions';
import postTransformer from './../transformers/post';
import paginationTransformer from './../transformers/pagination';

export default {
  all(page = 1, limit = 5) {
    Vue.http.get(`posts?page=${page}&limit=${limit}`)
      .then(
        ({ data }) => {
          const pagination = paginationTransformer.fetch(data.pagination);
          const posts = postTransformer.fetchCollection(data.data);

          fetchPosts(store, posts, pagination);
        }
      );
  },
  store(post) {
    Vue.http.post('posts', post);
  },
  show(id) {
    Vue.http.get(`posts/${id}`);
  },
  update(id, post) {
    Vue.http.put(`posts/${id}`, post);
  },
  destroy(id) {
    Vue.http.delete(`posts/${id}`);
  },
};
