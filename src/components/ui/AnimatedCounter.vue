<template>
  <span ref="el">{{ current }}{{ suffix }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCounter } from '@/composables/useCounter'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const props = withDefaults(
  defineProps<{
    target: number
    suffix?: string
    duration?: number
  }>(),
  {
    suffix: '',
    duration: 2000,
  }
)

const el = ref<HTMLElement | null>(null)
const { current, start } = useCounter(props.target, props.duration)
const { observe } = useIntersectionObserver()

onMounted(() => {
  if (el.value) {
    observe(el.value, () => start(), { threshold: 0.5 })
  }
})
</script>
