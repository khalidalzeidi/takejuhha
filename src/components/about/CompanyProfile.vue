<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <!-- Background glow -->
    <div
      class="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-10 blur-3xl rounded-full pointer-events-none"
      style="background: linear-gradient(135deg, #4F1A6F, #D65769)"
    />

    <div class="relative z-10 container-custom">
      <ScrollReveal direction="up">
        <div class="mb-12 md:mb-16 text-center">
          <p class="text-primary font-semibold text-sm tracking-widest uppercase mb-3">ملف الشركة</p>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
            تعرّف على <span class="gradient-text">جُحة بالكامل</span>
          </h2>
          <div class="h-1 w-16 rounded-full mb-6 mx-auto" style="background: linear-gradient(90deg, #D65769, #4F1A6F)" />
          <p class="text-white/60 text-lg max-w-2xl leading-relaxed mx-auto">
            حمّل ملف الشركة للاطلاع على خدماتنا وأعمالنا وقصتنا بالتفصيل
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" :delay="200">
        <div class="mt-12 glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

          <!-- PDF Icon Visual -->
          <div class="shrink-0 flex flex-col items-center gap-3">
            <div class="w-32 h-40 rounded-2xl flex flex-col items-center justify-center relative" style="background: linear-gradient(135deg, #4F1A6F, #D65769)">
              <FileText :size="48" class="text-white" />
              <span class="absolute bottom-3 text-white/80 text-xs font-bold tracking-widest">PDF</span>
              <!-- Folded corner -->
              <div class="absolute top-0 end-0 w-0 h-0"
                style="border-style: solid; border-width: 0 0 20px 20px; border-color: transparent transparent #0a0a0f transparent;" />
            </div>
            <p class="text-white/40 text-xs">JUHHA Profile 2025</p>
          </div>

          <!-- Text content -->
          <div class="flex-1 text-center md:text-start">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
              ملف الشركة <span class="gradient-text">2025</span>
            </h3>
            <p class="text-white/60 text-base leading-relaxed mb-8 max-w-xl">
              يحتوي الملف على نبذة شاملة عن وكالة جُحة — رؤيتنا، خدماتنا، نماذج من أعمالنا، وطريقة عملنا.
              يمكنك مشاركته مع شريكك أو فريقك للتعريف بنا.
            </p>

            <div class="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <!-- View button -->
              <a
                :href="profileUrl"
                target="_blank"
                rel="noopener"
                class="btn-primary flex items-center gap-3 text-base px-8 py-4"
              >
                <Eye :size="18" />
                عرض الملف
              </a>

              <!-- Download button -->
              <a
                :href="profileUrl"
                :download="downloadName"
                class="btn-outline flex items-center gap-3 text-base px-8 py-4"
              >
                <Download :size="18" />
                تحميل الملف
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, Eye, Download } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const profileUrl = '/JUHHA-Profile-2025.pdf'
const downloadName = 'JUHHA Profile 2025.pdf'
</script>
