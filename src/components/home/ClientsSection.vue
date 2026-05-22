<template>
  <section class="py-20 bg-surface overflow-hidden">
    <div class="container-custom mb-10">
      <ScrollReveal direction="up">
        <SectionTitle
          eyebrow="عملاؤنا"
          title="شركاء النجاح"
          subtitle="نفخر بثقة عملائنا المميزين في مسيرة الإبداع"
          align="center"
          :gold="true"
        />
      </ScrollReveal>
    </div>

    <!-- Marquee row 1 -->
    <div class="relative overflow-hidden mb-4">
      <div class="flex gap-4 animate-marquee whitespace-nowrap">
        <ClientPill
          v-for="(client, i) in [...clients, ...clients]"
          :key="`a-${client.id}-${i}`"
          :name="client.nameAr"
          :dot-gold="i % 2 === 0"
        />
      </div>
    </div>

    <!-- Marquee row 2 (reverse) -->
    <div class="relative overflow-hidden">
      <div class="flex gap-4 animate-marquee-r whitespace-nowrap">
        <ClientPill
          v-for="(client, i) in [...clients, ...clients]"
          :key="`b-${client.id}-${i}`"
          :name="client.nameAr"
          variant="outline"
          :dot-gold="i % 2 !== 0"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { clients } from '@/data/clients'

// Inline pill component
import { defineComponent, h } from 'vue'

const ClientPill = defineComponent({
  props: {
    name: String,
    variant: { type: String, default: 'filled' },
    dotGold: { type: Boolean, default: false },
  },
  setup(props) {
    return () =>
      h(
        'div',
        {
          class: [
            'inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold shrink-0',
            props.variant === 'outline'
              ? 'glass text-white/70 border border-white/10'
              : 'bg-white/5 border border-white/10 text-white/80',
          ],
        },
        [
          h('span', {
            class: 'w-2 h-2 rounded-full ms-0 me-2 shrink-0',
            style: props.dotGold
              ? 'background: linear-gradient(135deg, #D1AF3D, #f5d76e)'
              : 'background: linear-gradient(135deg, #BE315B, #451B88)',
          }),
          props.name,
        ]
      )
  },
})
</script>
