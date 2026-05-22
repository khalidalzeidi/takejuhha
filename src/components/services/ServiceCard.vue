<template>
  <div
    :class="[
      'group relative rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer',
      variant === 'full'
        ? 'glass p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10'
        : 'glass p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10',
    ]"
  >
    <!-- Gradient overlay on hover -->
    <div
      :class="['absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl', `bg-gradient-to-br ${service.color}`]"
      style="opacity: 0"
      ref="gradientOverlay"
    />
    <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
      :style="`background: linear-gradient(135deg, #BE315B, #451B88)`"
    />

    <!-- Content -->
    <div class="relative z-10">
      <!-- Icon -->
      <div
        :class="[
          'rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110',
          variant === 'full' ? 'w-14 h-14' : 'w-12 h-12',
        ]"
        :style="`background: linear-gradient(135deg, #BE315B, #451B88)`"
      >
        <component
          :is="iconComponent"
          :size="variant === 'full' ? 24 : 20"
          class="text-white"
        />
      </div>

      <!-- Title -->
      <h3
        :class="[
          'font-bold text-white mb-3 transition-colors duration-300',
          variant === 'full' ? 'text-xl' : 'text-lg',
        ]"
      >
        {{ service.nameAr }}
      </h3>

      <!-- Description (full variant only) -->
      <p v-if="variant === 'full'" class="text-white/60 leading-relaxed text-sm group-hover:text-white/80 transition-colors duration-300">
        {{ service.descriptionAr }}
      </p>

      <!-- Arrow (full variant) -->
      <div
        v-if="variant === 'full'"
        class="mt-6 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
      >
        <span>اعرف أكثر</span>
        <span>←</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  TrendingUp, Share2, Megaphone, Fingerprint, Palette, Video, Camera,
} from 'lucide-vue-next'
import type { Service } from '@/types'

const props = withDefaults(
  defineProps<{
    service: Service
    variant?: 'full' | 'compact'
  }>(),
  { variant: 'full' }
)

const iconMap: Record<string, unknown> = {
  TrendingUp,
  Share2,
  Megaphone,
  Fingerprint,
  Palette,
  Video,
  Camera,
}

const iconComponent = computed(() => iconMap[props.service.icon] ?? TrendingUp)
</script>
