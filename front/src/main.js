import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'

// 全局变量



const app = createApp(App);

app.config.globalProperties.$isAuth = false;

app.use(router);

app.mount('#app')

