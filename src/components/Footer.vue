<script setup lang="ts">
import { inject } from 'vue';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-vue-next';

const { t } = inject('i18n') as any;
</script>

<template>
  <footer class="py-12 glass-footer relative z-10">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Logo & Copyright -->
        <div class="flex flex-col items-center md:items-start gap-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">P</span>
            </div>
            <span class="text-lg font-display font-bold tracking-tight text-primary">PORTFOLIO</span>
          </div>
          <p class="text-secondary text-sm">
            {{ t('footer.rights') }}
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <a href="https://github.com/thantzin-tz" class="w-10 h-10 glass-button flex items-center justify-center text-secondary hover-glow transition-all">
            <Github :size="20" />
          </a>
          <a href="https://www.linkedin.com/in/thant-zin-lin/" class="w-10 h-10 glass-button flex items-center justify-center text-secondary hover-glow transition-all">
            <Linkedin :size="20" />
          </a>
          <a href="https://x.com/Thant_Zin_TZ?s=07" class="w-10 h-10 glass-button flex items-center justify-center text-secondary hover-glow transition-all">
            <Twitter :size="20" />
          </a>
          <a href="https://www.instagram.com/thantzinlin_tzl" class="w-10 h-10 glass-button flex items-center justify-center text-secondary hover-glow transition-all">
            <Instagram :size="20" />
          </a>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
        <a href="#" class="hover-glow transition-colors">{{ t('footer.privacy') }}</a>
        <div class="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
        <a href="#" class="hover-glow transition-colors">{{ t('footer.terms') }}</a>
        <div class="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
        <a href="#" class="hover-glow transition-colors">{{ t('footer.cookies') }}</a>
      </div>
    </div>
  </footer>
</template>
