import { createApp } from 'vue';

import * as VueRouter from 'vue-router';

import App from '../src/App.vue';
import Inicio from '../src/components/Inicio.vue';
import Secretos from '../src/components/Secretos.vue';

const routes = [
    { path: '/', component: Inicio },
    { path: '/secretos', component: Secretos },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app');

