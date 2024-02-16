<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>汽车: {{ car }}</h4>
    <h4 v-show="toy">儿给父的玩具:{{ toy }}</h4>
    <Child :car="car" :sendToy="getToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref, reactive } from "vue"
let car = ref('奔驰')
let toy = ref('')

// 定义方法接收子的数据
function getToy(value: string) {
  console.log('555', value);
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
