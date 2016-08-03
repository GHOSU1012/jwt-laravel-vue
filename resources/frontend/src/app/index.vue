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
   * The entry point of the application
   */

  import store from './store';
  import { deleteNotification } from './store/modules/notification/actions';
  import loader from './utils/loader';
  import postService from './services/post';
  import accountService from './services/account';

  export default {
    /**
     * The store
     */
    store,

    /**
     * The Vuex store
     */
    vuex: {
      getters: {
        authenticated: ({ auth }) => auth.authenticated,
        notifications: ({ notification }) => notification.all,
      },
      actions: {
        deleteNotification,
      },
    },

    /**
     * Fires when the app is loaded
     */
    ready() {
      // If the user is authenticated,
      // fetch the data from the API
      if (this.authenticated) {
        postService.all();
        accountService.all();
      }
    },

    /**
     * Components being used
     */
    components: {
      alert: loader.component('alert'),
    },
  };
</script>
