<template>
  <div>
    <HeroSection />
    <AboutPreview />
    <ServicesPreview />
    <PortfolioPreview />
    <ClientsSection />
    <StatsSection />
    <QuoteSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import AboutPreview from '@/components/home/AboutPreview.vue'
import ServicesPreview from '@/components/home/ServicesPreview.vue'
import PortfolioPreview from '@/components/home/PortfolioPreview.vue'
import ClientsSection from '@/components/home/ClientsSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import QuoteSection from '@/components/home/QuoteSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'
</script>
