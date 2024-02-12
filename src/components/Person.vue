<template>
  <div class="person">
    <!-- <h3>A girl that I would not forget in my life</h3>
    <h4>名字: {{ name }}</h4>
    <h4>年龄: {{ age }}</h4>
    <h4>备注: {{ note }}</h4>
    <h4>location: {{ location }}</h4>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeNote">修改备注</button>
    <button @click="showMsg">查看地点</button> -->

    <h2>这辆{{ car.brand }}, 价格{{ car.price }}万元</h2>
    <button @click="changePrice">修改价格</button>
    <br />
    <h3>水果名单:</h3>
    <ul>
      <li v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</li>
    </ul>
    <button @click="changeName">修改第一项名字</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { reactive, ref } from "vue";
// ref可以定义基本类型和对象类型的响应式数据
//reactive只能定义对象类型的响应式数据
let car = ref({
  brand: "宝马",
  price: 50,
});
function changePrice() {
  car.value.price += 10;
}

let fruits = reactive([
  { id: "001", name: "香蕉" },
  { id: "002", name: "苹果" },
  { id: "003", name: "梨" },
]);
function changeName() {
  fruits[0].name = "橙子";
}

// import { ref } from "vue";
// let name = "Firefle";
// let age = ref(16);
// let height = "150";
// let note = ref("Girlfriend");
// let location = "Penacony";
// function showMsg() {
//   alert(location);
// }
// function changeAge() {
//   console.log(age);
//   age.value += 1;
// }
// function changeNote() {
//   console.log(note);
//   note.value = "wife";
// }
</script>

<style>
.person {
  background-color: rgb(250, 143, 81);
  box-shadow: 0 0 20px;
  border-radius: 15px;
  padding: 20px;
  margin: auto;
  button {
    background-color: skyblue;
    border-radius: 10px;
    border: none;
    margin: 10px 20px;
    padding: 10px;
    color: #333;
  }
}
</style>

<!-- https://www.bilibili.com/video/BV1Za4y1r7KE?p=14&spm_id_from=pageDriver&vd_source=8af54abb3c22a33227de944aca702d68 P13看完 -->