import { customRef } from "vue"

// 用customRef定义响应式数据

export function useMsgRef(value: string, delay: number = 1000) {
  let timeout: number
  let msg = customRef((track, trigger) => {
    return {
      // msg被读取时触发
      get() {
        track() // 对数据持续关注，一旦就更新
        return value
      },
      // msg被修改时触发
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger() //通知vue数据发生变化
        }, delay)
      }
    }
  })
  return msg
}
