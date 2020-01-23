import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router.js'

Vue.use(Router)

const router = new Router(routerConfig)

router.beforeEach((to, from, next) => {
  next();
});
router.afterEach(to => {
  window.scrollTo(0, 0);
});

export default router;
