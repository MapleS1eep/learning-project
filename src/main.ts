import { createApp } from 'vue'
import App from './App.vue'
// 引入全局样式
import '../public/static/css/global.css'
// 引入路由器
import router from './router'
// 引入Pinia
import { createPinia } from "pinia";
// 创建一个应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// 安装pinia
app.use(pinia)
// 使用路由器
app.use(router)
// 挂载整个应用到app容器中
app.mount('#app')