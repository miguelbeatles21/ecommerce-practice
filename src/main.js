import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vue3Toastify, {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './core/router/index.js'

const app = createApp(App)
const pinia = createPinia()

app.use(Vue3Toastify, {
    autoClose: 3000,
  });
app.use(router)
app.use(pinia)
app.config.globalProperties.$toast = toast;
app.mount('#app')