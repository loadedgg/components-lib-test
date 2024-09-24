import App from './App.vue'
import './assets/main.scss'
import router from './router'
import { createApp } from 'vue'

createApp(App)
  .use(router)
  .mount('#app')
