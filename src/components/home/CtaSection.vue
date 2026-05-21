<template>
  <section class="py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0" style="background: linear-gradient(135deg, #1a0a2e 0%, #2d1040 50%, #1a0a1a 100%)" />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20 blur-3xl rounded-full pointer-events-none"
      style="background: linear-gradient(135deg, #4F1A6F, #D65769)"
    />

    <div class="relative z-10 container-custom text-center">
      <ScrollReveal direction="up">
        <p class="text-primary font-semibold tracking-widest text-sm uppercase mb-6">هل أنت جاهز؟</p>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          ابدأ رحلتك الإبداعية
          <br />
          <span class="gradient-text">مع جُحة اليوم</span>
        </h2>
        <p class="text-white/50 text-lg max-w-xl mx-auto mb-12">
          لنصنع معاً علامة تجارية لا تُنسى — تواصل معنا وسنكون سعداء بسماع قصتك.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" :delay="200">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink to="/contact" class="btn-primary text-lg px-12 py-4">
            تواصل معنا الآن
          </RouterLink>
          <RouterLink to="/services" class="btn-outline text-lg px-12 py-4">
            استكشف خدماتنا
          </RouterLink>
        </div>
      </ScrollReveal>

      <!-- Contact quick info -->
      <ScrollReveal direction="fade" :delay="400">
        <div class="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40 text-sm">
          <a href="tel:+96879976611" class="hover:text-primary transition-colors flex items-center gap-2" dir="ltr">
            <PhoneCall :size="16" />
            +968 7997 6611
          </a>
          <span class="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <a href="mailto:Info@takejuhha.com" class="hover:text-primary transition-colors flex items-center gap-2">
            <Mail :size="16" />
            Info@takejuhha.com
          </a>
          <span class="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <a href="https://instagram.com/takejuhha" target="_blank" rel="noopener" class="hover:text-primary transition-colors flex items-center gap-2">
            <Instagram :size="16" />
            @takejuhha
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhoneCall, Mail, Instagram } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>
