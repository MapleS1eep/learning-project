<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>书籍：{{ book }}本</h4>
    <button @click="changeHouse($parent)">修改父组件的房产</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import { ref, reactive, onMounted } from "vue"
let toy = ref('奥特曼')
let book = ref(3)
// 把数据交给外部
defineExpose({ toy, book })

function changeHouse(parent: any) {
  parent.house -= 1
}
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
