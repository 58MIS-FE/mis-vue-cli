

import Vue from 'vue';
import router from './router';
import app from 'mis@comp/app';

new Vue({
    router,
    ...app
}).$mount('#app');
