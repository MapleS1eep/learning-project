import { createApp } from 'vue'
import App from './App.vue'
// import Hello from "@/components/Hello.vue"
// 引入全局样式
import '../public/static/css/global.css'
// 引入路由器
import router from './router'
// 引入Pinia
import { createPinia } from "pinia";
// 创建一个应用
const app = createApp(App)
// 注册全局组件
// app.component('Hello', Hello)
// 注册全局属性
// app.config.globalProperties.x = 99
// declare module 'vue' {
//   interface ComponentCustomProperties {
//     x: number
//   }
// }
// 注册全局指令
// app.directive('beauty', (element, { value }) => {
//   element.innerText += value
//   element.style.color = 'orange'
//   element.backgroundColor = 'skyblue'
// })
// 创建pinia
const pinia = createPinia()
// 安装pinia
app.use(pinia)
// 使用路由器
app.use(router)
// 挂载整个应用到app容器中
app.mount('#app')
// 卸载
// setTimeout(() => {
//   app.unmount()
// }, 2000)