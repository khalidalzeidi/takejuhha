<template>
  <Transition name="mobile-menu">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 flex flex-col"
      style="background: linear-gradient(135deg, #0a0a0f 0%, #451B88 60%, #BE315B 100%)"
    >
      <!-- Close button -->
      <div class="flex items-center justify-between px-6 pt-6 pb-8">
        <img src="/logo.png" alt="Take Juhha" class="h-9 w-auto object-contain" />
        <button
          @click="emit('close')"
          class="w-10 h-10 flex items-center justify-center rounded-full glass text-white hover:bg-white/10 transition-colors"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- Nav links -->
      <nav class="flex-1 flex flex-col justify-center px-8 gap-2">
        <RouterLink
          v-for="(item, i) in navItems"
          :key="item.path"
          :to="item.path"
          @click="emit('close')"
          :class="[
            'text-3xl font-bold py-4 px-4 rounded-2xl transition-all duration-300 text-start',
            $route.path === item.path
              ? 'text-white bg-white/10'
              : 'text-white/70 hover:text-white hover:bg-white/5',
          ]"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Bottom contact -->
      <div class="px-8 pb-12">
        <div class="glass rounded-2xl p-6 text-center">
          <p class="text-white/60 text-sm mb-2">تواصل معنا</p>
          <a href="tel:+96879976611" class="text-white font-bold text-xl block mb-1" dir="ltr">+968 7997 6611</a>
          <a href="mailto:Info@takejuhha.com" class="text-primary text-sm">Info@takejuhha.com</a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import type { NavItem } from '@/types'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const navItems: NavItem[] = [
  { label: 'الرئيسية',    path: '/'          },
  { label: 'من نحن',      path: '/about'     },
  { label: 'الخدمات',     path: '/services'  },
  { label: 'أعمالنا',     path: '/portfolio' },
  { label: 'تواصل معنا',  path: '/contact'   },
]
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
