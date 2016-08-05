import Vue from 'vue';
import allPosts from './all';
import store from './../../store';
import { addNotification } from './../../store/modules/notification/actions';

const success = () => {
  allPosts();
  addNotification(store, {
    type: 'success',
    message: 'The post has been deleted!',
  });
  window.router.go({
    name: 'post.index',
  });
};

const failed = () => {
  addNotification(store, {
    type: 'danger',
    message: 'Deleting post failed!',
  });
};

export default (id) => {
  Vue.http
    .delete(`posts/${id}`)
    .then(success, failed);
};
