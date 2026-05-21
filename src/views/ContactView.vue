<template>
  <div>
    <!-- Page hero -->
    <section class="relative pt-40 pb-20 overflow-hidden" style="background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, #D65769, transparent)" />
      <div class="container-custom text-center relative z-10">
        <ScrollReveal direction="up">
          <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-4">نحن هنا لك</p>
          <h1 class="text-4xl md:text-6xl font-black text-white mb-6">تواصل معنا</h1>
          <p class="text-white/50 text-lg max-w-xl mx-auto">
            ابدأ مشروعك الإبداعي معنا — تواصل وسيرد عليك فريقنا في أقرب وقت
          </p>
        </ScrollReveal>
      </div>
      <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-dark to-transparent" />
    </section>

    <!-- Contact content -->
    <section class="section-padding bg-dark">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <!-- Form (larger) -->
          <div class="lg:col-span-3">
            <ScrollReveal direction="up">
              <h2 class="text-2xl font-bold text-white mb-2">ابدأ محادثة</h2>
              <p class="text-white/50 mb-8">أخبرنا عن مشروعك وسنعود إليك خلال 24 ساعة</p>
            </ScrollReveal>
            <ContactForm />
          </div>

          <!-- Info (smaller) -->
          <div class="lg:col-span-2">
            <ScrollReveal direction="up">
              <h2 class="text-2xl font-bold text-white mb-2">معلومات التواصل</h2>
              <p class="text-white/50 mb-8">يسعدنا التواصل معك عبر أي من القنوات التالية</p>
            </ScrollReveal>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA banner -->
    <section class="py-24 relative overflow-hidden" style="background: linear-gradient(135deg, #4F1A6F, #D65769)">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px" />
      <div class="container-custom text-center relative z-10">
        <ScrollReveal direction="up">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">جاهز لبناء علامتك؟</h2>
          <p class="text-white/70 mb-8 text-lg">دعنا نصنع معاً شيئاً يدوم</p>
          <a href="tel:+96879976611" class="inline-flex items-center gap-3 bg-white text-secondary font-bold px-10 py-4 rounded-full hover:-translate-y-1 transition-transform duration-300 shadow-xl">
            <Phone :size="20" />
            اتصل الآن
          </a>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
</script>
