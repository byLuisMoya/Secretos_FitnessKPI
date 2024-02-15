// import './bootstrap';
// import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Inicio from './Pages/Inicio.vue';
import Secretos from './Pages/Secretos.vue';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        if (name === 'Inicio') {
            return Inicio;
        }
        if (name === 'Secretos') {
            return Secretos;
        }
        return resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'));
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});


// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
//     setup({ el, App, props, plugin }) {
//         return createApp({ render: () => h(App, props) })
//             .use(plugin)
//             .use(ZiggyVue)
//             .mount(el);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });

// import { createApp } from 'vue';
// import * as VueRouter from 'vue-router';

// import App from './App.vue';
// import Inicio from './Components/Inicio.vue';
// import Secretos from './Components/Secretos.vue';
// import Login from './Pages/Auth/Login.vue';
// import Registro from './Pages/Auth/Register.vue';

// const routes = [
//     { path: '/', component: Inicio },
//     { path: '/secretos', component: Secretos },
//     { path: '/login', component: Login },
//     { path: '/register', component: Registro },
// ];

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHistory(),
//     routes,
// });

// createApp(App).use(router).mount('#app');
