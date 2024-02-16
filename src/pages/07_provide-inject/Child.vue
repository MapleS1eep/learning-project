<template>
  <div class="child">
    <h3>子组件</h3>
    <Grandson/>
  </div>
</template>

<script setup lang="ts" name="Child">
import Grandson from "./Grandson.vue";
import { ref, reactive, onMounted } from "vue"

</script>
<style scoped>
.child {
  background-color: #2DC9F1;
  box-shadow: 0 0 5px;
  border-radius: 8px;
  margin: 12px;
  width: 50%;
  height: 50%;
  padding: 10px;
}
</style>
