<template>
  <div class="child">
    <h2>子组件</h2>
    <h3>今天天气：{{ weather }}</h3>
    <h4 v-beauty="weather">祝您开心每一天</h4>
  </div>
</template>
<script setup lang="ts" name="Child">
import { ref, reactive } from "vue"
import axios from 'axios'

let weather = ref('晴')

// let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
// console.log(content)

</script>
<style lang="css" scoped>
.child {
  background-color: cadetblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
