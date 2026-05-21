<template>
  <section class="section-padding bg-dark relative overflow-hidden">
    <!-- Background accent -->
    <div
      class="absolute top-0 start-0 w-1/2 h-full opacity-5 pointer-events-none"
      style="background: radial-gradient(ellipse at 0% 50%, #4F1A6F, transparent)"
    />

    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Images mosaic -->
        <ScrollReveal direction="right" :duration="900">
          <div class="relative h-96 md:h-[500px]">
            <div
              class="absolute top-0 end-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl"
              style="box-shadow: 0 25px 50px rgba(214, 87, 105, 0.2)"
            >
              <img
                src="/images/img56.jpg"
                alt="أعمال جُحة"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div class="absolute bottom-0 start-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary/30">
              <img
                src="/images/img58.jpg"
                alt="مشاريع جُحة"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div class="absolute top-1/4 start-1/4 w-1/3 h-1/3 rounded-xl overflow-hidden shadow-xl border-2 border-primary/30">
              <img
                src="/images/img60.jpg"
                alt="إبداع جُحة"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <!-- Decorative circle -->
            <div
              class="absolute bottom-8 end-4 w-20 h-20 rounded-full border-2 border-primary/30 animate-spin-slow"
              style="border-style: dashed"
            />
          </div>
        </ScrollReveal>

        <!-- Text content -->
        <div>
          <ScrollReveal direction="left" :duration="900">
            <SectionTitle
              eyebrow="من نحن"
              title="كيان نابض بالإبداع"
              subtitle="مستوحى من البطيخ — مظهره بسيط من الخارج لكنه مليء بالمفاجآت من الداخل"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="100" :duration="800">
            <p class="text-white/60 leading-relaxed mb-6">
              في جُحة، نجمع بين العقول المبدعة، تغذيها روح الفضول وشغف الابتكار. فريقنا هو عائلة من المحترفين الشغوفين، يتقنون تحويل كل ما هو غير متوقع إلى شيء فريد ومميز.
            </p>
            <p class="text-white/60 leading-relaxed mb-10">
              الإبداع في جُحة ليس مجرد عمل نقوم به، بل هو جزء لا يتجزأ من هويتنا. نحن هنا لنصنع بصمة لا تُنسى لعلامتك التجارية.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" :delay="200" :duration="700">
            <div class="flex items-center gap-4">
              <RouterLink to="/about" class="btn-primary">
                اعرف أكثر عنا
              </RouterLink>
              <RouterLink to="/portfolio" class="text-primary font-semibold hover:text-white transition-colors flex items-center gap-2">
                أعمالنا
                <span class="text-lg">←</span>
              </RouterLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>
