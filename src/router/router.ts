const routes = [
    {
        name: 'index',
        path: '/index',
        component: () => import('@/view/index.vue')
    },
    {
        name: 'info',
        path: '/info',
        component: () => import('@/view/info.vue')
    },
    
];
 
export default routes