import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './config';
import Log from '../../common/log';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((route, from, next) => {
    let { meta } = route;

    meta.title && (window.document.title = meta.title);
    next();
});

router.afterEach((to, from) => {
    //pv 统计
    Log.init(to.path)

})
export default router;