<template>
  <div>
    <!-- Filter tabs -->
    <div class="flex flex-wrap gap-3 justify-center mb-12">
      <button
        v-for="cat in categories"
        :key="cat.value"
        @click="activeCategory = cat.value"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
          activeCategory === cat.value
            ? 'text-white shadow-lg'
            : 'glass text-white/60 hover:text-white',
        ]"
        :style="activeCategory === cat.value ? 'background: linear-gradient(135deg, #BE315B, #451B88)' : ''"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Grid -->
    <TransitionGroup
      name="portfolio"
      tag="div"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <PortfolioItemComponent
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @click="emit('open-lightbox', item)"
      />
    </TransitionGroup>

    <!-- Empty state -->
    <div v-if="filteredItems.length === 0" class="text-center py-20">
      <p class="text-white/40">لا توجد أعمال في هذا التصنيف</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioItemComponent from './PortfolioItem.vue'
import type { PortfolioItem, PortfolioCategory } from '@/types'

const props = defineProps<{
  items: PortfolioItem[]
}>()

const emit = defineEmits<{
  'open-lightbox': [item: PortfolioItem]
}>()

const activeCategory = ref<PortfolioCategory>('all')

const categories: { label: string; value: PortfolioCategory }[] = [
  { label: 'الكل',             value: 'all'         },
  { label: 'هوية تجارية',      value: 'brand'       },
  { label: 'تصوير',            value: 'photography' },
  { label: 'تواصل اجتماعي',   value: 'social'      },
  { label: 'حملات',            value: 'campaign'    },
  { label: 'تصميم',            value: 'design'      },
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') return props.items
  return props.items.filter((item) => item.category === activeCategory.value)
})
</script>

<style scoped>
.portfolio-enter-active,
.portfolio-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.portfolio-enter-from,
.portfolio-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.portfolio-move {
  transition: transform 0.4s ease;
}
</style>
