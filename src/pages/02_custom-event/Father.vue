<template>
  <div class="father">
    <h3>父组件</h3>
    <h4 v-show="toy">子传给父的玩具：{{ toy }}</h4>
    <!-- 给子组件绑定自定义事件 -->
    <Child @send-toy="saveToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from "vue"
let toy = ref('')

function saveToy(value: string) {
  console.log('saveToy');
  toy.value = value

}
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
