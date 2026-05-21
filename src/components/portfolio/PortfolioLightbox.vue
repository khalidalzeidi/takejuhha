<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen && currentItem"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="emit('close')"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/90 backdrop-blur-md" @click="emit('close')" />

        <!-- Content -->
        <div class="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col">
          <!-- Controls -->
          <div class="flex items-center justify-between mb-4 px-2">
            <div>
              <h3 class="text-white font-bold text-lg">{{ currentItem.titleAr }}</h3>
              <p class="text-primary text-sm">{{ currentItem.categoryAr }}</p>
            </div>
            <button
              @click="emit('close')"
              class="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <X :size="18" />
            </button>
          </div>

          <!-- Image -->
          <div class="relative flex-1 min-h-0 rounded-2xl overflow-hidden">
            <img
              :src="currentItem.image"
              :alt="currentItem.titleAr"
              class="w-full h-full object-contain max-h-[70vh]"
            />

            <!-- Prev / Next -->
            <button
              @click="emit('prev')"
              class="absolute top-1/2 end-4 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight :size="18" />
            </button>
            <button
              @click="emit('next')"
              class="absolute top-1/2 start-4 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft :size="18" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { PortfolioItem } from '@/types'

defineProps<{
  isOpen: boolean
  currentItem: PortfolioItem | null
}>()

const emit = defineEmits<{
  close: []
  prev: []
  next: []
}>()
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
