import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App';
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

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
Vue.component('fa', FontAwesomeIcon);

Vue.component('navigation', require('./components/Navigation.vue').default);

const app = new Vue({
	el: '#app',
	store,
	router: new VueRouter(routes),
	...App
})
