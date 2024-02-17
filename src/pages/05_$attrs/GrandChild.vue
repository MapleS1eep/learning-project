<template>
  <div class="grandchild">
    <h4>孙组件</h4>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <h4>x: {{ x }}</h4>
    <h4>y: {{ y }}</h4>
    <button @click="updateA(3)">点击更新父组件a的值</button>
  </div>
</template>
<script setup lang="ts" name="GrandChild">
import { ref, reactive } from "vue"

defineProps(['a', 'b', 'c', 'd', 'x', 'y','updateA'])


</script>
<style scoped>
.grandchild {
  background-color: #EDAF20;
  box-shadow: 0 0 5px;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
}
</style>
