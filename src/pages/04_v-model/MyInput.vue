<template>
  <label for="">用户名</label><input type="text" :value="uname" @input="emit('update:uname', (<HTMLInputElement>$event.target).value)"><br>
  <label for="">密  码</label><input type="text" :value="pwd" @input="emit('update:pwd', (<HTMLInputElement>$event.target).value)">
</template>
<script setup lang="ts" name="MyInput">
import { ref, reactive } from "vue"
defineProps(['uname', 'pwd'])
const emit = defineEmits(['update:uname', 'update:pwd'])


</script>
<style scoped>
input {
  border: 1px solid #fff;
  outline: none;
  border-radius: 5px;
  background-image: linear-gradient(45deg, hsl(203, 100%, 50%), hsl(150, 100%, 50%), hsl(69, 90%, 55%));
  height: 30px;
  font-size: 20px;
  color: white;
  margin: 10px;
}
</style>
