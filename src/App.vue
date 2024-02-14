<template>
  <!-- <First /> -->
  <!-- <Second /> -->
  <!-- <Third /> -->
  <!-- <Watch /> -->
  <!-- <Ref /> -->
  <Person :list="personList" />
</template>

<script lang="ts" setup name="App">
// import First from "./components/First.vue";
// import Second from "./components/Second.vue";
// import Third from "./components/Third.vue";
// import Watch from "./components/Watch.vue";
// import Ref from "./components/Ref.vue";
import Person from "./components/Person.vue";
import { reactive } from 'vue'
import { type PersonType } from '@/types'
let personList = reactive<PersonType>(
  [
    {
      id: 'crtr001',
      name: 'Robin',
      age: 20
    },
    {
      id: 'crtr001',
      name: 'Firefly',
      age: 18
    },
    {
      id: 'crtr003',
      name: 'Kafka',
      age: 30,
      gender: 'Female'
    }
  ]
)

</script>

<style></style>
