//  路由管理

import mainBoard from '../components/MainBoard.vue'
import {createWebHistory, createRouter} from 'vue-router';
import loginRoute from '../components/LoginRoute.vue';
import UploadElement from '../components/UploadElement.vue'

const routes = [
    {path: '/dashboard', component: mainBoard},
    {path: '/login', component: loginRoute},
    {path: '/', component: loginRoute},
    {path: '/upload', component: UploadElement}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {
    router
}
