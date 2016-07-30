<template>
  <div>
    <router-view></router-view>
    <div
      class="notification-wrapper"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-3 pull-right">
            <alert
              v-for="notification in notifications"
              :style="notification.type"
              :message="notification.message"
              :id="notification.id"
              :close-function="deleteNotification"
            ></alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point for the application
   */

  import store from './store';
  import { receiveAccount } from './store/modules/account/actions';
  import { deleteNotification } from './store/modules/notification/actions';

  export default {
    /*
     * The store
     *
     * Vuex is being used for a single point of truth
     */
    store,

    /*
     * Vuex
     *
     * The Vuex store
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

    ready() {
      // If the user is authenticated,
      // fetch the data from the API
      if (this.authenticated) {
        this.receiveAccount();
      }
    },

    components: {
      alert(resolve) {
        require(['./components/alert/alert.vue'], resolve);
      },
    },
  };
</script>
