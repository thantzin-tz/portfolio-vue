<template>
  <teleport to="body">
    <div class="fixed bottom-8 right-8 transform-none" style="z-index:2147483647;">
    <!-- Toggle Button -->
    <button 
      @click="handleToggle"
      class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
    >
      <MessageSquare v-if="!isOpen" :size="28" class="group-hover:rotate-12 transition-transform" />
      <X v-else :size="28" />
      
      <!-- Notification Dot -->
      <div v-if="!isOpen" class="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-black animate-bounce"></div>
    </button>

    <!-- Chat Panel -->
    <Transition
      enter-active-class="transition duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
      enter-from-class="opacity-0 translate-y-10 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-10 scale-95"
    >
      <div 
        v-if="isOpen"
        class="absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-2rem)] h-[550px] glass rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl shadow-black/50"
      >
        <!-- Header -->
  <div class="p-6 bg-white/20 dark:bg-black/60 border-b border-white/10 dark:border-white/12 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Bot :size="20" />
            </div>
            <div>
              <div class="text-sm font-bold text-primary">{{ t('chat.title') }}</div>
              <div class="flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{{ t('chat.status') }}</span>
              </div>
            </div>
          </div>
          <Sparkles :size="18" class="text-purple-400 opacity-50" />
        </div>

        <!-- Messages -->
        <div 
          ref="scrollContainer"
          class="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
        >
          <div 
            v-for="msg in messages" 
            :key="msg.id"
            class="flex flex-col"
            :class="[msg.sender === 'user' ? 'items-end' : 'items-start']"
          >
            <div 
              class="max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed"
              :class="[
                msg.sender === 'user' 
                  ? 'bg-purple-600 text-white rounded-tr-none' 
                  : 'bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-tl-none'
              ]"
            >
              {{ msg.text }}
            </div>
            <span class="text-[10px] text-gray-500 mt-1 px-1">
              {{ msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
            </span>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex items-start gap-2">
            <div class="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4 rounded-2xl rounded-tl-none">
              <div class="flex gap-1">
                <div class="w-1.5 h-1.5 bg-gray-700 dark:bg-white rounded-full animate-bounce" style="animation-delay: 0s"></div>
                <div class="w-1.5 h-1.5 bg-gray-700 dark:bg-white rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-1.5 h-1.5 bg-gray-700 dark:bg-white rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Questions -->
          <div class="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          <button 
            v-for="q in predefinedQuestions" 
            :key="q"
            @click="sendMessage(q)"
            class="whitespace-nowrap px-3 py-1.5 rounded-full bg-black/15 dark:bg-white/12 border border-black/20 dark:border-white/20 text-[10px] font-bold text-gray-700 dark:text-white hover:text-purple-500 hover:bg-white/10 transition-all"
          >
            {{ q }}
          </button>
        </div>

        <!-- Input -->
    <div class="p-6 bg-white/20 dark:bg-black/60 border-t border-white/10 dark:border-white/12">
          <form @submit.prevent="sendMessage(input)" class="relative">
            <input 
              v-model="input"
              type="text" 
              :placeholder="t('chat.placeholder')"
              class="w-full pl-6 pr-14 py-4 rounded-2xl bg-black/10 dark:bg-black/40 border border-black/10 dark:border-white/10 focus:border-purple-500/50 outline-none transition-all text-sm text-primary placeholder:text-gray-500"
            />
            <button 
              type="submit"
              class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center hover:bg-purple-500 transition-colors"
            >
              <Send :size="18" />
            </button>
          </form>
        </div>
      </div>
    </Transition>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, inject, computed } from 'vue';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-vue-next';
import { GoogleGenAI } from "@google/genai";
import { translations } from '../composables/useLanguage';
import { useChat } from '../composables/useAiChat';

const i18nContext = inject('i18n') as any;
const { t, lang } = i18nContext;

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const { isOpen, toggleChat } = useChat();
const input = ref('');
const messages = ref<Message[]>([]);
const isTyping = ref(false);
const scrollContainer = ref<HTMLElement | null>(null);

const scrollToBottom = async () => {
  await nextTick();
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
  }
};

const predefinedQuestions = computed(() => t('chat.questions'));

// Get the system instruction based on current language
const getSystemInstruction = () => {
  const currentLang = lang.value as 'en' | 'jp';
  return translations[currentLang].chat.systemInstruction;
};

const getAIResponse = async (userText: string): Promise<string> => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    // Fallback if API key is not set
    const text = userText.toLowerCase();
    const currentLangValue = lang.value as 'en' | 'jp';
    const fallbackResponses = translations[currentLangValue].chat.fallbackResponses;

    if (text.includes('project') || text.includes('プロジェクト') || text.includes('実績')) {
      return fallbackResponses.projects;
    } else if (text.includes('tech') || text.includes('stack') || text.includes('skill') || text.includes('use') || text.includes('技術') || text.includes('スキル')) {
      return fallbackResponses.skills;
    } else if (text.includes('contact') || text.includes('連絡') || text.includes('問い合わせ')) {
      return fallbackResponses.contact;
    } else if (text.includes('strength') || text.includes('strong') || text.includes('quality') || text.includes('強み') || text.includes('特徴') || text.includes('強い')) {
      return fallbackResponses.strengths;
    } else if (text.includes('experience') || text.includes('about') || text.includes('who') || text.includes('more') || text.includes('経歴') || text.includes('自己紹介') || text.includes('詳しく')) {
      return fallbackResponses.experience || fallbackResponses.about;
    }
    return fallbackResponses.default;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userText,
      config: {
        systemInstruction: getSystemInstruction(),
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again or contact Thant Zin Lin directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having some trouble connecting to my brain right now. Please try again later!";
  }
};

const sendMessage = async (text: string) => {
  if (!text.trim()) return;

  messages.value.push({
    id: Date.now(),
    text,
    sender: 'user',
    timestamp: new Date()
  });

  input.value = '';
  scrollToBottom();

  // AI Response
  isTyping.value = true;
  const aiResponse = await getAIResponse(text);
  isTyping.value = false;
  
  messages.value.push({
    id: Date.now() + 1,
    text: aiResponse,
    sender: 'ai',
    timestamp: new Date()
  });
  scrollToBottom();
};

// const toggleChat = () => {
//   isOpen.value = !isOpen.value;
//   if (isOpen.value) scrollToBottom();
// };
const handleToggle = () => {
  toggleChat();
  if (isOpen.value) scrollToBottom();
};

onMounted(() => {
  messages.value.push({
    id: 1,
    text: t('chat.initial'),
    sender: 'ai',
    timestamp: new Date()
  });
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
