<template>
  <div class="count">
    <h2>你好，我是{{ name }}，来自{{ city }}/大写: {{ upperCity }}
    </h2>
    <h2>当前求和为：{{ sum }}，放大10倍为：{{ bigSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>

  </div>
</template>
<script setup lang="ts" name="Count">
import { ref, reactive } from "vue"
import { useCountStore } from "@/store/count";
import { storeToRefs } from "pinia";
let n = ref(1)

const countStore = useCountStore();
// storeToRefs只会关注store中的数据，不会对方法进行ref处理
const { sum, name, city, bigSum, upperCity } = storeToRefs(countStore)
function add() {
  countStore.increment(n.value)
}
function minus() {
  sum.value -= n.value
}

</script>
<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  border-radius: 5px;
  margin: 0 5px;
  height: 36px;
  text-align: center;
  line-height: 100%;
  vertical-align: middle
}
</style>
