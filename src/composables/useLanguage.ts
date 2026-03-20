import { ref, onMounted } from 'vue';

export type Language = 'en' | 'jp';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      badge: 'Available for new opportunities',
      title1: 'THANT',
      title2: 'ZIN',
      title3: 'LIN',
      desc: "Software Engineer specializing in building high-performance, interactive, and modern web applications with a focus on clean code and user experience.",
      ctaPrimary: 'View My Work',
      ctaSecondary: 'Download CV'
    },
    about: {
      badge: 'About Me',
      title: 'Passionate about innovation and engineering excellence.',
      desc: "With about 5 years of experience in the IT industry, I've worked on diverse projects ranging from internal collaboration tools to complex production systems. Currently based in Japan, I focus on delivering robust and scalable solutions using modern technologies like Vue.js, Node.js, and C#.",
      stats: {
        exp: 'Years Experience',
        projects: 'Projects Completed',
        clients: 'Satisfied Teams'
      },
      features: {
        code: { title: 'Motivation & Responsibility', desc: 'I take full responsibility for my assigned tasks and strive to contribute to the team\'s success by focusing on quality improvement and meeting deadlines.' },
        design: { title: 'Eagerness to Learn', desc: 'I adapt to the fast-evolving IT industry by proactively learning and applying technologies such as C#, Java, JavaScript, PostgreSQL, and SQL Server in my projects.' },
        perf: { title: 'Communication & Teamwork', desc: 'Through my experience with Japanese companies, I fully understand the importance of Ho-Ren-So (Reporting, Contacting, Consulting) and ensure smooth communication to work efficiently within a team.' },
        access: { title: 'Problem-Solving Skills', desc: 'I flexibly tackle new challenges and quickly acquire necessary skills. My track record includes successfully automating systems using PowerShell and improving operational efficiency by optimizing complex SQL queries.' }
      }
    },
    projects: {
      badge: 'Portfolio',
      title: 'Selected Projects',
      desc: 'A collection of my work, ranging from interactive games to management systems.',
      viewAll: 'View All Projects',
      explore: 'Explore Project',
      items: [
        {
          id: 'drum',
          title: 'Drum Kit Player',
          desc: 'An interactive web-based drum kit player built with JavaScript.',
          img: '../images/drum.png',
          live: 'https://thantzin-tz.github.io/drum-kit/',
          repo: 'https://github.com/thantzin-tz/drum-kit'
        },
        {
          id: 'simon',
          title: 'Simon Game',
          desc: 'A classic memory game built with JavaScript and CSS animations.',
          img: '../images/simon.png',
          live: 'https://thantzin-tz.github.io/simon-game/',
          repo: 'https://github.com/thantzin-tz/simon-game'
        },
        {
          id: 'dice',
          title: 'Dice Game',
          desc: 'A simple and fun dice rolling game for two players.',
          img: '../images/dicegame.png',
          live: 'https://thantzin-tz.github.io/dicegame/',
          repo: 'https://github.com/thantzin-tz/dicegame'
        },
        {
          id: 'click2eat',
          title: 'Click2Eat',
          desc: 'A food ordering and management platform concept.',
          img: '../images/click2eat.png',
          live: 'https://github.com/thantzin-tz/Click2Eat',
          repo: 'https://github.com/thantzin-tz/Click2Eat'
        },
        {
          id: 'gym',
          title: 'Gym Management System',
          desc: 'A comprehensive system for managing gym memberships and operations.',
          img: '../images/gym.png',
          live: 'https://github.com/thantzin-tz/Gym-Management-System',
          repo: 'https://github.com/thantzin-tz/Gym-Management-System'
        },
      ]
    },
    skills: {
      badge: 'Expertise',
      title: 'Technical Skills',
      journeyBadge: 'Journey',
      journeyTitle: 'Work Experience',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & Tools'
      },
      experience: [
        {
          period: '2025/07 - Present',
          role: 'Full Stack Developer',
          company: 'Japan (Internal Collaboration System)',
          desc: 'Leading frontend development with Vue.js, Node.js, and PostgreSQL. Focused on environment setup with Docker and code quality improvement.'
        },
        {
          period: '2025/04 - 2025/06',
          role: 'Full Stack Developer',
          company: 'Japan (Online Examination System)',
          desc: 'Developed a web-based examination system using Vue.js, Node.js, Express, and MySQL.'
        },
        {
          period: '2024/03 - 2025/02',
          role: 'Full Stack Developer',
          company: 'Myanmar (Production System)',
          desc: 'Designed and developed UI for Android applications using Xamarin.Android and optimized SQL queries.'
        },
        {
          period: '2022/04 - 2024/02',
          role: 'Programmer',
          company: 'Myanmar (Attendance & Payroll Systems)',
          desc: 'Built management systems using Java Spring Boot, JavaScript, and PostgreSQL.'
        }
      ]
    },
    contact: {
      badge: 'Contact',
      title: "Let's connect and build something great.",
      desc: "I'm always open to discussing new opportunities and creative ideas. Feel free to reach out to me.",
      emailLabel: 'Email Me',
      locationLabel: 'Location',
      callLabel: 'Call Me',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: "Message sent successfully! I'll get back to you soon."
      }
    },
    chat: {
      title: 'TZ AI',
      status: 'Online',
      placeholder: 'Ask me anything...',
      initial: "Hi! I'm Thant Zin Lin's AI assistant. How can I help you today?",
      questions: [
        "Tell me about yourself",
        "What are your skills?",
        "Show me your projects",
        "How can I contact you?",
        "What are your strengths?",
        "Tell me more about you"
      ],
      systemInstruction: "You are a professional AI assistant for Thant Zin Lin's developer portfolio. Thant Zin Lin is a Senior Software Engineer with 5 years of real-world experience, currently based in Japan (Tokyo). He specializes in building high-performance, interactive web applications with clean code and excellent user experience. His core expertise includes Vue.js, Node.js, C#, Java, TypeScript, and SQL (SQL Server, PostgreSQL, MySQL). His real professional projects include: Min-Colla (Internal Collaboration System), Online Exam System, Production Management System, Attendance Management System, Payroll Management System, Identity Management System Batch Rebuild, Production System (Automotive), Recruitment System, and Web Page Development. He has strong experience with both frontend and backend development, database optimization, system automation using PowerShell, and working efficiently within Japanese corporate teams. He is passionate about continuous learning, problem-solving, and delivering robust, scalable solutions. Be professional, friendly, concise, and highlight his professional achievements and real work experience. If you don't know the answer, suggest contacting him via the contact form.",
      fallbackResponses: {
        projects: "Thant Zin Lin has worked on real-world projects including: Min-Colla (Internal Collaboration System), Online Exam System, Production Management System, Attendance Management System, Payroll Management System, Identity Management System Batch Rebuild, Production System (Automotive), Recruitment System, and Web Page Development. You can see details in the Projects section!",
        skills: "His core tech stack includes Vue.js, Node.js, C#, Java, TypeScript, SQL Server, PostgreSQL, MySQL, Docker, and more. He is experienced in both frontend and backend development, database optimization, and system automation using PowerShell.",
        contact: "You can reach Thant Zin Lin via the contact form on this page. He is also active on GitHub!",
        experience: "Thant Zin Lin is a Senior Software Engineer with 5+ years of real-world experience, currently based in Japan (Tokyo). He specializes in building high-performance, interactive web applications with a focus on clean code and user experience.",
        strengths: "Thant Zin Lin's key strengths are: (1) Motivation & Responsibility - He takes full responsibility for assigned tasks and focuses on quality improvement and meeting deadlines. (2) Eagerness to Learn - He continuously learns and applies new technologies to projects. (3) Communication & Teamwork - He understands the importance of Ho-Ren-So (Reporting, Contacting, Consulting) and ensures smooth team communication. (4) Problem-Solving Skills - He flexibly tackles new challenges and quickly acquires necessary skills, with a track record of automating systems and optimizing SQL queries.",
        about: "Thant Zin Lin is passionate about innovation and engineering excellence. With 5 years of experience in the IT industry, he has worked on diverse projects from internal collaboration tools to complex production systems. Currently based in Japan, he holds a BSc in Computer Science and focuses on delivering robust and scalable solutions using modern technologies.",
        default: "I'm Thant Zin Lin's AI assistant. I can tell you about his real projects, skills, or experience. Try asking a specific question!"
      }
    },
    footer: {
      rights: '© 2026 THANT ZIN LIN. All rights reserved.',
      backToTop: 'Back to Top',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Settings'
    }
  },
  jp: {
    nav: {
      home: 'ホーム',
      about: '自己紹介',
      projects: 'プロジェクト',
      skills: 'スキル',
      contact: 'お問い合わせ'
    },
    hero: {
      badge: '新しい機会を募集中',
      title1: 'タン',
      title2: 'ジン',
      title3: 'リン',
      desc: "クリーンコードとユーザーエクスペリエンスに重点を置いた、高性能でインタラクティブな最新のウェブアプリケーションの構築を専門とするシニアフロントエンドエンジニアです。",
      ctaPrimary: '作品を見る',
      ctaSecondary: '履歴書をダウンロード'
    },
    about: {
      badge: '自己紹介',
      title: 'イノベーションとエンジニアリングの卓越性に情熱を注いでいます。',
      desc: "IT業界で約5年の経験を持ち、社内コラボレーションツールから複雑な生産システムまで、多様なプロジェクトに携わってきました。現在は日本を拠点に、Vue.js、Node.js、C#などの最新技術を用いて、堅牢で拡張性の高いソリューションの提供に注力しています。",
      stats: {
        exp: '経験年数',
        projects: '完了したプロジェクト',
        clients: '満足したチーム'
      },
      features: {
        code: { title: '仕事への責任感', desc: '割り当てられたタスクに全責任を持ち、品質向上と期限厳守に注力することで、チームの成功に貢献するよう努めています。' },
        design: { title: '学習への意欲', desc: '進化するIT業界に適応するため、C#、Java、JavaScript、PostgreSQL、SQL Serverなどの技術を積極的に学習し、プロジェクトに応用しています。' },
        perf: { title: 'コミュニケーションと協働', desc: '日本の企業での経験を通じて、報告・連絡・相談（ホウレンソウ）の重要性を十分に理解し、チーム内での円滑なコミュニケーションを心がけています。' },
        access: { title: '問題解決スキル', desc: '新しい課題に柔軟に対応し、必要なスキルを素早く習得できます。PowerShellを使用したシステムの自動化やSQL クエリの最適化による業務効率化の実績があります。' }
      }
    },
    projects: {
      badge: 'ポートフォリオ',
      title: '厳選されたプロジェクト',
      desc: 'インタラクティブなゲームから管理システムまで、私の作品のコレクションです。',
      viewAll: 'すべてのプロジェクトを見る',
      explore: 'プロジェクトを詳しく見る',
      items: [
        {
          id: 'drum',
          title: 'ドラムキットプレーヤー',
          desc: 'JavaScriptで構築されたインタラクティブなウェブベースのドラムキットプレーヤー。',
          img: '../images/drum.png',
          live: 'https://thantzin-tz.github.io/drum-kit/',
          repo: 'https://github.com/thantzin-tz/drum-kit'
        },
        {
          id: 'simon',
          title: 'サイモンゲーム',
          desc: 'JavaScriptとCSSアニメーションで構築されたクラシックな記憶ゲーム。',
          img: '../images/simon.png',
          live: 'https://thantzin-tz.github.io/simon-game/',
          repo: 'https://github.com/thantzin-tz/simon-game'
        },
        {
          id: 'dice',
          title: 'ダイスゲーム',
          desc: '2人用のシンプルで楽しいサイコロ転がしゲーム。',
          img: '../images/dicegame.png',
          live: 'https://thantzin-tz.github.io/dicegame/',
          repo: 'https://github.com/thantzin-tz/dicegame'
        },
        {
          id: 'click2eat',
          title: 'Click2Eat',
          desc: '食品注文および管理プラットフォームのコンセプト。',
          img: '../images/click2eat.png',
          live: 'https://github.com/thantzin-tz/Click2Eat',
          repo: 'https://github.com/thantzin-tz/Click2Eat'
        },
        {
          id: 'gym',
          title: 'ジム管理システム',
          desc: 'ジムの会員資格と運営を管理するための包括的なシステム。',
          img: '../images/gym.png',
          live: 'https://github.com/thantzin-tz/Gym-Management-System',
          repo: 'https://github.com/thantzin-tz/Gym-Management-System'
        },
      ]
    },
    skills: {
      badge: '専門知識',
      title: 'テクニカルスキル',
      journeyBadge: '経歴',
      journeyTitle: '職務経験',
      categories: {
        frontend: 'フロントエンド',
        backend: 'バックエンド & ツール'
      },
      experience: [
        {
          period: '2025/07 - 現在',
          role: 'シニアフロントエンドエンジニア',
          company: '日本 (社内コラボレーションシステム)',
          desc: 'Vue.js、Node.js、PostgreSQLを使用したフロントエンド開発をリード。Dockerによる環境構築とコード品質の向上に注力。'
        },
        {
          period: '2025/04 - 2025/06',
          role: 'フルスタックデベロッパー',
          company: '日本 (オンライン試験システム)',
          desc: 'Vue.js、Node.js、Express、MySQLを使用したウェブベースの試験システムを開発。'
        },
        {
          period: '2024/03 - 2025/01',
          role: 'ソフトウェアエンジニア',
          company: 'ミャンマー (生産システム)',
          desc: 'Xamarin.Androidを使用したAndroidアプリケーションのUI設計・開発およびSQLクエリの最適化を担当。'
        },
        {
          period: '2023/04 - 2024/02',
          role: 'Javaデベロッパー',
          company: 'ミャンマー (勤怠・給与管理システム)',
          desc: 'Java Spring Boot、JavaScript、PostgreSQLを使用して管理システムを構築。'
        }
      ]
    },
    contact: {
      badge: 'お問い合わせ',
      title: '一緒に素晴らしいものを築きましょう。',
      desc: '新しい機会や創造的なアイデアについて話し合うことを常に楽しみにしています。お気軽にご連絡ください。',
      emailLabel: 'メール',
      locationLabel: '所在地',
      callLabel: '電話',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        submit: 'メッセージを送信',
        sending: '送信中...',
        success: 'メッセージが正常に送信されました！すぐにご連絡いたします。'
      }
    },
    chat: {
      title: 'タン・ジン・リン AI',
      status: 'オンライン',
      placeholder: '何でも聞いてください...',
      initial: 'こんにちは！タン・ジン・リンのAIアシスタントです。何かお手伝いできることはありますか？',
      questions: [
        "自己紹介をお願いします",
        "スキルについて教えてください",
        "プロジェクトを見せてください",
        "連絡方法は？",
        "あなたの強みは何ですか？",
        "もっと詳しく教えてください"
      ],
      systemInstruction: "あなたはタン・ジン・リンのデベロッパーポートフォリオ専門のプロフェッショナルAIアシスタントです。タン・ジン・リンはシニアソフトウェアエンジニアで、実務経験は5年以上、現在は日本（東京）を拠点に活動しています。彼はクリーンコードとユーザーエクスペリエンスを重視した高性能でインタラクティブなウェブアプリケーションの構築を専門としています。主な技術スタックはVue.js、Node.js、C#、Java、TypeScript、SQL（SQL Server、PostgreSQL、MySQL）です。実務プロジェクトの実績にはみんコラ（社内コラボレーションシステム）、オンライン試験システム、生産管理システム、勤怠管理システム、給与計算管理システム、ID管理バッチ再構築、自動車生産システム、採用システム、ウェブページ開発があります。フロントエンド・バックエンド両方の開発経験、データベース最適化、PowerShellによるシステム自動化、日本の企業文化での効率的なチームワークに精通しています。継続的な学習、問題解決、堅牢でスケーラブルなソリューション提供に情熱を持っています。プロフェッショナルで親しみやすく、簡潔に対応し、彼の専門的な実績と実務経験を強調してください。回答不明な場合はお問い合わせフォームからの連絡を勧めてください。",
      fallbackResponses: {
        projects: "タン・ジン・リンは以下の実務プロジェクトに携わってきました：みんコラ（社内コラボレーションシステム）、オンライン試験システム、生産管理システム、勤怠管理システム、給与計算管理システム、ID管理バッチ再構築、自動車生産システム、採用システム、ウェブページ開発。詳細はプロジェクト欄をご覧ください。",
        skills: "主な技術スタックはVue.js、Node.js、C#、Java、TypeScript、SQL Server、PostgreSQL、MySQL、Dockerなどです。フロントエンド・バックエンド両方の開発経験、データベース最適化、PowerShellによるシステム自動化に精通しています。",
        contact: "タン・ジン・リンへのご連絡は、このページのお問い合わせフォームからお願いします。GitHubでも活動しています。",
        experience: "タン・ジン・リンはシニアソフトウェアエンジニアで実務経験5年以上、現在は日本（東京）を拠点に活動しています。クリーンコードとユーザーエクスペリエンスを重視した高性能なウェブアプリケーション開発を専門としています。",
        strengths: "タン・ジン・リンの主な強みは：（1）仕事への責任感 - 割り当てられたタスクに全責任を持ち、品質向上と期限厳守に注力します。（2）学習への意欲 - 継続的に新しい技術を学び、プロジェクトに応用しています。（3）コミュニケーションと協働 - 報告・連絡・相談（ホウレンソウ）の重要性を理解し、チーム内での円滑なコミュニケーションを心がけています。（4）問題解決スキル - 新しい課題に柔軟に対応し、システム自動化やSQL最適化の実績があります。",
        about: "タン・ジン・リンはイノベーションとエンジニアリングの卓越性に情熱を注いでいます。IT業界で5年の経験を持ち、社内コラボレーションツールから複雑な生産システムまで、多様なプロジェクトに携わってきました。現在は日本を拠点に、コンピュータサイエンスの学位を持ち、堅牢で拡張性の高いソリューションの提供に注力しています。",
        default: "私はタン・ジン・リンのAIアシスタントです。実務プロジェクトやスキル、経歴についてご案内できます。ぜひご質問ください！"
      }
    },
    footer: {
      rights: '© 2026 タン・ジン・リン. 無断複写・転載を禁じます。',
      backToTop: 'トップに戻る',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      cookies: 'クッキー設定'
    }
  }
};

export function useLanguage() {
  const lang = ref<Language>('en');

  const setLanguage = (newLang: Language) => {
    lang.value = newLang;
    localStorage.setItem('lang', newLang);
  };

  const toggleLanguage = () => {
    setLanguage(lang.value === 'en' ? 'jp' : 'en');
  };

  onMounted(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'jp')) {
      lang.value = savedLang;
    }
  });

  return {
    lang,
    t: (path: string) => {
      const keys = path.split('.');
      let current: any = translations[lang.value];
      for (const key of keys) {
        if (current[key] === undefined) return path;
        current = current[key];
      }
      return current;
    },
    toggleLanguage
  };
}
