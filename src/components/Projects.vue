<script setup lang="ts">
import { inject, computed } from 'vue';
import { ExternalLink, Github } from 'lucide-vue-next';
import { translations } from '../composables/useLanguage';

const i18nContext = inject('i18n') as any;
const { t, lang } = i18nContext;

const projects = computed(() => {
  return translations[lang.value as 'en' | 'jp'].projects.items;
});
</script>

<template>
  <section class="py-24 bg-black/[0.02] dark:bg-white/[0.02]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="max-w-2xl">
          <div class="inline-block px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            {{ t('projects.badge') }}
          </div>
          <h2 class="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
            {{ t('projects.title') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            {{ t('projects.desc') }}
          </p>
        </div>
        
        <a href="https://github.com/thantzin-tz" target="_blank" class="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          {{ t('projects.viewAll') }}
          <ExternalLink :size="16" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group relative glass rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
        >
          <!-- Image Container -->
          <div class="aspect-[4/3] overflow-hidden relative">
            <img 
              :src="project.img" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-xl font-bold group-hover:text-purple-500 transition-colors text-primary">{{ project.title }}</h3>
              <div class="flex gap-3">
                <a :href="project.repo" target="_blank" class="p-2 glass glass-hover rounded-xl text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all" title="GitHub Repo">
                  <Github :size="18" />
                </a>
                <a :href="project.live" target="_blank" class="p-2 glass glass-hover rounded-xl text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all" title="Live Demo">
                  <ExternalLink :size="18" />
                </a>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
              {{ project.desc }}
            </p>
            
            <a :href="project.live" target="_blank" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group/btn">
              {{ t('projects.explore') }}
              <div class="w-8 h-px bg-black/20 dark:bg-white/20 group-hover/btn:w-12 transition-all"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
