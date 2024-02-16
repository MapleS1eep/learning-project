<template>
  <div class="child">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4 v-show="toy">哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import emitter from "@/utils/emitter";
let computer = ref('苹果')
let toy = ref('')
emitter.on('send-toy', (value: any) => {
  toy.value = value
})

// 在组件卸载时解绑
onUnmounted(() => {
  emitter.off('send-toy')
})
</script>
<style scoped>
.child {
  background-color: #F557F5;
  box-shadow: 0 0 5px;
  border-radius: 8px;
  margin: 12px;
  width: 50%;
  height: 50%;
  padding: 10px;
}
</style>
