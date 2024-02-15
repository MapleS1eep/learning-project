<template>
  <!-- <First /> -->
  <!-- <Second /> -->
  <!-- <Third /> -->
  <!-- <Watch /> -->
  <!-- <Ref /> -->
  <!-- <Props list="personList" /> -->
  <!-- <Hook/> -->
  <div class="app">
    <h2 class="title">标题区</h2>
    <!-- 导航区 -->
    <div class="navigation">
      <ul>
        <li>
          <RouterLink to="/home" active-class="active">首页</RouterLink>
        </li>
        <li>
          <RouterLink to="/news" active-class="active">新闻</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" active-class="active">关于</RouterLink>
        </li>
      </ul>

    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
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

<style>
.app {
  padding: 24px;
  height: 100vh;
  width: 100vw;
  background-color: #a3a3a3;
}

.title {
  display: flex;
  justify-content: center;
  background-color: #eee;
  color: red;
  padding: 5px;
}

.navigation {
  display: flex;
  justify-content: left;
  align-items: center;

}

ul {
  position: relative;
  display: flex;
  padding: 0;
}

ul li {
  margin-right: 15px;
  list-style: none;
}

ul li a {
  background-color: skyblue;
  padding: 10px 15px;
  width: 120px;
  line-height: 40px;
  text-align: center;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

ul li .active {
  color: skyblue;
  background-color: #fff;
}

.main-content {
  border: 3px solid orange;
  border-radius: 8px;
  height: 50%;
}
</style>
