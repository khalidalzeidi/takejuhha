<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass-dark shadow-2xl shadow-black/30 py-3'
        : 'bg-transparent py-5',
      isHidden ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <span class="text-2xl font-black gradient-text tracking-wide">جُحة</span>
        <span class="text-white/40 text-xs font-light hidden sm:block">TAKE JUHHA</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            $route.path === item.path
              ? 'text-white bg-white/10'
              : 'text-white/70 hover:text-white hover:bg-white/5',
          ]"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- CTA + Mobile toggle -->
      <div class="flex items-center gap-3">
        <RouterLink
          to="/contact"
          class="hidden sm:flex btn-primary text-sm px-6 py-2.5"
        >
          ابدأ مشروعك
        </RouterLink>

        <button
          @click="toggleMobile"
          class="lg:hidden w-10 h-10 flex items-center justify-center rounded-full glass text-white hover:bg-white/10 transition-colors"
          aria-label="القائمة"
        >
          <Menu :size="20" />
        </button>
      </div>
    </div>
  </header>

  <MobileMenu :is-open="isMobileOpen" @close="closeMobile" />
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import MobileMenu from './MobileMenu.vue'
import { useNavbar } from '@/composables/useNavbar'
import type { NavItem } from '@/types'

const { isScrolled, isHidden, isMobileOpen, toggleMobile, closeMobile } = useNavbar()

const navItems: NavItem[] = [
  { label: 'الرئيسية',    path: '/'          },
  { label: 'من نحن',      path: '/about'     },
  { label: 'الخدمات',     path: '/services'  },
  { label: 'أعمالنا',     path: '/portfolio' },
  { label: 'تواصل معنا',  path: '/contact'   },
]
</script>
