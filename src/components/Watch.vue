<template>
  <div class="watch">
    <!-- <h1>情况1: 监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <br />
    <button @click="changeSum">点击+1</button> -->

    <!-- <h1>情况2：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整体</button> -->

    <!-- <h1>情况3：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整体</button> -->

    <!-- 情况4: 监视【ref】或【reactive】定义的【对象类型】数据中的某个属性 -->
    <!-- <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>
      信息：地址 —— {{ person.info.address }} | 爱好 —— {{ person.info.hobby }}
    </h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeAddress">修改地址</button>
    <button @click="changeHobby">修改爱好</button>
    <button @click="changeInfo">修改信息</button> -->

    <h2>需求：当水温达到60或者水位达到80时给服务器发送请求</h2>
    <h2>当前水温：{{ temp }}</h2>
    <h2>当前位：{{ height }}</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>
<script setup lang="ts" name="Watch">
import { ref, reactive, watch, watchEffect } from "vue";

let temp = ref(10);
let height = ref(0);
function changeTemp() {
  temp.value += 10
}
function changeHeight() {
  height.value += 10
}
// 监视 watch实现
// watch([temp, height], (value) => {
//   // console.log('水温水位变化', value);
//   let [newTemp, newHeight] = value;
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log('向服务器发送请求');
//  }
// })
// watchEffect 自动监听数据
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log('向服务器发送请求');
  }
})

// 情况1: 监视【ref】定义的【基本类型】数据
// let sum = ref(0);
// function changeSum() {
//   sum.value += 1;
// }
// 监视
// const stopWatch = watch(sum, (newValue, oldValue) => {
//   console.log(`sum的值从 ${oldValue} 变成了 ${newValue}`);
//   if (newValue >= 10) {
//     stopWatch();
//   }
// });

// 情况2: 监视【ref】定义的【对象类型】数据,监视的是对象的地址
// let person = ref({
//   name: "Firefly",
//   age: 18,
// });

// function changeName() {
//   person.value.name += "❤";
// }
// function changeAge() {
//   person.value.age += 1;
// }
// function changePerson() {
// 对象地址已经变化
//   person.value = {
//     name: "March",
//     age: 16,
//   };
// }
// watch(person, (newValue, oldValue) => {
//   console.log(`oldValue: ${oldValue} newValue: ${newValue}`);
// });

// 情况3: 监视【reactive】定义的【对象类型】数据, 默认开启深度监视
// let person = reactive({
//   name: "Firefly",
//   age: 18,
// });

// function changeName() {
//   person.name += "❤";
// }
// function changeAge() {
//   person.age += 1;
// }
// function changePerson() {
//   // 只是覆盖了对象里的值，对象地址无变化
//   Object.assign(person, {
//     name: "March",
//     age: 16,
//   });
// }
// watch(person, (newValue, oldValue) => {
//   console.log("person变化了", newValue, oldValue);
// });

// 情况4: 监视【ref】或【reactive】定义的【对象类型】数据中的某个属性
// let person = reactive({
//   name: "Firefly",
//   age: 18,
//   info: {
//     address: "Penacony",
//     hobby: "cake",
//   },
// });
// function changeName() {
//   person.name += "❤";
// }
// function changeAge() {
//   person.age += 1;
// }
// function changeAddress() {
//   person.info.address += "☆";
// }
// function changeHobby() {
//   person.info.hobby += "⚪";
// }
// function changeInfo() {
//   person.info = {
//     address: "Dream",
//     hobby: "dessert",
//   }
// }
// 监视响应式对象中的某一个属性，且该属性为基本类型，要用函数式
// watch(() => person.name, (newValue, oldValue) => {
//   console.log('person.name变化了', newValue, oldValue);
// })

// 监视响应式对象中的某一个属性，且该属性为对象类型，可以直接写，也可以用函数式，更推荐用函数式
// watch(() => person.info, (newValue, oldValue) => {
//   console.log('person.info变化了', newValue, oldValue);

// }, { deep: true })

// 情况5：监视上述多个数据，用到数组
// watch([() => person.name, () => person.age, () => person.info], (newValue, oldValue) => {
//   console.log('person发生了变化', newValue, oldValue);

// }, { deep: true })


</script>
<style scoped></style>
