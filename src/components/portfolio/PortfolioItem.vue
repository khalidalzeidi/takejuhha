<template>
  <div
    class="group relative rounded-2xl overflow-hidden bg-surface cursor-pointer aspect-square"
    @click="emit('click', item)"
  >
    <img
      :src="item.image"
      :alt="item.titleAr"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
    <!-- Overlay -->
    <div
      class="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
    >
      <p class="text-white font-bold text-sm">{{ item.titleAr }}</p>
      <p class="text-primary text-xs font-medium mt-1">{{ item.categoryAr }}</p>
    </div>
    <!-- Zoom icon -->
    <div class="absolute top-3 end-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
      <ZoomIn :size="14" class="text-white" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZoomIn } from 'lucide-vue-next'
import type { PortfolioItem as PortfolioItemType } from '@/types'

defineProps<{
  item: PortfolioItemType
}>()

const emit = defineEmits<{
  click: [item: PortfolioItemType]
}>()
</script>
