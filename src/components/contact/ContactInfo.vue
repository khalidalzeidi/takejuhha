<template>
  <div class="space-y-6">
    <ScrollReveal direction="right" :duration="800">
      <GlassCard :hover="true">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style="background: linear-gradient(135deg, #BE315B, #451B88)">
            <Phone :size="20" class="text-white" />
          </div>
          <div>
            <p class="text-white/50 text-sm mb-1">اتصل بنا</p>
            <a href="tel:+96879976611" class="text-white font-bold text-lg hover:text-primary transition-colors" dir="ltr">
              +968 7997 6611
            </a>
          </div>
        </div>
      </GlassCard>
    </ScrollReveal>

    <ScrollReveal direction="right" :delay="100" :duration="800">
      <GlassCard :hover="true">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style="background: linear-gradient(135deg, #451B88, #BE315B)">
            <Mail :size="20" class="text-white" />
          </div>
          <div>
            <p class="text-white/50 text-sm mb-1">البريد الإلكتروني</p>
            <a href="mailto:Info@takejuhha.com" class="text-white font-bold text-lg hover:text-primary transition-colors">
              Info@takejuhha.com
            </a>
          </div>
        </div>
      </GlassCard>
    </ScrollReveal>

    <ScrollReveal direction="right" :delay="200" :duration="800">
      <GlassCard :hover="true">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style="background: linear-gradient(135deg, #BE315B, #451B88)">
            <Instagram :size="20" class="text-white" />
          </div>
          <div>
            <p class="text-white/50 text-sm mb-1">انستغرام</p>
            <a href="https://instagram.com/takejuhha" target="_blank" rel="noopener" class="text-white font-bold text-lg hover:text-primary transition-colors">
              @takejuhha
            </a>
          </div>
        </div>
      </GlassCard>
    </ScrollReveal>

    <!-- Quote -->
    <ScrollReveal direction="right" :delay="300" :duration="800">
      <div class="glass rounded-2xl p-6 border-s-4 border-primary">
        <p class="text-white/70 text-sm leading-relaxed italic">
          "نحن لا نبيع خدمات، نحن نبني شراكات إبداعية حقيقية تنمو معك"
        </p>
        <p class="text-primary text-xs mt-2 font-semibold">— فريق جُحة</p>
      </div>
    </ScrollReveal>
  </div>
</template>

<script setup lang="ts">
import { Phone, Mail, Instagram } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
</script>
