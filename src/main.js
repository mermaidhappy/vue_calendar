import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//引入全局所需的css文件
import '@/assets/css/resets.css';
import '@/assets/css/border.css';
//引入静态js文件
import '@/assets/js/common';
import '@/assets/css/common.scss';

createApp(App).use(store).use(router).mount('#app');
