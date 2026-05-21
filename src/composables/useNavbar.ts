import { ref, onMounted, onUnmounted } from 'vue'

export function useNavbar() {
  const isScrolled = ref(false)
  const isHidden = ref(false)
  const isMobileOpen = ref(false)
  let lastScrollY = 0

  function onScroll() {
    const current = window.scrollY
    isScrolled.value = current > 60
    isHidden.value = current > lastScrollY && current > 300
    lastScrollY = current
  }

  function toggleMobile() {
    isMobileOpen.value = !isMobileOpen.value
  }

  function closeMobile() {
    isMobileOpen.value = false
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { isScrolled, isHidden, isMobileOpen, toggleMobile, closeMobile }
}
