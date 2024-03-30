import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './Herb.vue'


const app = createApp(App);

app.use(ElementPlus);

app.mount('#app-herb');
