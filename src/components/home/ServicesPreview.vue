<template>
  <section class="section-padding bg-surface relative overflow-hidden">
    <!-- Background -->
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background: radial-gradient(ellipse at 100% 0%, #D65769, transparent 60%), radial-gradient(ellipse at 0% 100%, #4F1A6F, transparent 60%)"
    />

    <div class="container-custom">
      <ScrollReveal direction="up">
        <SectionTitle
          eyebrow="خدماتنا"
          title="نبني علامتك التجارية"
          subtitle="سبع خدمات متكاملة صُممت لتحويل علامتك التجارية من فكرة إلى تجربة لا تُنسى"
          align="center"
        />
      </ScrollReveal>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <ScrollReveal
          v-for="(service, i) in services.slice(0, 6)"
          :key="service.id"
          direction="up"
          :delay="i * 80"
          :duration="700"
        >
          <ServiceCard :service="service" variant="compact" />
        </ScrollReveal>
      </div>

      <ScrollReveal direction="fade" :delay="400">
        <div class="text-center">
          <RouterLink to="/services" class="btn-primary inline-flex">
            جميع الخدمات
          </RouterLink>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import { services } from '@/data/services'
</script>
