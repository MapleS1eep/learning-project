<template>
  <button @click="isShow = true">展示弹窗</button>
  <!-- 将其插槽内容渲染到 DOM 中的另一个位置。 -->
  <teleport to='body'>
    <div class="modal" v-show="isShow">
      <h2>弹窗标题</h2>
      <p>弹窗内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>
<script setup lang="ts" name="Modal">
import { ref, reactive } from "vue"

let isShow = ref(false)



</script>
<style lang="css" scoped>
.modal {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  box-shadow: 0 0 10px;
  text-align: center;
  position: fixed;
  left: 50%;
  margin-left: -100px;
  top: 80px;
}
</style>
