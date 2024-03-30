import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './Disease.vue'
 
const app = createApp(App);
app.use(ElementPlus)
app.mount('#app-disease')