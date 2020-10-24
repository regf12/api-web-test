import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App';
Vue.use(VueRouter)

import store from "./store";
import routes from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.component('navigation', require('./components/Navigation.vue').default);

const app = new Vue({
	el: '#app',
	store,
	router: new VueRouter(routes),
	...App
})
