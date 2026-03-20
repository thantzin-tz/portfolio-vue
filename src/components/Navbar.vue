<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue';
import { Menu, X, Github, Linkedin, Twitter, Sun, Moon, Globe } from 'lucide-vue-next';

const { isDark, toggleTheme } = inject('theme') as any;
const { lang, t, toggleLanguage } = inject('i18n') as any;

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'nav.home', href: '#home' },
  { name: 'nav.about', href: '#about' },
  { name: 'nav.projects', href: '#projects' },
  { name: 'nav.skills', href: '#skills' },
  { name: 'nav.contact', href: '#contact' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 glass-navbar"
    :class="[isScrolled ? 'bg-white/50 dark:bg-black/50 py-3 shadow-lg shadow-black/20' : 'bg-white/30 dark:bg-black/30']"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="group flex items-center gap-2">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
          <span class="text-white font-bold text-xl">TZL</span>
        </div>
        <!-- <span class="text-xl font-display font-bold tracking-tight text-primary hover-glow transition-all">THANT ZIN LIN</span> -->
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <div class="flex items-center gap-6">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-sm font-medium text-secondary hover-glow transition-all relative group"
          >
            {{ t(link.name) }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <div class="h-6 w-px bg-white/10 mx-2"></div>

        <div class="flex items-center gap-2">
          <!-- Language Toggle -->
          <button 
            @click="toggleLanguage"
            class="p-2 text-secondary hover-glow hover:bg-white/5 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
          >
            <Globe :size="18" />
            {{ lang === 'en' ? 'EN' : 'JP' }}
          </button>

          <!-- Theme Toggle -->
          <button 
            @click="toggleTheme"
            class="p-2 text-secondary hover-glow hover:bg-white/5 rounded-xl transition-all"
          >
            <Sun v-if="isDark" :size="18" />
            <Moon v-else :size="18" />
          </button>

          <div class="h-6 w-px bg-white/10 mx-2"></div>

          <a href="https://github.com/thantzin-tz" class="p-2 text-secondary hover-glow hover:bg-white/5 rounded-xl transition-all"><Github :size="18" /></a>
          <a href="https://www.linkedin.com/in/thant-zin-lin/" class="p-2 text-secondary hover-glow hover:bg-white/5 rounded-xl transition-all"><Linkedin :size="18" /></a>
        </div>
      </div>

      <!-- Mobile Toggle -->
      <div class="flex items-center gap-2 md:hidden">
        <button @click="toggleTheme" class="p-2 text-secondary hover-glow"><Sun v-if="isDark" :size="20" /><Moon v-else :size="20" /></button>
        <button 
          @click="toggleMobileMenu"
          class="p-2 text-secondary hover-glow transition-all"
        >
          <Menu v-if="!isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 right-0 mt-2 mx-6 glass-chat rounded-2xl overflow-hidden md:hidden"
      >
        <div class="flex flex-col p-4">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            @click="closeMobileMenu"
            class="px-4 py-3 text-secondary hover-glow hover:bg-white/5 rounded-xl transition-all"
          >
            {{ t(link.name) }}
          </a>
          <div class="h-px bg-white/10 my-2"></div>
          <div class="flex items-center justify-between p-2">
            <button @click="toggleLanguage" class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover-glow">
              <Globe :size="18" /> {{ lang === 'en' ? 'English' : '日本語' }}
            </button>
            <div class="flex gap-4">
              <a href="#" class="text-secondary hover-glow"><Github :size="20" /></a>
              <a href="#" class="text-secondary hover-glow"><Linkedin :size="20" /></a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
