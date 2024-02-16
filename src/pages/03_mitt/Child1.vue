<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emitter.emit('send-toy',toy)">玩具给弟弟</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref, reactive, onMounted } from "vue"
import emitter from "@/utils/emitter";
let toy = ref('奥特曼')

</script>
<style scoped>
.child {
  background-color: #F7A523;
  box-shadow: 0 0 5px;
  border-radius: 8px;
  margin: 12px;
  width: 50%;
  height: 50%;
  padding: 10px;
}
</style>
