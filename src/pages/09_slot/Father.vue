<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="box">
      <!-- <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>
            热门游戏列表
          </h2>
        </template>
      </Category> -->
      <!-- <Category>
        <template v-slot:s1>
          <h2>
            今日美食城市
          </h2>
        </template>
        <template v-slot:s2>
          <img :src="imgUrl">
        </template>
      </Category> -->
      <!-- <category> -->
      <!-- v-slot语法糖 #名字 -->
      <!-- <template #s1>
          <h2>今日影视推荐</h2>
        </template>
        <template #s2>
          <video :src="videoUrl" controls></video>
        </template> -->
      <!-- </Category> -->
      <Game>
        <template v-slot:hot="params">
          <ul>
            <li v-for="game in params.games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template v-slot:hot="{ games }">
          <ol>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ol>
        </template>
      </Game>
      <Game>
        <template #hot="{ games }">
          <h3 v-for="game in games" :key="game.id">{{ game.name }}</h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import { reactive, ref } from "vue";
// import Category from "./Category.vue";
import Game from "./Game.vue";
let games = reactive([
  { id: 'g01', name: '英雄联盟' },
  { id: 'g02', name: '王者荣耀' },
  { id: 'g03', name: '魔兽世界' },
  { id: 'g04', name: '守望先锋' },
])
let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>

<style scoped>
.father {
  background-color: #ADB5BB;
  box-shadow: 0 0 5px;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
}

.father .box {
  display: flex;
  justify-content: space-evenly;
}


.father .box h2 {
  background-color: #e6681a;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 0 5px;
}

li,
h3 {
  font-size: large;
  font-weight: normal;
}

img,
video {
  width: 100%;
  border-radius: 5px;
}
</style>
