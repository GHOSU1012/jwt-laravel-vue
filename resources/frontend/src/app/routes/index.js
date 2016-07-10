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
      require(['./../views/Account/Show/Show.vue'], resolve);
    },
    auth: true,
  },

  // Dashboard routes
  '/login': {
    name: 'login.index',
    component(resolve) {
      require(['./../views/Login/Index/Index.vue'], resolve);
    },
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
