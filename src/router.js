import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import UserList from './views/UserList.vue';
import Login from './views/Login.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user-list',
        name: 'user-list',
        component: UserList,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const isUserLoggedIn = () => {
    return localStorage.getItem('userLoggedIn') === 'true';
}

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(!isUserLoggedIn()){
            next({name: 'login'})
        }else{
            next();
        }
    }else{
        next();
    }
})

export default router;