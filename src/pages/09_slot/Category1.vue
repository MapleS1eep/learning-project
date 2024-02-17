<template>
  <div class="category">
    <slot name="s1">默认标题</slot>
    <slot name="s2">默认数据</slot>
    <slot></slot>
  </div>
</template>
<script setup lang="ts" name="Category">
import { ref, reactive } from "vue"

defineProps(['title'])


</script>
<style lang="css" scoped>
.category {
  background-color: skyblue;
  border-radius: 5px;
  box-shadow: 0 0 5px;
  padding: 10px;
  width: 200px;
  height: 300px;
}

.category h2 {
  background-color: #e6681a;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 0 5px;
}
</style>
