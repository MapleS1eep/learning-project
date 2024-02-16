<template>
  <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
</template>
<script setup lang="ts" name="MyInput">
import { ref, reactive } from "vue"
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])


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
}
</style>
