<template>
  <div class="app">
    <h2>App组件</h2>
    <!-- <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h1>加载中...</h1>
      </template>
    </Suspense> -->
    <Child />
    <Hello />
  </div>
</template>
<script setup lang="ts" name="App">
import Child from "@/components/Child.vue";
import { ref, reactive, Suspense } from "vue"
</script>

<style lang="css" scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
