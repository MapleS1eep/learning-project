<template>
  <div class="game">
    <h2>热门游戏列表</h2>
    <slot name="hot" :games="games" x="你好" y="Hello"></slot>
  </div>
</template>
<script setup lang="ts" name="Game">
import { ref, reactive } from "vue"

let games = reactive([
  { id: 'g01', name: '英雄联盟' },
  { id: 'g02', name: '王者荣耀' },
  { id: 'g03', name: '魔兽世界' },
  { id: 'g04', name: '守望先锋' },
])


</script>
<style lang="css" scoped>
.game {
  background-color: skyblue;
  border-radius: 5px;
  box-shadow: 0 0 5px;
  padding: 10px;
  width: 200px;
  height: 300px;
}

.game h2 {
  background-color: #e6681a;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 0 5px;
}
</style>
