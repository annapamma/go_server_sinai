import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage'
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal';

import store from './src/store.js';

import App from './App.vue'
import GeneInput from "./components/GeneInput.vue";
import TheNetworkContainer from "./components/TheNetworkContainer.vue";


Vue.use(VueRouter);
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
});
Vue.use(VModal);
Vue.prototype.$cy = {}

const routes = [
    { path: '/', component: GeneInput },
    { path: '/network', component: TheNetworkContainer }
];

const router = new VueRouter({ routes });

const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});