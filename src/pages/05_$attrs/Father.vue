<template>
  <div class="father">
    <h3>父组件</h3>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from "vue"
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
