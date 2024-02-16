import { createRouter, createWebHistory } from 'vue-router'

// 引入要呈现的组件
import Home from '@/pages/Home.vue'
// import News from '@/pages/News.vue'
// import About from '@/pages/About.vue'
// import Detail from '@/pages/Detail.vue'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import Attrs from '@/pages/05_$attrs/Father.vue'
import RefParent from '@/pages/06_$refs-$parent/Father.vue'
import ProvideInject from '@/pages/07_provide-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot from '@/pages/09_slot/Father.vue'
// 创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    {  // 重定向
      path: '/',
      redirect: '/props'
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Props',
      path: '/props',
      component: Props
    },
    {
      name: 'Event',
      path: '/event',
      component: Event
    },
    {
      name: 'Mitt',
      path: '/mitt',
      component: Mitt
    },
    {
      name: 'Model',
      path: '/model',
      component: Model
    },
    {
      name: 'Attrs',
      path: '/attrs',
      component: Attrs
    },
    {
      name: 'RefParent',
      path: '/ref-parent',
      component: RefParent
    },
    {
      name: 'ProvideInject',
      path: '/provide-inject',
      component: ProvideInject
    },
    {
      name: 'Pinia',
      path: '/pinia',
      component: Pinia
    },
    {
      name: 'Slot',
      path: '/slot',
      component: Slot
    },
    // {
    //   name: 'News',
    //   path: '/news',
    //   component: News,
    //   children: [
    //     {
    //       name: 'Detail',
    //       path: 'detail/:id/:title/:content',
    //       component: Detail,
    //       // props配置

    //       //第一种写法： 将路由收到的所有params参数作为props传给路由组件
    //       props: true

    //       //第二种写法：函数式，可以自己决定将什么作为props传给路由组件
    //       // props(route) {
    //       //   return route.query
    //       // }

    //       // 第三种写法：对象式，可以自己决定将什么作为props传给路由组件,用的较少
    //       // props: {
    //       //   a: '1',
    //       //   b: '2',
    //       //   c: '3'
    //       // }
    //     }
    //   ]
    // },
    // {
    //   name: 'About',
    //   path: '/about',
    //   component: About
    // },
    // {
  ]
})

export default router