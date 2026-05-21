import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { PortfolioItem } from '@/types'

export function useLightbox(items: PortfolioItem[]) {
  const currentIndex = ref(-1)
  const isOpen = computed(() => currentIndex.value !== -1)
  const currentItem = computed(() => items[currentIndex.value] ?? null)

  function open(item: PortfolioItem) {
    currentIndex.value = items.findIndex((i) => i.id === item.id)
    document.body.style.overflow = 'hidden'
  }

  function close() {
    currentIndex.value = -1
    document.body.style.overflow = ''
  }

  function prev() {
    currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
  }

  function next() {
    currentIndex.value = (currentIndex.value + 1) % items.length
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!isOpen.value) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft') next()
    if (e.key === 'ArrowRight') prev()
  }

  onMounted(() => window.addEventListener('keydown', handleKeydown))
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  })

  return { isOpen, currentItem, currentIndex, open, close, prev, next }
}
