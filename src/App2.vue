<template>
  <div class="app">
    <h2>名字：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeAge">修改年龄</button>
    <hr>
    <h2>一辆{{ car2.brand }}车，价值{{ car2.price }}万</h2>
    <button @click="changePrice">修改车</button>
  </div>
</template>
<script setup lang="ts" name="App">
import { reactive, toRaw, markRaw } from "vue"
import mockjs from 'mockjs';

let person = reactive({
  name: 'Firefly',
  age: 18,
})

/**toRaw */
// toRaw:返回一个由响应式对象对应的原始对象，不会触发页面更新
let rawPerson = toRaw(person)
// console.log('响应式数据==>', person);
// console.log('原始数据==>', rawPerson);
function changeAge() {
  person.age += 1
}

/*markRaw */
// markRaw: 将一个对象标记为不可被转为响应式。返回该对象本身。
let car = markRaw({
  brand: '宝马',
  price: 30
})

let car2 = reactive(car)

let mockJs = markRaw(mockjs)
console.log(mockJs);


function changePrice() {
  car.brand = "奔驰"
  car2.price += 10
  console.log('car===>', car);
}

</script>
<style lang="css" scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
