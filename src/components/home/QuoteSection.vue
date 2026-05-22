<template>
  <section class="py-28 bg-dark relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    <div class="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div
      class="absolute start-8 top-1/2 -translate-y-1/2 font-black pointer-events-none select-none"
      style="font-size: 20rem; line-height: 1; color: rgba(209, 175, 61, 0.08)"
    >
      "
    </div>

    <div class="container-custom relative z-10">
      <ScrollReveal direction="up" :duration="1000">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
            "تكون الإبداعية هي آخر ميزة غير عادلة يمكننا استخدامها قانونياً للتفوق على منافسينا"
          </p>
          <div class="flex items-center justify-center gap-3">
            <div class="h-px w-16" style="background: linear-gradient(to left, #D1AF3D, transparent)" />
            <span class="text-gold font-semibold text-sm tracking-wider">جُحة — فلسفة الإبداع</span>
            <div class="h-px w-16" style="background: linear-gradient(to right, #D1AF3D, transparent)" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>
