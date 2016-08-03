import Vue from 'vue';
import store from './../store';
import PostTransformer from './../transformers/post';
import PaginationTransformer from './../transformers/pagination';
import { testPosts } from './../store/modules/post/actions';


export default {
  all(page = 1, limit = 5) {
    Vue.http.get(`posts?page=${page}&limit=${limit}`)
      .then(
        ({ data }) => {
          testPosts(store,
            PostTransformer.fetchCollection(data.data),
            PaginationTransformer.fetch(data.pagination)
          );
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
