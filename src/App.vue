<script setup lang="ts">
import { onMounted, ref, provide } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import ChatWidget from './components/ChatWidget.vue';
import BackToTop from './components/BackToTop.vue';
import Footer from './components/Footer.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './composables/useTheme';
import { useLanguage } from './composables/useLanguage';

gsap.registerPlugin(ScrollTrigger);

const { isDark, toggleTheme } = useTheme();
const { lang, t, toggleLanguage } = useLanguage();

// Provide these globally
provide('theme', { isDark, toggleTheme });
provide('i18n', { lang, t, toggleLanguage });

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    isLoading.value = false;
    
    // Initial animations
    gsap.from('.section-fade', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.section-fade',
        start: 'top 80%',
      }
    });
  }, 1500);
});
</script>

<template>
  <div class="min-h-screen transition-colors duration-500" :class="isDark ? 'bg-black text-white' : 'bg-gray-50 text-black'">
    <!-- Background Elements -->
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-100">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-pink-600/10 blur-[100px] rounded-full"></div>
    </div>

    <!-- Loading Screen -->
    <Transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black">
        <div class="relative">
          <div class="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full"></div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <div v-show="!isLoading" class="relative z-10">
      <Navbar />
      
      <main>
        <Hero id="home" />
        <About id="about" class="section-fade" />
        <Projects id="projects" class="section-fade" />
        <Skills id="skills" class="section-fade" />
        <Contact id="contact" class="section-fade" />
      </main>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
@reference "tailwindcss";

:root {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, .font-display {
  font-family: 'Outfit', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-black;
}

::-webkit-scrollbar-thumb {
  @apply bg-white/10 rounded-full hover:bg-white/20 transition-colors;
}
</style>
