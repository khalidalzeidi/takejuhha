<template>
  <div>
    <!-- Page hero -->
    <section class="relative pt-40 pb-20 overflow-hidden" style="background: linear-gradient(135deg, #0a0a0f 0%, #2d1040 50%, #0a0a0f 100%)">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, #D65769, transparent)" />
      <div class="container-custom text-center relative z-10">
        <ScrollReveal direction="up">
          <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-4">معرض أعمالنا</p>
          <h1 class="text-4xl md:text-6xl font-black text-white mb-6">أعمالنا</h1>
          <p class="text-white/50 text-lg max-w-xl mx-auto">
            أكثر من 90 مشروعاً إبداعياً يعكس التزامنا بالتميز والابتكار
          </p>
        </ScrollReveal>
      </div>
      <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-dark to-transparent" />
    </section>

    <!-- Portfolio grid -->
    <section class="section-padding bg-dark">
      <div class="container-custom">
        <ScrollReveal direction="up">
          <PortfolioGrid
            :items="portfolioItems"
            @open-lightbox="openLightbox"
          />
        </ScrollReveal>
      </div>
    </section>

    <!-- Lightbox -->
    <PortfolioLightbox
      :is-open="isOpen"
      :current-item="currentItem"
      @close="close"
      @prev="prev"
      @next="next"
    />
  </div>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid.vue'
import PortfolioLightbox from '@/components/portfolio/PortfolioLightbox.vue'
import { portfolioItems } from '@/data/portfolio'
import { useLightbox } from '@/composables/useLightbox'

const { isOpen, currentItem, open: openLightbox, close, prev, next } = useLightbox(portfolioItems)
</script>
