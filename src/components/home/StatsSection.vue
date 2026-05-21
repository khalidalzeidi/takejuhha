<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Gradient background -->
    <div class="absolute inset-0" style="background: linear-gradient(135deg, #4F1A6F 0%, #D65769 100%)" />
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px" />

    <div class="relative z-10 container-custom">
      <ScrollReveal direction="up">
        <p class="text-center text-white/70 text-sm tracking-widest uppercase mb-16">أرقام تحكي قصتنا</p>
      </ScrollReveal>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <ScrollReveal
          v-for="(stat, i) in stats"
          :key="stat.id"
          direction="up"
          :delay="i * 100"
          :duration="700"
        >
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-black text-white mb-3">
              <AnimatedCounter :target="stat.value" :suffix="stat.suffix" />
            </div>
            <p class="text-white/70 font-medium">{{ stat.labelAr }}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
import { stats } from '@/data/stats'
</script>
