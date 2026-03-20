<template>
  <section ref="heroRef" class="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
    <!-- Animated Background Grid -->
    <div class="absolute inset-0 z-0 opacity-20 dark:opacity-20 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, rgba(128,128,128,0.2) 1px, transparent 0); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <!-- Badge -->
          <div class="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-purple-500/30">
            <Sparkles :size="16" class="text-purple-500" />
            <span class="text-xs font-bold tracking-wider uppercase text-purple-600 dark:text-purple-200">{{ t('hero.badge') }}</span>
          </div>

          <!-- Title -->
          <h1 class="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            {{ t('hero.title1') }} {{ t('hero.title2') }}<br />
            <span class="text-gradient">{{ t('hero.title3') }}</span>
          </h1>

          <!-- Description -->
          <p class="hero-desc text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            {{ t('hero.desc') }}
          </p>

          <!-- Buttons -->
          <div class="hero-btns flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#projects" 
              class="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-purple-500/10"
            >
              <span class="relative z-10 flex items-center gap-2">
                {{ t('hero.ctaPrimary') }}
                <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <button 
              @click="downloadCV"
              class="px-8 py-4 glass glass-hover rounded-2xl font-bold flex items-center gap-2 text-primary hover:cursor-pointer transition-all active:scale-95"
            >
              <Download :size="18" />
              {{ t('hero.ctaSecondary') }}
            </button>
          </div>
        </div>

        <!-- Profile Photo -->
        <div class="hero-photo relative shrink-0">
          <div class="hero-photo-inner relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <!-- Glass Frame -->
            <div class="absolute inset-0 rounded-full border-2 border-white/20 dark:border-white/10 glass z-10"></div>
            
            <!-- Glow Effect -->
            <div class="absolute inset-[-10px] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl z-0"></div>
            
            <!-- Image -->
            <div class="absolute inset-4 rounded-full overflow-hidden z-20 border-4 border-white/10 shadow-2xl">
              <img 
                src="/images/tzl-photo.png" 
                alt="Thant Zin Lin"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <!-- Floating Badges -->
            <div @click="openChat"class="absolute -top-4 -right-4 glass p-4 rounded-2xl z-30 animate-bounce shadow-xl border-white/20" style="animation-duration: 3s">
              <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                <Sparkles :size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
import { ArrowRight, Download, Sparkles } from 'lucide-vue-next';
import gsap from 'gsap';
import { useChat } from '../composables/useAiChat';

const { t } = inject('i18n') as any;
const heroRef = ref<HTMLElement | null>(null);
const { openChat } = useChat();

const downloadCV = () => {
  const cvPath = '/cv/Thant-Zin-Lin-CV.pdf';
  
  // Create an anchor element and trigger download
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'Thant-Zin-Lin-CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

onMounted(() => {
  const tl = gsap.timeline();
  
  tl.from('.hero-title', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.2
  })
  .from('.hero-photo', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.hero-desc', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-btns', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-badge', {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
  }, '-=0.8');

  // Floating animation for photo
  gsap.to('.hero-photo-inner', {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
});
</script>
