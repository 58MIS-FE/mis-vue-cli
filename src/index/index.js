import Vue from 'vue';
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App';
// 使用elementUI
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});