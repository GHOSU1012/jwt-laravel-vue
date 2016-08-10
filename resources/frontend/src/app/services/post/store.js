import Vue from 'vue';
import allPosts from './all';
import store from './../../store';
import { addNotification } from './../../store/modules/notification/actions';

const success = () => {
  allPosts();
  addNotification(store, {
    type: 'success',
    message: 'The post has been created!',
  });
  window.router.go({
    name: 'post.index',
  });
};

const failed = () => {
  addNotification(store, {
    type: 'danger',
    message: 'Saving post failed!',
  });
};

export default (post) => {
  Vue.http
    .post('posts', post)
    .then(success, failed);
};
