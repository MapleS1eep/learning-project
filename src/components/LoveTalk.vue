<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>

  </div>
</template>
<script setup lang="ts" name="LoveTalk">
import { ref, reactive } from "vue"
import { storeToRefs } from "pinia";

import { useLoveTalkStore } from "@/store/loveTalk";

let loveTalkStore = useLoveTalkStore();
const { talkList } = storeToRefs(loveTalkStore)

loveTalkStore.$subscribe((mutaion, state) => {
  console.log('loveTalkStore保存的数据发生了变化', mutaion, state);
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

function getTalk() {
  loveTalkStore.getLoveTalk()
}



</script>
<style  scoped>
.talk {
  background-color: yellowgreen;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
