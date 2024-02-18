<template>
  <div class="app">
    <h2>App组件</h2>
    <img src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/rr/rr6g31.jpg">
    <Modal />
  </div>
</template>
<script setup lang="ts" name="App">
import Modal from '@/components/Modal.vue'
import { ref, reactive } from "vue"




</script>
<style lang="css" scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 30vw;
  filter: saturate(200%);
}
img {
  border-radius: 5px;
}
</style>
