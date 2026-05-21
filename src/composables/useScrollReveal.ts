import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal') {
  let observer: IntersectionObserver | null = null

  function init() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => {
      observer?.observe(el)
    })
  }

  onMounted(init)
  onUnmounted(() => observer?.disconnect())

  return { init }
}
