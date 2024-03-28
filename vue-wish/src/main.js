import { createApp } from 'vue'
import Elementplus from 'element-plus'
import App from './App.vue'
import router from './router'
// import store from './store'

const app=createApp(App)
app.use(router)
app.use(Elementplus)
app.mount('#app')
