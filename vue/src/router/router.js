
export default {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import(/* webpackChunkName: "main" */ '../views/index.vue'),
      children:[
        {
          path: "/login.html",
          meta: {
            title: "登录",
            notLogin:true,
          },
          component: () => import(/* webpackChunkName: "LoginModule" */ '../views/home')
        },
      ]
    },
    
  ]
}
