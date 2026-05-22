<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 opacity-5 pointer-events-none" style="background: radial-gradient(ellipse at 50% 0%, #451B88, transparent 70%)" />

    <div class="container-custom">
      <ScrollReveal direction="up">
        <SectionTitle
          eyebrow="من نحن"
          title="رؤيتنا ومهمتنا"
          subtitle="نحن نؤمن بأن الإبداع هو اللغة التي تتحدث بها العلامات التجارية الناجحة"
          align="center"
        />
      </ScrollReveal>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Vision -->
        <ScrollReveal direction="right" :duration="900">
          <GlassCard :hover="false" class="h-full relative overflow-hidden group">
            <div class="absolute top-0 end-0 w-32 h-32 opacity-10 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-20"
              style="background: linear-gradient(135deg, #BE315B, #451B88)" />
            <div class="relative z-10">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style="background: linear-gradient(135deg, #BE315B, #451B88)">
                <Eye :size="22" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
              <p class="text-white/60 leading-relaxed mb-4">
                صياغة تجارب تسويقية خالدة — نصيغ تجارب علامات تجارية فريدة تربط وتُلهم وتدوم.
              </p>
              <p class="text-white/50 leading-relaxed text-sm">
                مع التركيز على الابتكار والأصالة والتصميم الخالد، نحول الأفكار إلى تجارب علامة تجارية أيقونية تلامس الجمهور بعمق.
              </p>
            </div>
          </GlassCard>
        </ScrollReveal>

        <!-- Mission -->
        <ScrollReveal direction="left" :duration="900">
          <GlassCard :hover="false" class="h-full relative overflow-hidden group">
            <div class="absolute top-0 start-0 w-32 h-32 opacity-10 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-20"
              style="background: linear-gradient(135deg, #451B88, #BE315B)" />
            <div class="relative z-10">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style="background: linear-gradient(135deg, #451B88, #BE315B)">
                <Target :size="22" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">مهمتنا</h3>
              <p class="text-white/60 leading-relaxed mb-4">
                مساعدة العلامات التجارية على ترك بصمة لا تُنسى من خلال إنشاء روابط ذات معنى تدوم طويلاً.
              </p>
              <p class="text-white/50 leading-relaxed text-sm">
                نسعى لأن نكون الشريك الإبداعي الذي يفهم علامتك التجارية، يؤمن برؤيتها، ويعمل بلا كلل لتحقيق أهدافها الكبيرة.
              </p>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Eye, Target } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
</script>
