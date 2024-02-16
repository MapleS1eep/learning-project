<template>
  <div class="father">
    <h3>父组件</h3>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
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
