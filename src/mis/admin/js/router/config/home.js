/**
 * @description home模块路由配置
 */

import Home from 'mis@comp/pages/home';

export default {
    path: '/home',
    component: Home.Layout,
    children: [{
        path: '',
        name: 'home',
        meta: {
            title: 'spa单页首页'
        },
        component: () =>
            import (
                /* webpackChunkName: "home-index-component" */
                '../../components/pages/home/index.vue'
            )
    }]
}