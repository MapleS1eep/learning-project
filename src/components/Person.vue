<template>
  <div class="">
    <ul>
      <li v-for="person in list" :key="person.id">{{ person.name }}--{{ person.age }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="Person">
// import { defineProps, withDefaults } from 'vue'
import { type PersonType } from '@/types'

// import { type PersonInter, type PersonType } from '@/types'
// let person: PersonInter = {
//   id: '999',
//   name: 'Robin',
//   age: 20
// }

// let personList: PersonType = [
//   {
//     id: '001',
//     name: 'Robin',
//     age: 20
//   },
//   {
//     id: '001',
//     name: 'Firefly',
//     age: 18
//   },
//   {
//     id: '003',
//     name: 'Kafka',
//     age: 30
//   }
// ]

// 

// 只接收list
// defineProps(['list'])

// 接收list+限制类型
// defineProps<{ list: PersonType }>()

// 接收list+限制类型+限制必要性+指定默认值
withDefaults(defineProps<{ list?: PersonType }>(), {
  list: () => [
    { id: '999', name: 'Amy', age: 28 }
  ]
})


</script>
<style lang="" scoped>




</style>
