import { ref } from 'vue';

const isOpen = ref(false);

export function useChat() {
  const toggleChat = () => {
    isOpen.value = !isOpen.value;
  };

  const openChat = () => {
    isOpen.value = true;
  };

  const closeChat = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    toggleChat,
    openChat,
    closeChat
  };
}
