import Vue from 'vue';
import accountService from './account';
import postService from './post';
import store from './../store';
import { addNotification } from './../store/modules/notification/actions';
import {
  login as storeLogin,
  logout as storeLogout,
} from './../store/modules/auth/actions';
import { clearAccount } from './../store/modules/account/actions';
import { clearPost } from './../store/modules/post/actions';

export default {
  login(user) {
    Vue.http.post('auth', user)
      .then(
        ({ data }) => {
          storeLogin(store, data.token);
          postService.all();
          accountService.all();
          addNotification(store, {
            type: 'success',
            message: 'Login successful!',
          });
          window.router.go({
            name: 'post.index',
          });
        },
        () => {
          addNotification(store, {
            type: 'danger',
            message: 'Login failed!',
          });
        }
      );
  },
  logout() {
    storeLogout(store);
    clearAccount(store);
    clearPost(store);
    addNotification(store, {
      type: 'success',
      message: 'Logout successful!',
    });
    window.router.go({
      name: 'login.index',
    });
  },
};
