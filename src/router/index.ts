import {createRouter, createWebHistory} from 'vue-router'
import layout from '../layout/index.vue'
const routes = [
    {   
        path: '/',
        name: '/',
        // component:layout,
        redirect: '/index',
        children: [  
        {
            name: 'index',
            path: '/index',
            title: '首页',
            component: () => import('../views/index.vue')
        },
        {
            name: 'info',
            path: '/info',
            title: '详情',
            component: () => import('../views/info.vue')
        },
        ]
    },
    
    
    
];
const router = createRouter({
    history: createWebHistory(), 
    routes
})
 
export default router