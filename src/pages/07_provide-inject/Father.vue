<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>钱：{{ money }}万元</h4>
    <h4>车：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref, reactive, provide } from "vue"

let money = ref(100)
let car = reactive({
  brand: '奔驰',
  price: 30
})

function updateMoney(value: number) {
  money.value -= value
}
// 向后代提供数据
provide('moneyContext', { money, updateMoney })
provide('car', car)
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
