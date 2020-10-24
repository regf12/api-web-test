import Home from '../views/Home.vue'
import Documentation from '../views/Documentation.vue'

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/documentation',
            name: 'documentation',
            component: Documentation,
        }
    ]
}
