import store from './store';
import { receiveAccount } from './store/modules/account/actions';
import { deleteNotification } from './store/modules/notification/actions';

export default {
  /**
   * The store
   */
  store,

  /**
   * Vuex
   */
  vuex: {
    getters: {
      authenticated: ({ auth }) => auth.authenticated,
      notifications: ({ notification }) => notification.all,
    },
    actions: {
      receiveAccount,
      deleteNotification,
    },
  },

  /**
   * Fires when the component is created
   */
  ready() {
    if (this.authenticated) {
      this.receiveAccount();
    }
  },

  components: {
    notification(resolve) {
      require(['./components/Notification/Notification.vue'], resolve);
    },
  },
};
