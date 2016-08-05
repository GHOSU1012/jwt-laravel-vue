import Vue from 'vue';
import accountService from './../account';
import postService from './../post';
import store from './../../store';
import { addNotification } from './../../store/modules/notification/actions';
import { login } from './../../store/modules/auth/actions';

const success = ({ data }) => {
  login(store, data.token);
  postService.all();
  accountService.find();
  addNotification(store, {
    type: 'success',
    message: 'Login successful!',
  });
  window.router.go({
    name: 'post.index',
  });
};

const failed = () => {
  addNotification(store, {
    type: 'danger',
    message: 'Login failed!',
  });
};

export default (user) => {
  Vue.http
    .post('auth', user)
    .then(success, failed);
};
