<template>
  <ScrollReveal direction="left" :duration="900">
    <GlassCard :hover="false">
      <h3 class="text-2xl font-bold text-white mb-8">أرسل لنا رسالة</h3>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name -->
        <div>
          <label class="block text-white/70 text-sm font-medium mb-2">الاسم الكامل *</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="أدخل اسمك الكامل"
            required
            :class="['w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-primary transition-colors', errors.name ? 'border-red-500' : '']"
          />
          <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-white/70 text-sm font-medium mb-2">البريد الإلكتروني *</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@email.com"
            required
            dir="ltr"
            :class="['w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-primary transition-colors text-start', errors.email ? 'border-red-500' : '']"
          />
          <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-white/70 text-sm font-medium mb-2">رقم الهاتف</label>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="+968 XXXX XXXX"
            dir="ltr"
            class="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-primary transition-colors text-start"
          />
        </div>

        <!-- Service -->
        <div>
          <label class="block text-white/70 text-sm font-medium mb-2">الخدمة المطلوبة</label>
          <select
            v-model="form.service"
            class="w-full glass rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
            style="background: rgba(255,255,255,0.05)"
          >
            <option value="" class="bg-surface">اختر الخدمة...</option>
            <option v-for="s in services" :key="s.id" :value="s.nameAr" class="bg-surface">
              {{ s.nameAr }}
            </option>
          </select>
        </div>

        <!-- Message -->
        <div>
          <label class="block text-white/70 text-sm font-medium mb-2">رسالتك *</label>
          <textarea
            v-model="form.message"
            rows="5"
            placeholder="أخبرنا عن مشروعك وأهدافك..."
            required
            :class="['w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-primary transition-colors resize-none', errors.message ? 'border-red-500' : '']"
          />
          <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
            <Loader2 :size="20" class="animate-spin" />
            جاري الإرسال...
          </span>
          <span v-else>إرسال الرسالة</span>
        </button>

        <!-- Success -->
        <Transition name="fade">
          <div v-if="submitted" class="glass rounded-xl p-4 border border-green-500/30 text-center">
            <CheckCircle :size="24" class="text-green-400 mx-auto mb-2" />
            <p class="text-green-400 font-medium">تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</p>
          </div>
        </Transition>
      </form>
    </GlassCard>
  </ScrollReveal>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Loader2, CheckCircle } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import GlassCard from '@/components/ui/GlassCard.vue'
import { services } from '@/data/services'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const errors = reactive({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const submitted = ref(false)

function validate(): boolean {
  errors.name = form.name.trim() ? '' : 'الاسم مطلوب'
  errors.email = form.email.trim()
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'البريد الإلكتروني غير صحيح'
    : 'البريد الإلكتروني مطلوب'
  errors.message = form.message.trim() ? '' : 'الرسالة مطلوبة'
  return !errors.name && !errors.email && !errors.message
}

async function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true
  // Simulate submission delay
  await new Promise((r) => setTimeout(r, 1500))
  isSubmitting.value = false
  submitted.value = true
  Object.assign(form, { name: '', email: '', phone: '', service: '', message: '' })
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
input:focus, textarea:focus, select:focus {
  border-color: #BE315B;
  box-shadow: 0 0 0 2px rgba(214, 87, 105, 0.2);
}
</style>
