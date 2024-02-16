import { defineStore } from "pinia";
import { nanoid } from "nanoid"; //nonoid自动生成id
import axios from "axios";
import { reactive } from "vue";

// 选项式写法
// export const useLoveTalkStore = defineStore('loveTalk', {
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
//     }
//   },
//   actions: {
//     async getLoveTalk() {
//       // 解构content并重命名为title
//       let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//       let obj = { id: nanoid(), title }
//       this.talkList.unshift(obj)
//     }
//   }
// })

// 组合式写法
export const useLoveTalkStore = defineStore('loveTalk', () => {
  const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])
  async function getLoveTalk() {
    // 解构content并重命名为title
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = { id: nanoid(), title }
    talkList.unshift(obj)
  }
  return {
    talkList, getLoveTalk
  }
})