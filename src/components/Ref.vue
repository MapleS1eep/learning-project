<template>
  <div class="">

    <h1>中国</h1>
    <h2 ref="title2">广东</h2>
    <h3>深圳</h3>
    <button @click="showLog">点击输出ref标记的内容</button>

  </div>
</template>
<script setup lang="ts" name="Ref">
import { ref, reactive } from "vue"

// 创建一个title2用于存储ref标记的内容
let title2 = ref()

function showLog() {
  console.log(title2.value);
}


</script>
<style lang="" scoped> 




</style>
