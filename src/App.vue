<template>
  <!-- <First /> -->
  <!-- <Second /> -->
  <!-- <Third /> -->
  <!-- <Watch /> -->
  <!-- <Ref /> -->
  <!-- <Props list="personList" /> -->
  <!-- <Hook/> -->
  <div class="app">
    <h1 class="title">Vue3组件间通信</h1>
    <hr>
    <div class="main">
      <div class="nav">
        <router-link active-class="active" class="list-group-item" to="/props">1. props</router-link>
        <router-link active-class="active" class="list-group-item" to="/event">2. 自定义事件</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">3. mitt</router-link>
        <router-link active-class="active" class="list-group-item" to="/model">4. v-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">5. $attrs</router-link>
        <router-link active-class="active" class="list-group-item" to="/ref-parent">6. $refs和$parent</router-link>
        <router-link active-class="active" class="list-group-item" to="/provide-inject">7. provide和inject</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">8. pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">9. slot</router-link>
      </div>
      <div class="content">
        <div class="panel-body">
          <!-- 展示区占位 -->
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- <Count /> -->
    <!-- <LoveTalk /> -->
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
import Header from './components/Header.vue'
import Count from './components/Count.vue'
import LoveTalk from './components/LoveTalk.vue'
// import First from "./components/First.vue";
// import Second from "./components/Second.vue";
// import Third from "./components/Third.vue";
// import Watch from "./components/Watch.vue";
// import Ref from "./components/Ref.vue";
// import Props from "./components/Props.vue";
// import Hook from "./components/Hook.vue";
// import { reactive } from 'vue'
// import { type PersonType } from '@/types'
// let personList = reactive<PersonType>(
//   [
//     {
//       id: 'crtr001',
//       name: 'Robin',
//       age: 20
//     },
//     {
//       id: 'crtr001',
//       name: 'Firefly',
//       age: 18
//     },
//     {
//       id: 'crtr003',
//       name: 'Kafka',
//       age: 30,
//       gender: 'Female'
//     }
//   ]
// )

</script>

<style scoped>
.app {
  padding: 24px;
  height: 100vh;
  width: 100vw;
}

.title {
  text-align: center;
}

.main {
  display: flex;
}

.main .nav {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.main .nav .list-group-item {
  text-decoration: none;
  outline: none;
  color: #000;
  border: 1px solid #ddd;
  padding: 10px;
}

.active {
  background-color: #32F8BB;
}

.main .content {
  width: 100%;
  margin: 10px;
}
</style>
