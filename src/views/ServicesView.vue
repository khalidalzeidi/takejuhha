<template>
  <div>
    <!-- Page hero -->
    <section class="relative pt-40 pb-20 overflow-hidden" style="background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, #BE315B, transparent)" />
      <div class="container-custom text-center relative z-10">
        <ScrollReveal direction="up">
          <p class="text-primary text-sm font-semibold tracking-widest uppercase mb-4">ما نقدمه لك</p>
          <h1 class="text-4xl md:text-6xl font-black text-white mb-6">خدماتنا</h1>
          <p class="text-white/50 text-lg max-w-2xl mx-auto">
            سبع خدمات متكاملة صُممت لتحويل علامتك التجارية من فكرة إلى تجربة لا تُنسى
          </p>
        </ScrollReveal>
      </div>
      <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-dark to-transparent" />
    </section>

    <!-- Services grid -->
    <section class="section-padding bg-dark">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal
            v-for="(service, i) in services"
            :key="service.id"
            direction="up"
            :delay="i * 80"
            :duration="700"
            :class="i === 6 ? 'md:col-span-2 lg:col-span-1' : ''"
          >
            <ServiceCard :service="service" variant="full" class="h-full" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Process section -->
    <section class="section-padding bg-surface">
      <div class="container-custom">
        <ScrollReveal direction="up">
          <SectionTitle
            eyebrow="كيف نعمل"
            title="منهجيتنا الإبداعية"
            subtitle="نتبع نهجاً منهجياً يضمن تقديم أفضل النتائج لعلامتك"
            align="center"
          />
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ScrollReveal
            v-for="(step, i) in steps"
            :key="i"
            direction="up"
            :delay="i * 100"
          >
            <div class="text-center">
              <div class="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-black text-lg text-white"
                style="background: linear-gradient(135deg, #BE315B, #451B88)">
                {{ i + 1 }}
              </div>
              <h4 class="font-bold text-white mb-2">{{ step.title }}</h4>
              <p class="text-white/50 text-sm">{{ step.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 relative overflow-hidden" style="background: linear-gradient(135deg, #451B88, #BE315B)">
      <div class="container-custom text-center">
        <ScrollReveal direction="up">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">هل أنت مستعد لتطوير علامتك؟</h2>
          <p class="text-white/70 mb-8">تواصل معنا اليوم ونبدأ رحلة الإبداع معاً</p>
          <RouterLink to="/contact" class="inline-flex btn-outline border-white text-white hover:bg-white hover:text-secondary">
            ابدأ الآن
          </RouterLink>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import { services } from '@/data/services'

const steps = [
  { title: 'الاستكشاف',   desc: 'نفهم علامتك التجارية وأهدافها وجمهورها المستهدف' },
  { title: 'التخطيط',     desc: 'نضع استراتيجية مخصصة تلبي احتياجاتك الفريدة' },
  { title: 'التنفيذ',     desc: 'فريقنا الإبداعي ينفذ الاستراتيجية بأعلى معايير الجودة' },
  { title: 'القياس',      desc: 'نقيس النتائج ونحسن باستمرار لضمان أفضل عائد' },
]
</script>
