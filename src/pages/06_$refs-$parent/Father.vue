<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>房产：{{ house }}</h4>
    <button @click="changeToy">修改子组件1的玩具</button>
    <button @click="changeComputer">修改子组件2的电脑</button>
    <button @click="changeChildren($refs)">修改所有的子组件对象的书籍</button>
    <Child1 ref="child1" />
    <Child2 ref="child2" />
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

let house = ref(4);
let child1 = ref()
let child2 = ref()

defineExpose({house})

function changeToy() {
  child1.value.toy = "变形金刚"
}
function changeComputer() {
  child2.value.computer = "苹果"
}
function changeChildren(refs: any) {
  for (const key in refs) {
    refs[key].book += 3
  }
}
</script>

<style scoped>
.father {
  background-color: #adb5bb;
  box-shadow: 0 0 5px;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
}
</style>
