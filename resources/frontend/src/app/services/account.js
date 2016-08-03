import Vue from 'vue';
import accountTransformer from './../transformers/account';
import store from './../store';
import { fetchAccount } from './../store/modules/account/actions';
import { addNotification } from './../store/modules/notification/actions';

export default {
  all() {
    Vue.http.get('account')
      .then(
        ({ data }) => {
          const account = accountTransformer.fetch(data);

          fetchAccount(store, account);
        },

        () => {
          addNotification(store, {
            type: 'danger',
            message: 'Fetching account failed!',
          });
        }
      );
  },
};
