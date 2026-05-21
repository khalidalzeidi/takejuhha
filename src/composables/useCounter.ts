import { ref, onUnmounted } from 'vue'

export function useCounter(target: number, duration = 2000) {
  const current = ref(0)
  let startTime: number | null = null
  let rafId: number

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3)
  }

  function animate(timestamp: number) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutCubic(progress)
    current.value = Math.floor(eased * target)
    if (progress < 1) {
      rafId = requestAnimationFrame(animate)
    } else {
      current.value = target
    }
  }

  function start() {
    cancelAnimationFrame(rafId)
    startTime = null
    current.value = 0
    rafId = requestAnimationFrame(animate)
  }

  onUnmounted(() => cancelAnimationFrame(rafId))

  return { current, start }
}
