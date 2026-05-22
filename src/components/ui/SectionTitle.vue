<template>
  <div :class="['mb-12 md:mb-16', align === 'center' ? 'text-center' : 'text-start']">
    <p v-if="eyebrow" class="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
      {{ eyebrow }}
    </p>
    <h2
      :class="[
        'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4',
        light ? 'text-white' : 'text-white',
      ]"
    >
      {{ title }}
    </h2>
    <div
      :class="[
        'h-1 w-16 rounded-full mb-6',
        align === 'center' ? 'mx-auto' : '',
      ]"
      style="background: linear-gradient(90deg, #BE315B, #451B88)"
    />
    <p
      v-if="subtitle"
      :class="[
        'text-white/60 text-lg max-w-2xl leading-relaxed',
        align === 'center' ? 'mx-auto' : '',
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    eyebrow?: string
    align?: 'center' | 'start'
    light?: boolean
  }>(),
  {
    align: 'start',
    light: false,
  }
)
</script>
