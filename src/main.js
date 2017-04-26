// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import Axios from 'axios';
import Vuex from 'vuex';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(Vuex);
Vue.prototype.$ajax = Axios;
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    detailName: {}
  },
  mutations: {
    changeDetail(state, detail) {
      state.detailName = detail;
    }
  }
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
});
