<template>
  <div class="">
    <h1>关于页面</h1>
  </div>
</template>
<script setup lang="ts" name="About">
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  console.log('About组件挂载了');

})
onUnmounted(() => {
  console.log('About组件卸载了');

})
</script>
<style lang="" scoped>


</style>
