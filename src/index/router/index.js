import Vue from 'vue';
import VueRouter from 'vue-router';

import table1 from '@/index/views/table/index1.vue'
import table2 from '@/index/views/table/index2.vue'
import table3 from '@/index/views/table/index3.vue'
import form1 from '@/index/views/form/index1.vue'
import form2 from '@/index/views/form/index2.vue'
import form3 from '@/index/views/form/index3.vue'
import details1 from '@/index/views/details/index1.vue'
import details2 from '@/index/views/details/index2.vue'
import basicComponents from '@/index/views/basicComponents/index1.vue'


import Home from '@/index/views/home/index.vue'
// import Index from '@/index/views/index/index.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/index',
        component: Home
    },
    {
        path: '/',
        component: Home,
        children: [
            { path: '/basicComponents', component: basicComponents },   
            { path: '/table1', component: table1 },           
            { path: '/table2', component: table2 },           
            { path: '/table3', component: table3 },           
            { path: '/form1', component: form1 },           
            { path: '/form2', component: form2 },           
            { path: '/form3', component: form3 },  
            { path: '/details1', component: details1 },           
            { path: '/details2', component: details2 },           
         
        ]
    }
];

const router = new VueRouter({
    routes
});

//可做埋点统计
router.beforeEach((route, from, next) => {
    let { meta } = route;
    meta.title && (window.document.title = meta.title);
    next();
});

router.afterEach((to, from) => {
    //pv 统计
});
export default router;