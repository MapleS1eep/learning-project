<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>
<script setup lang="ts" name="App">
import { reactive, ref } from "vue"
import { useMsgRef } from "@/hooks/useMsgRef";

// 用默认ref定义响应式数据,数据和页面会立刻同时更新
// let msg = ref('你好')

let msg = useMsgRef('你好', 2000)
</script>
<style lang="css" scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
