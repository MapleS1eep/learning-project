<template>
  <div class="child">
    <h3>子组件</h3>

  </div>
</template>

<script setup lang="ts" name="Child">
import { ref, reactive, onMounted } from "vue"

</script>
<style scoped>
.child {
  background-color: #33F610;
  box-shadow: 0 0 5px;
  border-radius: 8px;
  margin: 12px;
  width: 50%;
  height: 50%;
  padding: 10px;
}
</style>
