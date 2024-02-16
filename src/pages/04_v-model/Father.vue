<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="userName"> -->
    <!-- v-model的底层原理如下 -->
    <!-- <input type="text" :value="userName" @input="userName = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <MyInput v-model="userName"/>
    <!-- <MyInput :model-value="userName" @update:model-value="userName = $event" /> -->
  </div>
</template>

<script setup lang="ts" name="Father">
import MyInput from "./MyInput.vue";
import { ref } from "vue";
let userName = ref('Amy')
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
