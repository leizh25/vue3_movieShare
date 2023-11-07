import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
//引入重置样式表
import 'reset-css';
//公共样式
import '@/style/public.scss';
//饿了么变量
import 'element-plus/theme-chalk/dark/css-vars.css';

//引入图标
import globalComponent from '@/components/index';
createApp(App)
  .use(createPinia())
  .use(router)
  .use(globalComponent)
  .mount('#app');
