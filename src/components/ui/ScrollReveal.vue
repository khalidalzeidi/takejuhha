<template>
  <div
    ref="el"
    :class="[directionClass, 'transition-all ease-out']"
    :style="{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const props = withDefaults(
  defineProps<{
    direction?: 'up' | 'left' | 'right' | 'fade'
    delay?: number
    duration?: number
  }>(),
  {
    direction: 'up',
    delay: 0,
    duration: 700,
  }
)

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
const { observe } = useIntersectionObserver()

const directionClass = computed(() => {
  if (visible.value) return 'opacity-100 translate-x-0 translate-y-0'
  return {
    up: 'opacity-0 translate-y-10',
    left: 'opacity-0 translate-x-10',
    right: 'opacity-0 -translate-x-10',
    fade: 'opacity-0',
  }[props.direction]
})

onMounted(() => {
  if (el.value) {
    observe(el.value, () => { visible.value = true }, { threshold: 0.1 })
  }
})
</script>
