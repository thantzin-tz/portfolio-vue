<script setup lang="ts">
import { inject, computed } from 'vue';
import { Code, Layers, Zap, Brain } from 'lucide-vue-next';
import { translations } from '../composables/useLanguage';

const i18nContext = inject('i18n') as any;
const { t, lang } = i18nContext;

const stats = [
  { label: 'Experience', value: '5 years' },
  { label: 'Education', value: 'BSc. Computer Science' },
  { label: 'Location', value: 'Tokyo, Japan' },
];

const features = computed(() => {
  const aboutTranslations = translations[lang.value as 'en' | 'jp'].about.features;
  
  return [
    {
      icon: Code,
      title: aboutTranslations.code.title,
      desc: aboutTranslations.code.desc,
      color: 'text-blue-400'
    },
    {
      icon: Layers,
      title: aboutTranslations.design.title,
      desc: aboutTranslations.design.desc,
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: aboutTranslations.perf.title,
      desc: aboutTranslations.perf.desc,
      color: 'text-yellow-400'
    },
    {
      icon: Brain,
      title: aboutTranslations.access.title,
      desc: aboutTranslations.access.desc,
      color: 'text-green-400'
    }
  ];
});
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div>
          <div class="inline-block px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
            {{ t('about.badge') }}
          </div>
          <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
            {{ t('about.title') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
            {{ t('about.desc') }}
          </p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-6 mb-10">
            <div v-for="stat in stats" :key="stat.label" class="glass p-4 rounded-2xl text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary mb-1">{{ stat.value }}</div>
              <div class="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{{ t(stat.label) }}</div>
            </div>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="glass glass-hover p-8 rounded-3xl group"
          >
            <div class="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <component :is="feature.icon" :class="feature.color" :size="24" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
