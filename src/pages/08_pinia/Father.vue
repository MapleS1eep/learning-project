<template>
  <div class="father">
    <h3>父组件</h3>
    <Child01 />
    <Child02 />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child01 from './Child-1.vue'
import Child02 from './Child-2.vue'
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
