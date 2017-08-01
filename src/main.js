import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);

import pageUpload from './pages/Upload.vue';
import pageReg from './pages/Reg.vue';


const router = new VueRouter({
  routes: [
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
  render: h => h(App)
});
