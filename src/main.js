import App from './App.vue';
import ElementUI from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'

Vue.use(VueRouter);
Vue.use(ElementUI);

import layoutPanel from './layout/Panel.vue';
import pageEvent from './pages/Event.vue';
import pageLogin from './pages/Login.vue';
import pageUpload from './pages/Upload.vue';
import pageReg from './pages/Reg.vue';


const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: pageLogin
    },
    {
      path: '/panel',
      component: layoutPanel,
      children: [
        {
          path: '/panel/event',
          component: pageEvent
        }
      ]
    },
    {
      path: '/upload',
      component: pageUpload
    },
    {
      path: '/reg',
      component: pageReg
    }
  ]
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
