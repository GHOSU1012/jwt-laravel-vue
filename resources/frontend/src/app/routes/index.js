/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

import loader from './../utils/loader';

/**
 * The routes
 *
 * @type {object} The routes
 */
export const routes = {
  // Account Resource
  '/account': {
    name: 'account.show',
    component: loader.page('account', 'show'),

    // If the user needs to be authenticated to view this page
    auth: true,
  },

  // Account Resource
  '/post': {
    name: 'post.index',
    component: loader.page('post', 'index'),

    // If the user needs to be authenticated to view this page
    auth: true,
  },

  '/post/create': {
    name: 'post.create',
    component: loader.page('post', 'create'),

    // If the user needs to be authenticated to view this page
    auth: true,
  },

  // Dashboard routes
  '/login': {
    name: 'login.index',
    component: loader.page('login', 'index'),

    // If the user needs to be a guest to view this page
    guest: true,
  },
};

/**
 * The redirects
 *
 * @type {object} The redirects
 */
export const redirects = {
  '/': '/account',
};
