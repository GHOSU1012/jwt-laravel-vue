/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application
 */


/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 */
import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';


/* ============
 * Vue Resource
 * ============
 *
 * The plugin for Vue.js provides services for making web requests and handle
 * responses using a XMLHttpRequest or JSONP.
 */
import VueResource from 'vue-resource';
import authService from './app/services/auth';
Vue.use(VueResource);

Vue.http.headers.common.Accept = 'application/json';
Vue.http.options.root = process.env.API_LOCATION;
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // If the token is invalid
    if (response.status === 401) {
      authService.logout();
    }
  });
});


/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex Store in sync.
 */
import VuexRouterSync from 'vuex-router-sync';
import Store from './app/store';
Store.dispatch('CHECK_AUTHENTICATION');


/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 */
import VueRouter from 'vue-router';
import { routes, redirects } from './app/routes';
Vue.use(VueRouter);

const Router = new VueRouter({
  hashbang: false,
});
Router.map(routes);
Router.redirect(redirects);
Router.beforeEach((transition) => {
  /*
   * If the user is not authenticated and goes to
   * an authenticated page, redirect to the login page
   */
  if (transition.to.auth && !Store.state.auth.authenticated) {
    transition.redirect({
      name: 'login.index',
    });
  }

  /*
   * If the user is authenticated and goes to
   * an guest page, redirect to the dashboard page
   */
  if (transition.to.guest && Store.state.auth.authenticated) {
    transition.redirect({
      name: 'account.show',
    });
  }

  transition.next();
});
VuexRouterSync.sync(Store, Router);

window.router = Router;


/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 */
import jQuery from './assets/vendor/jquery/dist/jquery';
window.$ = window.jQuery = jQuery;


/* ============
 * Bootstrap
 * ============
 *
 * Require bootstrap for the app
 */
require('./assets/vendor/bootstrap/less/bootstrap.less');
require('./assets/vendor/bootstrap/dist/js/bootstrap');


/* ============
 * Styling
 * ============
 *
 * Require the application styling
 */
require('./assets/stylus/app.styl');


/* ============
 * Exports
 * ============
 *
 * Exports the router
 */
export {
  Router,
};
