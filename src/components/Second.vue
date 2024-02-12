<template>
  <div class="second">
    <h2>姓名： {{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>性别：{{ person.gender }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeGender">修改性别</button>
  </div>
</template>
<script setup lang="ts" name="Second">
import { reactive, toRefs, toRef } from "vue";
let person = reactive({
  name: "Robin",
  age: 20,
  gender: "Female",
});

// roRefs: 解构响应式对象并将结构之后的数据变为响应式
let { name, age } = toRefs(person);
let gender = toRef(person, "gender");

function changeName() {
  name.value += "一";
}
function changeAge() {
  age.value += 1;
}
function changeGender() {
  gender.value = gender.value == "Female" ? "Male" : "Female";
}
</script>
<style scoped>
.second {
  button {
    border: none;
    outline: none;
    padding: 10px;
    margin: 10px;
    color: #fff;
    background: linear-gradient(135deg, #e570e7 0%, #79f1fc 100%);
    box-sizing: border-box;
    text-align: center;
    line-height: 14px;
    font-family: roboto, helvetica;
    font-weight: 200;
    letter-spacing: 1px;
    text-decoration: none;
    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>
