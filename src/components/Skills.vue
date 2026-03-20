<script setup lang="ts">
import { inject, computed } from 'vue';
import { translations } from '../composables/useLanguage';

const i18nContext = inject('i18n') as any;
const { t, lang } = i18nContext;

const skillCategories = computed(() => [
  {
    title: 'Languages / Frontend',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'C#', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'Vue.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'HTML / CSS / jQuery', level: 85 },
      { name: 'ASP.net', level: 80 },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL Server', level: 90 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
    ]
  },
  {
    title: 'Infrastructure / Tools',
    skills: [
      { name: 'Windows', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'VSCode', level: 90 },
      { name: 'Eclipse', level: 80 },
      { name: 'SVN', level: 75 },
    ]
  }
]);

const experience = computed(() => {
  return translations[lang.value as 'en' | 'jp'].skills.experience;
});
</script>

<template>
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20">
        <!-- Skills Section -->
        <div>
          <div class="inline-block px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-widest mb-4">
            {{ t('skills.badge') }}
          </div>
          <h2 class="text-4xl font-display font-bold mb-12 text-primary">{{ t('skills.title') }}</h2>
          
          <div class="space-y-12">
            <div v-for="category in skillCategories" :key="category.title">
              <h3 class="text-lg font-bold mb-6 text-gray-400 flex items-center gap-3">
                {{ category.title }}
                <div class="flex-1 h-px bg-black/10 dark:bg-white/10"></div>
              </h3>
              <div class="space-y-6">
                <div v-for="skill in category.skills" :key="skill.name">
                  <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ skill.name }}</span>
                    <span class="text-xs font-bold text-primary">{{ skill.level }}%</span>
                  </div>
                  <div class="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      :style="{ width: `${skill.level}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div>
          <div class="inline-block px-3 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
            {{ t('skills.journeyBadge') }}
          </div>
          <h2 class="text-4xl font-display font-bold mb-12 text-primary">{{ t('skills.journeyTitle') }}</h2>

          <div class="space-y-8">
            <div 
              v-for="(item, index) in experience" 
              :key="item.company"
              class="relative pl-8 group"
            >
              <!-- Timeline Line -->
              <div v-if="index !== experience.length - 1" class="absolute left-[11px] top-8 bottom-[-32px] w-px bg-black/10 dark:bg-white/10"></div>
              
              <!-- Timeline Dot -->
              <div class="absolute left-0 top-2 w-6 h-6 rounded-full glass flex items-center justify-center group-hover:scale-125 transition-transform">
                <div class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              </div>

              <div class="glass glass-hover p-8 rounded-3xl">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 class="text-xl font-bold text-primary">{{ item.role }}</h3>
                    <div class="text-purple-600 dark:text-purple-400 font-medium text-sm">{{ item.company }}</div>
                  </div>
                  <div class="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {{ item.period }}
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
