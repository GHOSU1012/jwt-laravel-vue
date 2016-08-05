import store from './../../store';
import { addNotification } from './../../store/modules/notification/actions';
import { logout } from './../../store/modules/auth/actions';
import { clearAccount } from './../../store/modules/account/actions';
import { clearPost } from './../../store/modules/post/actions';

export default () => {
  logout(store);
  clearAccount(store);
  clearPost(store);
  addNotification(store, {
    type: 'success',
    message: 'Logout successful!',
  });
  window.router.go({
    name: 'login.index',
  });
};
