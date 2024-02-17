<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>用户名：{{ username }}</h4>
    <h4>密  码：{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- v-model的底层原理如下 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <!-- <MyInput v-model="username" /> -->
    <!-- <MyInput :model-value="username" @update:model-value="username = $event" /> -->

    <!-- 修改modelValue -->
    <MyInput v-model:uname="username" v-model:pwd="password" />
  </div>
</template>

<script setup lang="ts" name="Father">
import MyInput from "./MyInput.vue";
import { ref } from "vue";
let username = ref('Amy')
let password = ref('123456')
</script>

<style scoped>
.father {
  background-color: #ADB5BB;
  box-shadow: 0 0 5px;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
}
</style>
