import { onBeforeMount, reactive } from "vue"
import axios from 'axios'


export default function () {

  let dogList = reactive<any>([])
  const dogUrl = 'https://dog.ceo/api/breeds/image/random'
  // 获得一张图片
  async function getDogPic() {
    try {
      let dogPic = await axios.get(dogUrl)
      dogList.push(dogPic.data.message)
    } catch (error) {
      alert(error)
    }

  }
  onBeforeMount(async () => {
    getDogPic()
  })

  return { dogList, getDogPic }
}

