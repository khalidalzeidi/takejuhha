<template>
  <section class="section-padding bg-surface relative overflow-hidden">
    <div class="absolute inset-0 opacity-5 pointer-events-none" style="background: radial-gradient(ellipse at 50% 100%, #D65769, transparent 60%)" />

    <div class="container-custom">
      <ScrollReveal direction="up">
        <SectionTitle
          eyebrow="قيمنا"
          title="ما الذي يجعلنا مختلفين"
          subtitle="أربعة مبادئ تشكّل هويتنا وتوجّه كل قرار نتخذه"
          align="center"
        />
      </ScrollReveal>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ScrollReveal
          v-for="(val, i) in values"
          :key="val.id"
          direction="up"
          :delay="i * 100"
          :duration="700"
        >
          <div
            class="group glass rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-default relative overflow-hidden"
          >
            <!-- Background glow -->
            <div :class="`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${val.color}`" />

            <div class="relative z-10">
              <!-- Icon -->
              <div
                class="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                :style="`background: linear-gradient(135deg, #D65769, #4F1A6F)`"
              >
                <component :is="iconMap[val.icon]" :size="28" class="text-white" />
              </div>

              <!-- Arabic name -->
              <h3 class="text-2xl font-black text-white mb-1">{{ val.nameAr }}</h3>
              <!-- English name -->
              <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-4">{{ val.nameEn }}</p>
              <!-- Description -->
              <p class="text-white/50 text-sm leading-relaxed">{{ val.descriptionAr }}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, Sparkles, Brain, Star } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { values } from '@/data/values'

const iconMap: Record<string, unknown> = { Shield, Sparkles, Brain, Star }
</script>
