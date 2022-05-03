import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(router).use(VueScrollTo).use(Toast).mount('#app')
