import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./global.less";
import CustomPlugin from "@/utils/_globalMethod";

Vue.config.productionTip = false
Vue.use(CustomPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
