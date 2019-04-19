import Vue from 'vue';
import VueRouter from 'vue-router';
import Upload1 from '@/index/components/upload/upload1.vue'
import Upload2 from '@/index/components/upload/upload2.vue'
import Upload3 from '@/index/components/upload/upload3.vue'
import Table1 from '@/index/components/table/table1.vue'
import Table2 from '@/index/components/table/table2.vue'
import Tabs1 from '@/index/components/tabs/tabs1.vue'
import Tabs2 from '@/index/components/tabs/tabs2.vue'
import Form1 from '@/index/components/form/form1.vue'
import Form2 from '@/index/components/form/form2.vue'
import Form3 from '@/index/components/form/form3.vue'
import HomePage from '@/index/components/homepage/homePage.vue'
Vue.use(VueRouter);



const routes = [{
        path: '*',
        redirect: '/homepage',
        component: Upload1
    },
    {
        path: '/home',
        component: resolve => require(['../views/home/index.vue'],resolve),
        children: [
            { path: '/homepage', component: HomePage },
            { path: '/upload1', component: Upload1 },
            { path: '/upload2', component: Upload2},
            { path: '/upload3', component: Upload3},
            { path: '/table1', component: Table1},
            { path: '/table2', component: Table2},
            { path: '/tabs1', component: Tabs1},
            { path: '/tabs2', component: Tabs2},
            { path: '/form1', component: Form1},
            { path: '/form2', component: Form2},
            { path: '/form3', component: Form3},
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