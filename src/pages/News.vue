<template>
  <div class="news">
    <ul class="news-title">
      <li v-for="news in newsList" :key="news.id">
        <button @click="viewDetail(news)">点击查看新闻</button>
        <!-- qurey第一种写法 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"> {{ news.title }} -->
        <!-- qurey第二种写法 -->
        <!-- <RouterLink :to="{
          name: 'Detail',
          // path: 'news/detail',
          query: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">
          {{ news.title }}
        </RouterLink> -->

        <!-- params第一种 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`"> {{ news.title }} </RouterLink> -->
        <!-- params第二种写法 只能用name -->
        <RouterLink :to="{
          name: 'Detail',
          params: {
            id: news.id,
            title: news.title,
            content: news.content,
          }
        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'
const newsList = reactive([
  { id: 'news001', title: '新闻001', content: '第一条新闻' },
  { id: 'news002', title: '新闻002', content: '第二条新闻' },
  { id: 'news003', title: '新闻003', content: '第三条新闻' },
  { id: 'news004', title: '新闻004', content: '第四条新闻' },
])
const router = useRouter();

interface NewsInter {
  id: string,
  title: string,
  content: string
}
function viewDetail(news: NewsInter) {
  router.push({
    name: 'Detail',
    params: {
      id: news.id,
      title: news.title,
      content: news.content,
    }
  })
}
</script>
<style scoped>
ul {
  padding: 0;
}

ul li {
  list-style: none;
  margin: 10px;
}

.news {
  display: flex;
  justify-content: start;
}


.news-content {
  border: 1px solid #000;
  border-radius: 8px;
  margin: 10px;
  padding: 15px;
}
</style>
