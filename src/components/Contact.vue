<template>
  <section class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
          {{ t('contact.badge') }}
        </div>
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">{{ t('contact.title') }}</h2>
        <p class="text-secondary text-lg">
          {{ t('contact.desc') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="glass-card p-8 rounded-[2rem] flex items-start gap-6">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
              <Mail :size="24" />
            </div>
            <div>
              <div class="text-xs font-bold text-muted uppercase tracking-widest mb-1">{{ t('contact.emailLabel') }}</div>
              <div class="text-lg font-medium text-primary">thantzinlin.dev@gmail.com</div>
            </div>
          </div>

          <div class="glass-card p-8 rounded-[2rem] flex items-start gap-6">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <MapPin :size="24" />
            </div>
            <div>
              <div class="text-xs font-bold text-muted uppercase tracking-widest mb-1">{{ t('contact.locationLabel') }}</div>
              <div class="text-lg font-medium text-primary">Tokyo, JP</div>
            </div>
          </div>

          <div class="glass-card p-8 rounded-[2rem] flex items-start gap-6">
            <div class="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
              <Phone :size="24" />
            </div>
            <div>
              <div class="text-xs font-bold text-muted uppercase tracking-widest mb-1">{{ t('contact.callLabel') }}</div>
              <div class="text-lg font-medium text-primary">+81 070-1556-5647</div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="handleSubmit" class="glass-card p-8 md:p-12 rounded-[2.5rem] space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold text-muted uppercase tracking-widest ml-2">{{ t('contact.form.name') }}</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  placeholder="John Doe"
                  class="w-full px-6 py-4 rounded-2xl bg-gray-70 dark:bg-white/8 border-2 border-gray-300 dark:border-white/60 hover:border-gray-400 dark:hover:border-white/50 focus:border-purple-500 shadow-sm dark:shadow-none outline-none transition-all text-primary placeholder:text-gray-500 dark:placeholder:text-white/60"
                />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold text-muted uppercase tracking-widest ml-2">{{ t('contact.form.email') }}</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  placeholder="john@example.com"
                  class="w-full px-6 py-4 rounded-2xl bg-gray-70 dark:bg-white/8 border-2 border-gray-300 dark:border-white/60 hover:border-gray-400 dark:hover:border-white/50 focus:border-purple-500 shadow-sm dark:shadow-none outline-none transition-all text-primary placeholder:text-gray-500 dark:placeholder:text-white/60"
                />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-xs font-bold text-muted uppercase tracking-widest ml-2">{{ t('contact.form.subject') }}</label>
              <input 
                v-model="form.subject"
                type="text" 
                required
                placeholder="Project Inquiry"
                class="w-full px-6 py-4 rounded-2xl bg-gray-70 dark:bg-white/8 border-2 border-gray-300 dark:border-white/60 hover:border-gray-400 dark:hover:border-white/50 focus:border-purple-500 shadow-sm dark:shadow-none outline-none transition-all text-primary placeholder:text-gray-500 dark:placeholder:text-white/60"
              />
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold text-muted uppercase tracking-widest ml-2">{{ t('contact.form.message') }}</label>
              <textarea 
                v-model="form.message"
                rows="5" 
                required
                placeholder="Tell me about your project..."
                class="w-full px-6 py-4 rounded-2xl bg-gray-70 dark:bg-white/8 border-2 border-gray-300 dark:border-white/60 hover:border-gray-400 dark:hover:border-white/50 focus:border-purple-500 shadow-sm dark:shadow-none outline-none transition-all text-primary placeholder:text-gray-500 dark:placeholder:text-white/60 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
            >
              <template v-if="!isSubmitting">
                <Send :size="18" />
                {{ t('contact.form.submit') }}
              </template>
              <template v-else>
                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {{ t('contact.form.sending') }}
              </template>
            </button>

            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div v-if="isSuccess" class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center text-sm font-medium">
                {{ t('contact.form.success') }}
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-vue-next';
import { ref, inject } from 'vue';

const { t } = inject('i18n') as any;

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    isSuccess.value = true;
    form.value = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => isSuccess.value = false, 5000);
  }, 1500);
};
</script>
