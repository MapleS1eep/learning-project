<template>
  <div class="third">
    姓：<input type="text" v-model="firstName" /><br />
    名：<input type="text" v-model="lastName" /><br />
    全名：<span>{{ fullName }}</span
    ><br />
    <button @click="changeFullName">修为全名Willam Smith</button>
  </div>
</template>
<script setup lang="ts" name="Third">
import { ref, computed } from "vue";
let firstName = ref("Jack");
let lastName = ref("Miller");

// 这样定义的计算属性是只读的，不支持修改
// let fullName = computed(() => {
//   return fristName.value + " " + lastName.value;
// });

// 这样定义的计算属性可以修改
let fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(val) {
    console.log("set", val);
    const [str1, str2] = val.split(' ');
    firstName.value = str1;
    lastName.value = str2;
  },
});
function changeFullName() {
  fullName.value = "Willam Smith";
}
</script>

<style scoped>
.third {
  background-color: #999;
  color: #fff;
  padding: 20px;
  line-height: 14px;
  font-family: roboto, helvetica;
  font-weight: 200;
  letter-spacing: 1px;
  text-decoration: none;
  input {
    border: none;
    outline: none;
    border-radius: 8px;
    margin: 10px;
    padding: 5px;
  }
  button {
    outline: none;
    border-radius: 8px;
    margin: 10px;
    padding: 5px;
  }
}
</style>
