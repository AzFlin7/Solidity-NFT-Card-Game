/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'landing.index',
    component: () => import('@/views/Landing/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
