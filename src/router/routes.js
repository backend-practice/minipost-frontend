const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/sign-up', component: () => import('pages/SignUp.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      {
        path: '/u/:id',
        component: () => import('pages/UserProfile.vue'),
        props: (route) => ({ id: parseInt(route.params.id) })
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
