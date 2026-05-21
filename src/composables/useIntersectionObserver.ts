import { onUnmounted } from 'vue'

export function useIntersectionObserver() {
  const observers: IntersectionObserver[] = []

  function observe(
    el: Element,
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = { threshold: 0.1 }
  ) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) callback(entry)
      })
    }, options)
    observer.observe(el)
    observers.push(observer)
    return observer
  }

  function unobserveAll() {
    observers.forEach((o) => o.disconnect())
  }

  onUnmounted(unobserveAll)

  return { observe, unobserveAll }
}
