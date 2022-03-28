import { createApp } from 'vue'
import App from './App.vue'
import '../public/css/index.scss'
import router from './router'
import store from './store'
// vue.use(BootstrapVue)

createApp(App).use(store).use(router).mount('#app')
