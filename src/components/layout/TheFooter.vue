<template>
  <footer class="bg-surface border-t border-white/5 pt-20 pb-10">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <img src="/logo.png" alt="Take Juhha" class="h-12 w-auto object-contain mb-4" />
          <p class="text-white/50 leading-relaxed mb-6 max-w-xs">
            وكالة إبداعية متخصصة في صياغة تجارب تسويقية خالدة تربط علامتك بجمهورها بعمق.
          </p>
          <!-- Social -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 transition-all duration-300"
            >
              <component :is="social.icon" :size="16" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-6">روابط سريعة</h4>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.path">
              <RouterLink
                :to="item.path"
                class="text-white/50 hover:text-primary transition-colors duration-300 text-sm"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold mb-6">تواصل معنا</h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-3 text-white/50 text-sm">
              <Phone :size="16" class="text-primary shrink-0" />
              <a href="tel:+96879976611" class="hover:text-white transition-colors" dir="ltr">+968 7997 6611</a>
            </li>
            <li class="flex items-center gap-3 text-white/50 text-sm">
              <Mail :size="16" class="text-primary shrink-0" />
              <a href="mailto:Info@takejuhha.com" class="hover:text-white transition-colors">Info@takejuhha.com</a>
            </li>
            <li class="flex items-center gap-3 text-white/50 text-sm">
              <Instagram :size="16" class="text-primary shrink-0" />
              <a href="https://instagram.com/takejuhha" target="_blank" rel="noopener" class="hover:text-white transition-colors">@takejuhha</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

      <!-- Bottom bar -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <p>© {{ new Date().getFullYear() }} جُحة — جميع الحقوق محفوظة</p>
        <p>
          صُنع بـ ❤ لإبداع لا حدود له
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Phone, Mail, Instagram, Twitter, Linkedin } from 'lucide-vue-next'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'الرئيسية',    path: '/'          },
  { label: 'من نحن',      path: '/about'     },
  { label: 'الخدمات',     path: '/services'  },
  { label: 'أعمالنا',     path: '/portfolio' },
  { label: 'تواصل معنا',  path: '/contact'   },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/takejuhha', icon: Instagram },
  { label: 'Twitter',   href: 'https://twitter.com/takejuhha',   icon: Twitter   },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/takejuhha', icon: Linkedin },
]
</script>
