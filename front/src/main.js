import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'

// ćšć±ćé



const app = createApp(App);

app.config.globalProperties.$isAuth = false;

app.use(router);

app.mount('#app')

