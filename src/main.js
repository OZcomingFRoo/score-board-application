import { createApp } from 'vue'
import "./registerServiceWorker";
import App from './App.vue'
import router from './router'
import store from './store'
import('@/assets/w3.css');
import('@/assets/main.css');


createApp(App).use(store).use(router).mount('#app')
