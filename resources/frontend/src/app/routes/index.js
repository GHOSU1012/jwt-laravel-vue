/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export const routes = {
  // Account Resource
  '/account': {
    name: 'account.show',
    component(resolve) {
      require(['./../pages/account/show/show.vue'], resolve);
    },

    // If the user needs to be authenticated to view this page
    auth: true,
  },

  // Dashboard routes
  '/login': {
    name: 'login.index',
    component(resolve) {
      require(['./../pages/login/index/index.vue'], resolve);
    },

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
