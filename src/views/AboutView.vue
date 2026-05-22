<template>
  <div>
    <!-- Page hero -->
    <section class="relative pt-40 pb-20 overflow-hidden" style="background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, #451B88, transparent)" />
      <div class="container-custom text-center relative z-10">
        <ScrollReveal direction="up">
          <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-4">اكتشف من نحن</p>
          <h1 class="text-4xl md:text-6xl font-black text-white mb-6">من نحن</h1>
          <p class="text-white/50 text-lg max-w-xl mx-auto">نحن أكثر من وكالة — نحن شركاء في نجاحك الإبداعي</p>
        </ScrollReveal>
      </div>
      <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-dark to-transparent" />
    </section>

    <VisionMission />
    <ValuesGrid />
    <OurStory />
    <CompanyProfile />

    <!-- CTA -->
    <section class="section-padding bg-surface">
      <div class="container-custom text-center">
        <ScrollReveal direction="up">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">هل تريد أن تعرف أكثر؟</h2>
          <p class="text-white/50 mb-8">تواصل معنا وسنكون سعداء بالإجابة على أسئلتك</p>
          <RouterLink to="/contact" class="btn-primary">تواصل معنا</RouterLink>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import VisionMission from '@/components/about/VisionMission.vue'
import ValuesGrid from '@/components/about/ValuesGrid.vue'
import OurStory from '@/components/about/OurStory.vue'
import CompanyProfile from '@/components/about/CompanyProfile.vue'
</script>
