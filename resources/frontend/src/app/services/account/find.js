import Vue from 'vue';
import accountTransformer from './../../transformers/account';
import store from './../../store';
import { fetchAccount } from './../../store/modules/account/actions';
import { addNotification } from './../../store/modules/notification/actions';

const success = ({ data }) => {
  const account = accountTransformer.fetch(data);

  fetchAccount(store, account);
};

const failed = () => {
  addNotification(store, {
    type: 'danger',
    message: 'Fetching account failed!',
  });
};

export default () => {
  Vue.http
    .get('account')
    .then(success, failed);
};
