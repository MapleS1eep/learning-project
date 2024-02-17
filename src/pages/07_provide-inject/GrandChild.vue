<template>
  <div class="grandchild">
    <h4>孙组件</h4>
    <h4>钱：{{ money }}万元</h4>
    <h4>车：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <button @click="updateMoney(5)">修改父组件(爷爷)的钱</button>
  </div>
</template>
<script setup lang="ts" name="GrandChild">
import { ref, reactive, inject } from "vue"


let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (param: number) => { } })
let car = inject('car', { brand: '未知', price: 0 })
</script>
<style scoped>
.grandchild {
  background-color: #EDAF20;
  box-shadow: 0 0 5px;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
}
</style>
