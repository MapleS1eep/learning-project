<template>
  <ul class="news-list">
    <!-- <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li> -->

    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>
<script setup lang="ts" name="Detail">
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();
console.log('route===>', route);

// query传参
// const { query } = toRefs(route)

// params传参
// const { params } = toRefs(route)
defineProps(['id', 'title', 'content'])



</script>
<style lang="" scoped>

</style>
