import { ref, watch, onMounted } from 'vue';

export function useTheme() {
  const isDark = ref(true);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateTheme();
  };

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      // Default to dark as requested
      isDark.value = true;
    }
    updateTheme();
  });

  return {
    isDark,
    toggleTheme
  };
}
