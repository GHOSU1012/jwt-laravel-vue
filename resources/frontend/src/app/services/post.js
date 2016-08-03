import Vue from 'vue';
import store from './../store';
import { fetchPosts } from './../store/modules/post/actions';
import { addNotification } from './../store/modules/notification/actions';
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
        },

        () => {
          addNotification(store, {
            type: 'danger',
            message: 'Fetching posts failed!',
          });
        }
      );
  },
  show(id) {
    Vue.http.get(`posts/${id}`);
  },
  store(post) {
    const self = this;

    Vue.http.post('posts', post)
      .then(
        () => {
          self.all();
          addNotification(store, {
            type: 'success',
            message: 'The post has been created!',
          });
          window.router.go({
            name: 'post.index',
          });
        },

        () => {
          addNotification(store, {
            type: 'danger',
            message: 'Saving post failed!',
          });
        }
      );
  },
  update(id, post) {
    Vue.http.put(`posts/${id}`, post);
  },
  destroy(id) {
    const self = this;

    Vue.http.delete(`posts/${id}`)
      .then(
        () => {
          self.all();
          addNotification(store, {
            type: 'success',
            message: 'The post has been deleted!',
          });
          window.router.go({
            name: 'post.index',
          });
        },

        () => {
          addNotification(store, {
            type: 'danger',
            message: 'Deleting post failed!',
          });
        }
      );
  },
};
