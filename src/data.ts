import { Cloud, Code2, Container, Cpu, Database, GitBranch, Network, Settings, Shield, Terminal, Users, Zap, Braces } from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2017
}

export const siteData = {
  navItems: [
    { id: 'about', label: 'Почему я' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Стек' },
    { id: 'contact', label: 'Связаться' }
  ],
  hero: {
    title: "M ico",
    buttonValue: "Обсудить проект",
    description: "Беру проекты с нуля и подключаюсь к существующим. Снижаю облачный чек на 30–40%, проектирую архитектуру под 10K RPS. Работаю с AI, высоконагруженными сервисами и микросервисами на Node.js и Go.",
    stats: [
      { number: '40+', label: 'сданных проектов' },
      { number: '9 из 10', label: 'клиентов возвращаются' },
      { number: '15 мин', label: 'первый ответ' }
    ]
  },
  about: {
    title: "ПОЧЕМУ Я",
    title1: "Экспертиза",
    subTitle1: "которая",
    subSubTitle1: "приносит",
    subSubSubTitle1: "деньги",
    title2: "Я не просто пишу код. Я нахожу узкие места в вашем продукте и превращаю их в точки роста —",
    subTitle2: "Мои клиенты зарабатывают больше, а не просто получают «работающее приложение»",
    items: [
      {
        title: "Сокращаю расходы на инфраструктуру",
        description: "В одном из проектов снизил ежемесячный чек AWS с 280 000 ₽ до 168 000 ₽. Секрет простой — грамотное проектирование и переход на serverless-архитектуру. Это не разовая оптимизация, экономию я закладываю ещё на этапе проектирования.",
        metric: "ДО 40% ЭКОНОМИИ",
        gradient: "from-emerald-500 to-cyan-500",
        icon: Shield,
        features: ["Аудит текущей архитектуры", "Переход на serverless", "Прогнозируемый бюджет"]
      },
      {
        title: "Ускоряю time-to-market",
        description: "Для edtech-стартапа оптимизировал API, среднее время ответа упало с 340 мс до 87 мс. Конверсия в регистрацию выросла на 18%. Быстрый продукт — это не комфорт, это прямые деньги.",
        metric: "18% К КОНВЕРСИИ",
        gradient: "from-purple-500 to-pink-500",
        icon: Zap,
        features: ["Оптимизация API", "Аудит узких мест", "Рост конверсии"]
      },
      {
        title: "Интегрируюсь без потерь",
        description: "Вливаюсь в проект за 1–2 дня. Уважаю текущий стек и процессы, работаю и с Node.js, и с Go, не диктую правила, а улучшаю то, что уже есть.",
        metric: "1–2 ДНЯ НА СТАРТ",
        gradient: "from-blue-500 to-indigo-500",
        icon: Users,
        features: ["Быстрое погружение", "Уважение к стеку"]
      }
    ],
    stats: [
      {
        number: "40+",
        label: "Проектов под ключ с 2017 года",
        suffix: "",
        gradient: "from-purple-500 to-pink-500",
        delay: "0s"
      },
      {
        number: getExperienceYears().toString(),
        label: `${getExperienceYears()} ${getExperienceYears() === 1 ? 'год' : getExperienceYears() < 5 ? 'года' : 'лет'} разработки`,
        suffix: "",
        gradient: "from-blue-500 to-cyan-500",
        delay: "0.1s"
      },
      {
        number: "100",
        label: "Соблюдённых дедлайнов",
        suffix: "%",
        gradient: "from-green-500 to-emerald-500",
        delay: "0.2s"
      },
      {
        number: "от 2000",
        label: "Стоимость часа моей экспертизы",
        suffix: " ₽",
        gradient: "from-orange-500 to-red-500",
        delay: "0.3s"
      }
    ],
  },

  skills: {
    title: "СТЕК ТЕХНОЛОГИЙ",
    title1: "ЧТО ИСПОЛЬЗУЮ",
    subtitle1: "Только боевые инструменты, которые прошли проверку реальными проектами",
    skillIcons: {
      "Node.js": Terminal,
      "Go": Braces,
      "Микросервисы": Network,
      "API Design": GitBranch,
      "Архитектура": Settings,
      "Архитектура систем": Settings,
      "React": Code2,
      "TypeScript": Zap,
      "Оптимизация": Settings,
      "UX/UI": Settings,
      "Дизайн": Settings,
      "Route map": GitBranch,
      "Быстрая работа": Zap,
      "Docker": Container,
      "Kubernetes": Cloud,
      "AWS/GCP": Cloud,
      "CI/CD": GitBranch,
      "MySQL": Database,
      "PostgreSQL": Database,
      "Redis": Cpu,
      "Брокеры сообщений": Network,
      "MongoDB": Database
    },
    categories: [
      {
        category: "Backend",
        level: "Эксперт",
        skills: [
          { name: "Node.js", level: 95 },
          { name: "Go", level: 88 },
          { name: "Микросервисы", level: 90 },
          { name: "API Design", level: 92 },
          { name: "Архитектура систем", level: 88 }
        ]
      },
      {
        category: "Frontend",
        level: "Эксперт",
        skills: [
          { name: "React", level: 90 },
          { name: "TypeScript", level: 88 },
          { name: "UI/UX", level: 82 },
          { name: "Дизайн", level: 85 }
        ]
      },
      {
        category: "Инфраструктура",
        level: "Эксперт",
        skills: [
          { name: "Docker", level: 90 },
          { name: "Kubernetes", level: 90 },
          { name: "AWS/GCP", level: 90 },
          { name: "CI/CD", level: 90 }
        ]
      },
      {
        category: "Базы данных",
        level: "Эксперт",
        skills: [
          { name: "MySQL", level: 90 },
          { name: "PostgreSQL", level: 90 },
          { name: "MongoDB", level: 90 },
          { name: "Брокеры сообщений", level: 80 }
        ]
      }
    ],
    stats: {
      title1: "Актуальный стек",
      subTitle1: "Только проверенные технологии",
      title2: "AI-интеграции",
      subTitle2: "GPT, Llama, векторные БД",
      title3: "Полный цикл",
      subTitle3: "От идеи до продакшена и поддержки",
    }
  },
  contacts: {
    title: "СТАРТ РАБОТЫ",
    title1: "ОБСУДИМ ВАШ ПРОЕКТ?",
    title2: "Напишите",
    title3: "мне сейчас",
    title4: "Отвечаю за 15 минут. Детальная оценка, архитектурный план и точный бюджет — в течение 24 часов после погружения в задачу.",
    footerTitle1: "Быстрый старт",
    footerSubTitle1: "Ответ за 15 минут",
    footerTitle2: "Конфиденциально",
    footerSubTitle2: "NDA до начала обсуждения",
    footerTitle3: "Прозрачно",
    footerSubTitle3: "от 2000 ₽ / час работы",
    footerTitle: "Готовы начать?",
    footer: `© Mico ${new Date().getFullYear()}`,
    items: [
      {
        platform: "Telegram",
        platformName: "Telegram",
        label: "@MicoNext",
        url: "https://t.me/mico_developer",
        icon: "Telegram",
        status: "Онлайн",
        description: "Лучший способ для быстрого старта",
      },
      {
        platform: "Max",
        platformName: "Max",
        label: "@Mico",
        url: "https://max.ru/u/f9LHodD0cOJmwq4CSauqNaa8RqiSw930HGhG7EZEhHXs4aAL26zHZyqMua4",
        icon: "Max",
        status: "Доступен",
        description: "Пишите или звоните",
      },
      {
        platform: "Email",
        platformName: "Почта",
        label: "miconext@yandex.ru",
        url: "mailto:miconext@yandex.ru",
        icon: "Email",
        description: "Для подробного ТЗ и документов",
        status: "Проверяю часто"
      },
      {
        platform: "Phone",
        platformName: "Телефон",
        label: "+7 (918) 466 50 96",
        url: "tel:+79184665096",
        icon: "Phone",
        description: "Проверка статуса и быстрые консультации",
        status: "Доступен"
      },
      {
        platform: "Обо мне",
        platformName: "MicoИнженер",
        label: "MicoEngineer",
        url: "https://okmic.github.io/MicoEngineer",
        icon: "Mico",
        status: "Онлайн",
        description: "Рассказываю про себя",
      },
      {
        platform: "Проекты",
        platformName: "MicoПроекты",
        label: "MicoProjects",
        url: "https://okmic.github.io/MicoProjects",
        icon: "Mico",
        status: "Онлайн",
        description: "С чем приходилось работать",
      },
    ]
  }
}