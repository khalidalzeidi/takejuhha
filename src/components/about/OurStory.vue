<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Story text -->
        <div>
          <ScrollReveal direction="right" :duration="900">
            <SectionTitle
              eyebrow="قصتنا"
              title="مستوحون من البطيخ"
              subtitle="مظهره بسيط من الخارج — لكنه مليء بالمفاجآت من الداخل"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="100">
            <p class="text-white/60 leading-relaxed mb-6">
              كيان نابض بالحياة يجمع بين العقول المبدعة، تغذيه روح الفضول وشغف الابتكار. مستوحى من البطيخ — مظهره بسيط من الخارج لكنه مليء بالمفاجآت من الداخل.
            </p>
            <p class="text-white/60 leading-relaxed mb-6">
              نحتفي بالأفكار الجريئة والرؤى المختلفة. فريقنا هو عائلة من المحترفين الشغوفين، يتقنون تحويل كل ما هو غير متوقع إلى شيء فريد ومميز.
            </p>
            <p class="text-white/60 leading-relaxed">
              في جُحة، الإبداع ليس مجرد عمل نقوم به، بل هو جزء لا يتجزأ من هويتنا.
            </p>
          </ScrollReveal>
        </div>

        <!-- Visual story element -->
        <ScrollReveal direction="left" :duration="900">
          <div class="relative flex items-center justify-center h-80 md:h-96">
            <!-- Outer circle (simple exterior) -->
            <div class="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-white/10 flex items-center justify-center animate-spin-slow">
              <div
                v-for="i in 8"
                :key="i"
                class="absolute w-3 h-3 rounded-full"
                :style="{
                  background: `linear-gradient(135deg, #BE315B, #451B88)`,
                  transform: `rotate(${i * 45}deg) translateX(140px) rotate(-${i * 45}deg)`,
                }"
              />
            </div>

            <!-- Inner colorful burst (inside) -->
            <div class="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl" style="box-shadow: 0 0 80px rgba(214,87,105,0.4)">
              <div class="absolute inset-0" style="background: linear-gradient(135deg, #451B88 0%, #BE315B 50%, #451B88 100%)" />
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-5xl font-black">جُ</span>
              </div>
              <!-- Color petals -->
              <div class="absolute inset-0 opacity-30" style="background: conic-gradient(from 0deg, #BE315B, #451B88, #BE315B, #451B88, #BE315B)" />
            </div>

            <!-- Floating text labels -->
            <div class="absolute top-4 end-4 glass rounded-xl px-4 py-2 text-xs text-white/60 animate-float">إبداع</div>
            <div class="absolute bottom-8 start-4 glass rounded-xl px-4 py-2 text-xs text-white/60 animate-float-slow">أصالة</div>
            <div class="absolute top-1/3 start-0 glass rounded-xl px-4 py-2 text-xs text-white/60 animate-float" style="animation-delay: 1s">ابتكار</div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>
