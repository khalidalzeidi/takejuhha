<template>
  <div
    :class="[
      'glass rounded-2xl transition-all duration-300',
      hover ? 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 cursor-pointer' : '',
      padding ? 'p-6 md:p-8' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    hover?: boolean
    padding?: boolean
  }>(),
  {
    hover: false,
    padding: true,
  }
)
</script>
