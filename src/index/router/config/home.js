/**
 * @description home模块路由配置
 */

import Home from '../../views/home/';

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
                '../../views/home/index.vue'
            )
    }]
}