<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具: {{ toy }}</h4>
    <h4>父给子的车: {{ car }}</h4>
    <button @click="sendToy(toy)">把玩具给父组件</button>
  </div>
</template>
<script setup lang="ts" name="Child">
import { ref, reactive } from "vue"
let toy = ref('奥特曼')
// 接收props
defineProps(['car', 'sendToy'])


</script>
<style scoped>
.child {
  background-color: #33A0EC;
  box-shadow: 0 0 5px;
  border-radius: 8px;
  margin: 12px;
  width: 50%;
  height: 50%;
  padding: 10px;
}
</style>
