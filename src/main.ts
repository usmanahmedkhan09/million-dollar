import { createApp } from 'vue'
import App from './App.vue'
import AppModal from './components/TheModal.vue'
import '../public/css/index.scss'
import router from './router'
import store from './store'
// vue.use(BootstrapVue)

createApp(App).use(store).use(router).component('app-modal', AppModal).mount('#app')
