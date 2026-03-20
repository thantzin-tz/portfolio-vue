<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp } from 'lucide-vue-next';

const isVisible = ref(false);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollY / totalHeight) * 100;
  
  isVisible.value = scrollPercentage > 30;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-10 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-10 scale-90"
  >
    <button 
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-32 right-8 z-[60] w-14 h-14 glass-button rounded-full flex items-center justify-center text-primary shadow-2xl shadow-purple-500/20 hover:scale-110 hover-glow active:scale-95 transition-all"
    >
      <ArrowUp :size="24" />
    </button>
  </Transition>
</template>
