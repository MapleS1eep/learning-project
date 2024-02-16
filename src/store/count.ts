import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  // state:真正存储数据的地方
  state() {
    return {
      sum: 1,
      name: 'Amy',
      city: 'Shanghai'
    }
  },
  getters: {
    bigSum: (state): number => state.sum * 10,
    upperCity(state): string {
      return this.city.toUpperCase()
    }
  },
  actions: {
    increment(value: number) {
      // this是当前这个sotore
      // 设置sum的值最大为10
      if (this.sum <= 10 - value) {
        this.sum += value
      }
    },
  },
})