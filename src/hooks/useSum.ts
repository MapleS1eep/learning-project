import { computed, ref } from "vue"

export default function () {
  let sum = ref(0)
  let doubleSum = computed(() =>
    sum.value * 2
  )
  function addSum() {
    sum.value += 1
  }
  return {
    sum, addSum, doubleSum
  }
}
