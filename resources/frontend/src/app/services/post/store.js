import Vue from 'vue';
import { addPost } from './../../store/modules/post/actions';
import store from './../../store';
import { addNotification } from './../../store/modules/notification/actions';

const success = (post) => {
  addPost(store, post);
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
    .then(success(post), failed);
};
