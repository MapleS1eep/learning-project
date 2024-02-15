<template>
  <div class="person">
    <h2>当前数值为：{{ sum }}</h2>
    <h2>当前数值的双倍：{{ doubleSum }}</h2>
    <button @click="addSum">点击+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index"><br>
    <button @click="getDogPic">添加一张图片</button>
  </div>
</template>
<script setup lang="ts" name="Hook">
import useDog from '@/hooks/useDog'
import useSum from '@/hooks/useSum'

const { dogList, getDogPic } = useDog()
const { sum, addSum,doubleSum } = useSum()

</script>

<style scoped >
.person {
  img {
    height: 100px;
    margin: 10px;
  }
}
</style>
