<template>
  <component
    :is="to ? RouterLink : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 select-none',
      sizeClasses,
      variantClasses,
    ]"
    v-bind="$attrs"
    @click="emit('click', $event as MouseEvent)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    variant?: 'filled' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    to?: string
    href?: string
  }>(),
  {
    variant: 'filled',
    size: 'md',
  }
)

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

const sizeClasses = computed(() => {
  return {
    sm: 'px-5 py-2 text-sm rounded-full',
    md: 'px-8 py-3 text-base rounded-full',
    lg: 'px-10 py-4 text-lg rounded-full',
  }[props.size]
})

const variantClasses = computed(() => {
  return {
    filled: 'btn-primary text-white',
    outline: 'btn-outline text-white',
    ghost: 'text-white/70 hover:text-white hover:bg-white/10 rounded-full px-4 py-2',
  }[props.variant]
})
</script>
