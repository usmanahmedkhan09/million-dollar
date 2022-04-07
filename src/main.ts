import { createApp } from 'vue'
import App from './App.vue'
import AppModal from './components/TheModal.vue'
import '../public/css/index.scss'
import router from './router'
import { createPinia } from 'pinia'



createApp(App).use(createPinia()).use(router).component('app-modal', AppModal).mount('#app')
