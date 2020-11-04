import Vue from 'vue'
import App from './components/App';


/* Pluggins and components */
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from "./store";
import routes from './router'

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import Elucidate from 'vue-elucidate'
Vue.use(Elucidate)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

var axios = require('./pluggins/axios');
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
Vue.component('fa', FontAwesomeIcon);

Vue.component('navigation', require('./components/Navigation.vue').default);

// Config production state
Vue.config.productionTip = false;

const app = new Vue({
	el: '#app',
	store,
	router: new VueRouter(routes),
	...App
})
