<template>
  <div class="child">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4>书籍：{{ book }}本</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, reactive, onMounted } from "vue"

let computer = ref('联想')
let book = ref(5)
// 把数据交给外部
defineExpose({computer,book})
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
