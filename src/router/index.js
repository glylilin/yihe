import Vue from 'vue';
import Router from 'vue-router';
import home from 'components/home/home';
import about from 'components/about/about';
import savelove from 'components/savelove/savelove';
import keeplove from 'components/keeplove/keeplove';
import division from 'components/division/division';
import assistance from 'components/assistance/assistance';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/savelove',
      name: 'savelove',
      component: savelove
    },
    {
      path: '/keeplove',
      name: 'keeplove',
      component: keeplove
    },
    {
      path: '/division',
      name: 'division',
      component: division
    },
    {
      path: '/assistance',
      name: 'assistance',
      component: assistance
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
});
