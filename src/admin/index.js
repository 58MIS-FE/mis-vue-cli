import Vue from 'vue';
import router from './router';
import app from './components/app';

new Vue({
    router,
    ...app
}).$mount('#app');