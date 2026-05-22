<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Gradient background -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 40%, #2d1040 70%, #0a0a0f 100%)"
    />

    <!-- Animated orbs -->
    <div
      class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 animate-float blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #451B88, transparent)"
    />
    <div
      class="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full opacity-15 animate-float-slow blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #BE315B, transparent)"
    />
    <div
      class="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 animate-pulse-slow blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #BE315B, #451B88)"
    />
    <div
      class="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full opacity-10 animate-float blur-3xl pointer-events-none"
      style="background: radial-gradient(circle, #D1AF3D, transparent)"
    />
    <div
      class="absolute top-1/3 left-1/3 w-40 h-40 rounded-full opacity-8 animate-float-slow blur-2xl pointer-events-none"
      style="background: radial-gradient(circle, #79D5A0, transparent)"
    />

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px"
    />

    <!-- Content -->
    <div class="relative z-10 container-custom text-center py-32 pt-40">
      <ScrollReveal direction="fade" :duration="800">
        <p class="text-primary font-semibold tracking-widest text-sm mb-6 uppercase">
          وكالة إبداعية متخصصة في التسويق والعلامات التجارية
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" :delay="100" :duration="900">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-shadow">
          <span class="text-white">صياغة </span>
          <span class="gradient-text">تجارب</span>
          <br />
          <span class="text-white">تسويقية </span>
          <span class="gradient-text-r">خالدة</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" :delay="200" :duration="800">
        <p class="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          نحن ملتزمون بصياغة قصص علامات تجارية فريدة تربط وتُلهم وتدوم. نحول الأفكار إلى تجارب أيقونية تلامس الجمهور بعمق.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" :delay="300" :duration="700">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink to="/portfolio" class="btn-primary text-lg px-10 py-4">
            استكشف أعمالنا
          </RouterLink>
          <RouterLink to="/contact" class="btn-outline text-lg px-10 py-4">
            ابدأ مشروعك
          </RouterLink>
        </div>
      </ScrollReveal>

      <!-- Scroll indicator -->
      <ScrollReveal direction="fade" :delay="800">
        <div class="mt-20 flex flex-col items-center gap-2 text-white/30">
          <span class="text-xs tracking-widest">اكتشف أكثر</span>
          <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
        </div>
      </ScrollReveal>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>
