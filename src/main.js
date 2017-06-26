import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);

import pageUpload from './pages/Upload.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/upload',
      component: pageUpload
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
