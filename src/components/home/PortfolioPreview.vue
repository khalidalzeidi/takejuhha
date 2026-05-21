<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <div class="container-custom">
      <div class="flex items-end justify-between mb-12 flex-wrap gap-4">
        <ScrollReveal direction="up">
          <SectionTitle
            eyebrow="أعمالنا"
            title="مشاريع أثّرت الفرق"
            subtitle="لمحة من أعمالنا الإبداعية مع عملاء استثنائيين"
          />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <RouterLink to="/portfolio" class="btn-outline text-sm px-6 py-2.5 shrink-0 -mt-6">
            عرض الكل
          </RouterLink>
        </ScrollReveal>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ScrollReveal
          v-for="(item, i) in portfolioPreview"
          :key="item.id"
          direction="up"
          :delay="i * 60"
          :duration="700"
          :class="i === 0 || i === 5 ? 'row-span-2' : ''"
        >
          <div
            class="group relative rounded-2xl overflow-hidden bg-surface cursor-pointer"
            :class="i === 0 || i === 5 ? 'h-full min-h-[400px]' : 'aspect-square'"
            @click="router.push('/portfolio')"
          >
            <img
              :src="item.image"
              :alt="item.titleAr"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p class="text-white font-bold text-sm">{{ item.titleAr }}</p>
              <p class="text-primary text-xs">{{ item.categoryAr }}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { portfolioPreview } from '@/data/portfolio'

const router = useRouter()
</script>
