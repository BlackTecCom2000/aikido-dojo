import type { Language, Instructor, BeltRank, Testimonial } from '../types';

export interface TranslationSchema {
  nav: {
    brandName: string;
    kanji: string;
    philosophy: string;
    techniques: string;
    schedule: string;
    sensei: string;
    belts: string;
    reviews: string;
    faq: string;
    register: string;
    myAccount: string;
  };
  hero: {
    badge: string;
    chiefSenseiBadge: string;
    headingLine1: string;
    headingLine2Italic: string;
    headingLine2Suffix: string;
    subtitle: string;
    ctaDesktop: string;
    ctaMobile: string;
    ctaButton: string;
    stats: {
      dojoYears: string;
      activeStudents: string;
      blackBelts: string;
    };
  };
  about: {
    quote: string;
    quoteAuthor: string;
    btnSayHello: string;
    btnStayInformed: string;
    ensoCaption: string;
    tagline: string;
    mainParagraph: string;
    senseiWelcome: string;
    pillars: Array<{
      title: string;
      kanji: string;
      description: string;
    }>;
  };
  features: {
    stickyHeading: string;
    startFree: string;
    ctaText: string;
    items: Array<{
      id: string;
      title: string;
      subTitle: string;
      description: string;
      kanji: string;
      tags: string[];
    }>;
  };
  instructors: {
    title: string;
    subtitle: string;
    lineageBadge: string;
    lineageText: string;
    chiefMasterTitle: string;
    chiefMasterQuote: string;
    items: Instructor[];
  };
  belts: {
    title: string;
    subtitle: string;
    gradingInfo: string;
    items: BeltRank[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  schedule: {
    title: string;
    subtitle: string;
    tabs: {
      all: string;
      beginners: string;
      adults: string;
      kids: string;
      weapons: string;
    };
    days: {
      monWedFri: string;
      tueThuSat: string;
      sunday: string;
    };
    bookTrial: string;
  };
  auth: {
    modalTitle: string;
    modalSubtitle: string;
    tabRegister: string;
    tabLogin: string;
    fullName: string;
    phone: string;
    email: string;
    groupLabel: string;
    groups: {
      beginners: string;
      adults: string;
      kids: string;
      weapons: string;
    };
    expLabel: string;
    expOptions: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    scheduleLabel: string;
    submitRegister: string;
    submitLogin: string;
    successMessage: string;
    studentBadgeTitle: string;
    studentIdLabel: string;
    statusLabel: string;
    statusActive: string;
    approvedBy: string;
    closeBadge: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    tagline: string;
    chiefMaster: string;
    rights: string;
    location: string;
    contacts: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  ru: {
    nav: {
      brandName: "ТЭНСИН АЙКИДО",
      kanji: "合氣道",
      philosophy: "Философия",
      techniques: "Техники",
      schedule: "Расписание",
      sensei: "Табаров Фотеҳ",
      belts: "Пояса",
      reviews: "Отзывы",
      faq: "Вопросы",
      register: "Регистрация",
      myAccount: "Мой Профиль",
    },
    hero: {
      badge: "Академия Боевого Искусства Айкидо",
      chiefSenseiBadge: "Под руководством главного тренера Табарова Фотеҳа (3 Дан Айкидо Айкикай)",
      headingLine1: "Искусство побеждать без борьбы",
      headingLine2Italic: "путь гармонии и силы",
      headingLine2Suffix: "",
      subtitle: "Традиционное Айкидо Айкикай. Обучение самообороне, внутренней стойкости, контролю энергии (Ки) и уважению под наставничеством мастера международного уровня.",
      ctaDesktop: "Первое пробное занятие — бесплатно. Набор во все группы!",
      ctaMobile: "Пробное занятие бесплатно. Запишись!",
      ctaButton: "Записаться к Мастеру",
      stats: {
        dojoYears: "30+ лет на татами",
        activeStudents: "600+ учеников",
        blackBelts: "40+ чёрных поясов (Дан)",
      },
    },
    about: {
      quote: "«Истинная победа — это победа над собой, здесь и сейчас. Сила Айкидо не в том, чтобы сокрушить противника, а в том, чтобы соединиться с его движением и восстановить мир.»",
      quoteAuthor: "— Абдуллозода Ҷумъахон (Президент Федерации Айкидо)",
      btnSayHello: "Написать Сэнсэю",
      btnStayInformed: "Задать вопрос",
      ensoCaption: "Кацухаяби — Победа над собой",
      tagline: "Традиция Айкикай / Дух Самурая",
      mainParagraph: "Школа Тэнсин Айкидо основана Шиханом Абдуллозода Ҷумъахон для передачи подлинного духа японского боевого искусства. Мы обучаем мягкому перенаправлению силы, искусству падений (Укэми), освобождению от захватов и фехтованию на деревянных мечах (Боккэн).",
      senseiWelcome: "«Добро пожаловать на татами. Возраст, пол и физическая форма не имеют значения — важна лишь ваша готовность учиться и развивать силу духа.»",
      pillars: [
        {
          title: "Мусуби (Единение)",
          kanji: "結び",
          description: "Способность сливаться с силой и скоростью противника, чувствуя его намерение без сопротивления.",
        },
        {
          title: "Ирими (Вход в центр)",
          kanji: "入身",
          description: "Решительный и безопасный вход в мертвую зону атаки с одновременным уходом с линии удара.",
        },
        {
          title: "Тэнкан (Круговой поворот)",
          kanji: "転換",
          description: "Спиральное вращение тела, позволяющее пропустить силу атаки мимо себя и перехватить контроль.",
        },
        {
          title: "Дзансин (Непрерывная осознанность)",
          kanji: "残心",
          description: "Состояние кристальной ясности ума, спокойствия и присутствия духа до, во время и после техники.",
        },
      ],
    },
    features: {
      stickyHeading: "Техники Айкидо, текущие подобно воде",
      startFree: "Начать тренировки с Мастером",
      ctaText: "Никакой агрессии и жестких травм. Только чистая биомеханика, грация и эффективная самооборона.",
      items: [
        {
          id: "nage-waza",
          title: "Бросковая техника (Нагэ-вадза & Укэми)",
          subTitle: "Искусство кругового сброса энергии и мягких падений",
          description: "Броски Сихонагэ, Ириминагэ, Кокюнагэ и Кайтэннагэ. Использование инерции нападающего против него самого с безопасной страховкой на татами.",
          kanji: "投げ技",
          tags: ["Ириминагэ", "Сихонагэ", "Укэми"],
        },
        {
          id: "katame-waza",
          title: "Болевые контроли и фиксации (Катамэ-вадза)",
          subTitle: "Мгновенная нейтрализация без нанесения травм",
          description: "Техники Иккё, Никкё, Санкё, Ёнкё и Гоккё. Контроль суставов кисти, локтя и плеча, позволяющий обездвижить любого нападающего.",
          kanji: "固技",
          tags: ["Иккё", "Никкё", "Санкё", "Котэгаэси"],
        },
        {
          id: "kokyu-ho",
          title: "Дыхание и энергия Ки (Кокю-хо & Хара)",
          subTitle: "Концентрация центра тяжести и невозмутимость",
          description: "Древние дыхательные практики Айкидо. Развитие несгибаемой руки (Унбендабл Арм), непоколебимого баланса и снятия стресса.",
          kanji: "呼吸法",
          tags: ["Энергия Ки", "Хара", "Медитация"],
        },
        {
          id: "buki-waza",
          title: "Оружие самураев (Боккэн & Дзё)",
          subTitle: "Школа фехтования деревянным мечом и шестом",
          description: "Традиционная система ката Айки-кэн (меч) и Айки-дзё (шест). Закаляет чувство дистанции (Ма-ай), идеальную осанку и точность ударов.",
          kanji: "武器技",
          tags: ["Боккэн", "Дзё", "Танто-дори"],
        },
      ],
    },
    instructors: {
      title: "Главный Наставник и Тренерский Состав",
      subtitle: "Официальное признание Всемирного Центра Айкидо Айкикай (Хомбу Додзё, Токио, Япония).",
      lineageBadge: "Традиционная линия передачи Айкикай",
      lineageText: "О-Сэнсэй Морихэй Уэсиба → Всемирный центр Айкидо Айкикай (Токио) → Табаров Фотеҳ",
      chiefMasterTitle: "Главный тренер Додзё",
      chiefMasterQuote: "«Айкидо — это зеркало вашей души. То, как вы двигаетесь на татами, показывает, как вы встречаете жизненные трудности. Научитесь уступать, чтобы побеждать.»",
      items: [
        {
          id: "inst-1",
          name: "Табаров Фотеҳ",
          role: "Главный тренер Додзё",
          rank: "3 Дан Айкидо Айкикай",
          experience: "Более 30 лет на татами",
          bio: "Основатель и бессменный руководитель Додзё. Обладатель международного мастерского сертификата Шихана. Воспитал более 40 обладателей чёрных поясов и руководит аттестационной комиссией.",
          kanji: "師範",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "inst-2",
          name: "Абдуллозода Ҷумъахон",
          role: "Тренер Айкидо Айкикай",
          rank: "2 Дан Айкидо Айкикай",
          experience: "16 лет практики",
          bio: "Ученик Шихана Абдуллозода Ҷумъахон. Эксперт по прикладной технике самообороны и традиционному оружию самураев (Буки-вадза).",
          kanji: "先生",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "inst-3",
          name: "Алимардонов Далер",
          role: "Тренер Айкидо Айкикай",
          rank: "1 Дан Айкидо Айкикай",
          experience: "11 лет практики",
          bio: "Специалист по мягкой реабилитационной биомеханике и детскому гармоничному развитию. Сертифицированный тренер федерации.",
          kanji: "指導員",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    belts: {
      title: "Шкала Аттестаций и Поясов",
      subtitle: "Официальная программа аттестации Всемирного Центра Айкикай под руководством Шихана Абдуллозода Ҷумъахон.",
      gradingInfo: "Экзамены на пояса принимаются лично Шиханом Абдуллозода Ҷумъахон с выдачей международных сертификатов.",
      items: [
        {
          kyu: "6 Кю",
          color: "Белый пояс",
          beltColorClass: "bg-slate-100 border-2 border-slate-300",
          textColorClass: "text-slate-800",
          title: "Стойка Камаэ и страховка Укэми",
          duration: "2-3 месяца",
          skills: ["Стойка Миги/Хидари Камаэ", "Мягкие кувырки Кохо/Дзэмпо Укэми", "Перемещения Суги-аси & Тай Сабаки"],
        },
        {
          kyu: "5 Кю",
          color: "Желтый пояс",
          beltColorClass: "bg-yellow-400 border-2 border-yellow-500",
          textColorClass: "text-yellow-950",
          title: "Первый контроль Иккё & Бросок Сихонагэ",
          duration: "3-4 месяца",
          skills: ["Удержание Сёмэнучи Иккё", "Бросок на 4 стороны Сихонагэ", "Освобождение от захвата Кататэтори"],
        },
        {
          kyu: "4 Кю",
          color: "Оранжевый пояс",
          beltColorClass: "bg-orange-500 border-2 border-orange-600",
          textColorClass: "text-white",
          title: "Вход Ириминагэ & Замок Никкё",
          duration: "4-5 месяцев",
          skills: ["Бросок со входом Ириминагэ", "Болевой контроль Никкё", "Защита от прямых ударов Цуки"],
        },
        {
          kyu: "3 Кю",
          color: "Зеленый пояс",
          beltColorClass: "bg-emerald-600 border-2 border-emerald-700",
          textColorClass: "text-white",
          title: "Скручивание Котэгаэси & Контроль Санкё",
          duration: "6 месяцев",
          skills: ["Выворачивание кисти Котэгаэси", "Фиксация Санкё", "Базовые субури с Боккэном"],
        },
        {
          kyu: "2-1 Кю",
          color: "Коричневый пояс",
          beltColorClass: "bg-amber-900 border-2 border-amber-950",
          textColorClass: "text-white",
          title: "Свободная техника Дзю-вадза & Оружие",
          duration: "8-12 месяцев",
          skills: ["Дзю-вадза от любых атак", "Защита от ножа Танто-дори", "Парные ката с Дзё (шест)"],
        },
        {
          kyu: "1 Дан",
          color: "Черный пояс (Юданся)",
          beltColorClass: "bg-neutral-950 border-2 border-amber-400",
          textColorClass: "text-amber-400 font-bold",
          title: "Мастерская степень & Право ношения Хакама",
          duration: "3-4 года практики",
          skills: ["Полный канон техник Айкидо", "Рандори против 3-4 нападающих", "Ассистирование Шихану"],
        },
      ],
    },
    testimonials: {
      title: "Отзывы Учеников Додзё",
      subtitle: "Истории тех, кто тренируется под руководством Шихана Абдуллозода Ҷумъахон.",
      items: [
        {
          id: "test-1",
          author: "Фарход Назаров",
          role: "Предприниматель (занимается 4 года у Шихана)",
          content: "Шихан Ҷумъахон — наставник с невероятной внутренней силой и мудростью. Айкидо научило меня оставаться спокойным в любых кризисных ситуациях. Настоящая самурайская школа!",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
        {
          id: "test-2",
          author: "Нигора Шарипова",
          role: "Мама двух сыновей (занимаются в детской группе)",
          content: "Отдали сыновей к Шихану Абдуллозода Ҷумъахон. Дисциплина, осанка, уважение к старшим — результаты превзошли все ожидания! Мальчики стали уверенными в себе и сильными.",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
        {
          id: "test-3",
          author: "Алишер Раджабов",
          role: "Обладатель 1-го Дана (занимается 6 лет)",
          content: "Для меня честь тренироваться под руководством такого мастера, как Шихан Ҷумъахон. Здесь обучают настоящему глубинному пониманию Айкидо без показухи.",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    schedule: {
      title: "Расписание Тренировок в Додзё",
      subtitle: "Тренировки под личным кураторством Шихана Абдуллозода Ҷумъахон.",
      tabs: {
        all: "Все Группы",
        beginners: "Новички",
        adults: "Взрослые (Шихан)",
        kids: "Дети (6-14 лет)",
        weapons: "Оружие (Боккэн/Дзё)",
      },
      days: {
        monWedFri: "Понедельник / Среда / Пятница",
        tueThuSat: "Вторник / Четверг / Суббота",
        sunday: "Воскресенье (Мастер-класс Шихана)",
      },
      bookTrial: "Записаться в эту группу",
    },
    auth: {
      modalTitle: "Запись в Додзё Шихана Ҷумъахона",
      modalSubtitle: "Заполните анкету для получения пробного занятия и электронного пропуска",
      tabRegister: "Новый Ученик",
      tabLogin: "Вход для Членов Додзё",
      fullName: "Ваше Полное Имя (ФИО)",
      phone: "Номер телефона / WhatsApp",
      email: "Электронная почта",
      groupLabel: "Выберите группу для занятий",
      groups: {
        beginners: "Группа Новичков (Основы и Укэми)",
        adults: "Взрослые (Мастер-группа Шихана)",
        kids: "Детская группа (6 - 14 лет)",
        weapons: "Оружие самураев (Боккэн/Дзё)",
      },
      expLabel: "Ваш опыт в боевых искусствах",
      expOptions: {
        beginner: "Начинающий (Без опыта)",
        intermediate: "Занимался ранее / Есть опыт",
        advanced: "Обладатель пояса (Кю / Дан)",
      },
      scheduleLabel: "Удобное время тренировок",
      submitRegister: "Зарегистрироваться и Получить Пропуск",
      submitLogin: "Войти в Личный Кабинет",
      successMessage: "Поздравляем! Вы успешно зарегистрированы в Додзё.",
      studentBadgeTitle: "Электронный Пропуск Додзё",
      studentIdLabel: "ID Ученика",
      statusLabel: "Статус",
      statusActive: "Активный (Пробный период)",
      approvedBy: "Одобрено: Табаров Фотеҳ (3 Дан Айкидо Айкикай)",
      closeBadge: "Открыть Профиль",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          question: "Преподает ли Шихан Абдуллозода Ҷумъахон лично?",
          answer: "Да! Шихан лично проводит вечерние тренировки для взрослых, мастер-классы по воскресеньям и руководит всеми экзаменами на пояса.",
        },
        {
          question: "Нужна ли физическая подготовка для начала?",
          answer: "Нет. Айкидо основано на балансе, расслаблении и правильном использовании силы атакующего. Нагрузка подбирается индивидуально.",
        },
        {
          question: "С какого возраста принимаются дети?",
          answer: "В детские группы принимаются ребята от 6 лет. Занятия развивают координацию, гибкость, внимание и дисциплину в безопасной обстановке.",
        },
        {
          question: "Какая форма одежды требуется на первое занятие?",
          answer: "Для первого урока достаточно удобных спортивных штанов и футболки. Тренируемся босиком на татами. Традиционное кимоно (доги) можно приобрести позже.",
        },
      ],
    },
    footer: {
      tagline: "Тэнсин Айкидо — Традиционная школа боевого искусства Айкидо Айкикай",
      chiefMaster: "Главный тренер: Табаров Фотеҳ (3 Дан Айкидо Айкикай)",
      rights: "Все права защищены © 2026 Тэнсин Айкидо Додзё.",
      location: "Главное Додзё: ул. Самураев 12 / Спорткомплекс",
      contacts: "Тел: +992 900 12 34 56 | Email: info@aikido-dojo.com",
    },
  },
  en: {
    nav: {
      brandName: "TENSHIN AIKIDO",
      kanji: "合氣道",
      philosophy: "Philosophy",
      techniques: "Techniques",
      schedule: "Schedule",
      sensei: "Foteh Tabarov",
      belts: "Belts & Ranks",
      reviews: "Reviews",
      faq: "FAQ",
      register: "Register",
      myAccount: "Student Portal",
    },
    hero: {
      badge: "Academy of Harmonious Martial Energy",
      chiefSenseiBadge: "Led by Head Coach Foteh Tabarov (3rd Dan Aikikai)",
      headingLine1: "The Art of Victory Without Fighting",
      headingLine2Italic: "the way of harmony & strength",
      headingLine2Suffix: "",
      subtitle: "Traditional Aikikai Aikido under international master Shihan Abdullozoda Jumakhon. Transform aggression into fluid control, presence, and inner balance.",
      ctaDesktop: "First trial lesson is free. Accepting new students of all levels!",
      ctaMobile: "Free trial lesson. Join now!",
      ctaButton: "Train with the Master",
      stats: {
        dojoYears: "30+ Years on Tatami",
        activeStudents: "600+ Students",
        blackBelts: "40+ Certified Black Belts",
      },
    },
    about: {
      quote: "“True victory is victory over oneself, right here and now. The power of Aikido lies not in crushing an opponent, but in harmonizing with their momentum and restoring peace.”",
      quoteAuthor: "— Abdullozoda Jumakhon (President of Aikido Federation)",
      btnSayHello: "Contact Shihan",
      btnStayInformed: "Ask a Question",
      ensoCaption: "Katsuhayabi — Victory over oneself",
      tagline: "Aikikai Tradition / Samurai Spirit",
      mainParagraph: "Tenshin Aikido Dojo was founded by Shihan Abdullozoda Jumakhon to cultivate the authentic martial spirit of Aikido. We teach spherical force redirection, breakfalls (Ukemi), joint locks, and traditional samurai swordsmanship (Bokken).",
      senseiWelcome: "“Welcome to our tatami. Age, gender, and current fitness level do not matter—what matters is your earnest willingness to grow in spirit.”",
      pillars: [
        {
          title: "Musubi (Connection)",
          kanji: "結び",
          description: "Blending seamlessly with your partner's force and velocity, perceiving their intention without friction.",
        },
        {
          title: "Irimi (Entering the Center)",
          kanji: "入身",
          description: "Stepping courageously and safely into the blind spot of the attack while avoiding the line of impact.",
        },
        {
          title: "Tenkan (Spherical Pivot)",
          kanji: "転換",
          description: "Spiral circular rotation that allows the attacker's energy to dissipate while taking complete control.",
        },
        {
          title: "Zanshin (Continuous Presence)",
          kanji: "残心",
          description: "A crystal-clear state of mind, calm readiness, and unwavering awareness before, during, and after a technique.",
        },
      ],
    },
    features: {
      stickyHeading: "Aikido Techniques Flowing Like Water",
      startFree: "Begin Training with the Master",
      ctaText: "No aggressive hostility. Only pure biomechanics, grace, and effective martial self-defense.",
      items: [
        {
          id: "nage-waza",
          title: "Throwing Arts (Nage Waza & Ukemi)",
          subTitle: "Spherical deflection and dynamic breakfalls",
          description: "Shihonage, Iriminage, Kokyunage, and Kaitennage. Utilizing an attacker's momentum with safe rolling mechanics.",
          kanji: "投げ技",
          tags: ["Iriminage", "Shihonage", "Ukemi"],
        },
        {
          id: "katame-waza",
          title: "Joint Locks & Immobilizations (Katamewaza)",
          subTitle: "Decisive neutralizing control without permanent injury",
          description: "Ikkyo, Nikyo, Sankyo, Yonkyo, and Gokyo. Articular locks immobilizing any adversary through precision leverage.",
          kanji: "固技",
          tags: ["Ikkyo", "Nikyo", "Sankyo", "Kotegaeshi"],
        },
        {
          id: "kokyu-ho",
          title: "Ki Energy & Breath Power (Kokyu-ho & Hara)",
          subTitle: "Center gravity stability and unshakable calm",
          description: "Time-tested breathwork practices fostering the unbendable arm, rooted equilibrium, and complete stress relief.",
          kanji: "呼吸法",
          tags: ["Ki Energy", "Hara Center", "Meditation"],
        },
        {
          id: "buki-waza",
          title: "Samurai Weapons (Bokken & Jo)",
          subTitle: "Heritage of the wooden sword and staff",
          description: "Aiki-ken sword and Aiki-jo staff katas refining spatial judgment (Ma-ai), posture, and strike precision.",
          kanji: "武器技",
          tags: ["Bokken Sword", "Jo Staff", "Tanto-dori"],
        },
      ],
    },
    instructors: {
      title: "Chief Master & Instructor Faculty",
      subtitle: "Officially affiliated and accredited with Aikido World Headquarters (Hombu Dojo, Tokyo, Japan).",
      lineageBadge: "Aikikai Lineage Transmission",
      lineageText: "O-Sensei Morihei Ueshiba → Aikikai Hombu Dojo (Tokyo) → Foteh Tabarov",
      chiefMasterTitle: "Head Coach of the Dojo",
      chiefMasterQuote: "“Aikido is a mirror of your soul. The way you move on the tatami reflects how you face life's storms. Learn to yield in order to prevail.”",
      items: [
        {
          id: "inst-1",
          name: "Foteh Tabarov",
          role: "Head Coach of the Dojo",
          rank: "3rd Dan Aikikai",
          experience: "Over 30 Years on Tatami",
          bio: "Founder and Master of Tenshin Dojo. Holder of the prestigious international Shihan accreditation. Has trained over 40 black belt instructors and leads the national belt grading board.",
          kanji: "師範",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "inst-2",
          name: "Jumakhon Abdullozoda",
          role: "Aikikai Aikido Coach",
          rank: "2nd Dan Aikikai",
          experience: "16 Years Practice",
          bio: "Senior disciple of Shihan Abdullozoda Jumakhon. Expert in applied self-defense mechanics and classical samurai weapons (Bukiwaza).",
          kanji: "先生",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "inst-3",
          name: "Daler Alimardonov",
          role: "Aikikai Aikido Coach",
          rank: "1st Dan Aikikai",
          experience: "11 Years Practice",
          bio: "Specialist in child motor development and safe martial arts biomechanics. Certified national coach.",
          kanji: "指導員",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    belts: {
      title: "Rank & Belt Grading System",
      subtitle: "Official Aikikai syllabus directed by Shihan Abdullozoda Jumakhon.",
      gradingInfo: "Belt grading examinations are administered personally by Shihan Abdullozoda Jumakhon with international credentials.",
      items: [
        {
          kyu: "6th Kyu",
          color: "White Belt",
          beltColorClass: "bg-slate-100 border-2 border-slate-300",
          textColorClass: "text-slate-800",
          title: "Kamae Stance & Ukemi Breakfalls",
          duration: "2-3 months",
          skills: ["Migi/Hidari Kamae Stance", "Forward & backward rolling ukemi", "Sugi-ashi & Tai Sabaki movement"],
        },
        {
          kyu: "5th Kyu",
          color: "Yellow Belt",
          beltColorClass: "bg-yellow-400 border-2 border-yellow-500",
          textColorClass: "text-yellow-950",
          title: "First Pin (Ikkyo) & 4-Direction Throw (Shihonage)",
          duration: "3-4 months",
          skills: ["Shomenuchi Ikkyo control", "Shihonage throw", "Katatetori wrist release"],
        },
        {
          kyu: "4th Kyu",
          color: "Orange Belt",
          beltColorClass: "bg-orange-500 border-2 border-orange-600",
          textColorClass: "text-white",
          title: "Entering Throw (Iriminage) & Wrist Pin (Nikyo)",
          duration: "4-5 months",
          skills: ["Iriminage entering throw", "Nikyo wrist flexion lock", "Tsuki strike parry"],
        },
        {
          kyu: "3rd Kyu",
          color: "Green Belt",
          beltColorClass: "bg-emerald-600 border-2 border-emerald-700",
          textColorClass: "text-white",
          title: "Wrist Turn (Kotegaeshi) & Spiral Pin (Sankyo)",
          duration: "6 months",
          skills: ["Kotegaeshi wrist redirection", "Sankyo torsion pin", "Basic Bokken suburi cuts"],
        },
        {
          kyu: "2nd - 1st Kyu",
          color: "Brown Belt",
          beltColorClass: "bg-amber-900 border-2 border-amber-950",
          textColorClass: "text-white",
          title: "Free Dynamics (Jyu-waza) & Weapons Defense",
          duration: "8-12 months",
          skills: ["Jyu-waza continuous defense", "Tanto knife disarming", "Jo staff partner katas"],
        },
        {
          kyu: "1st Dan",
          color: "Black Belt (Yudansha)",
          beltColorClass: "bg-neutral-950 border-2 border-amber-400",
          textColorClass: "text-amber-400 font-bold",
          title: "Master Rank & Hakama Privileges",
          duration: "3-4 years training",
          skills: ["Full technical syllabus", "Randori multi-attacker defense", "Assistant teaching with Shihan"],
        },
      ],
    },
    testimonials: {
      title: "What Our Students Say",
      subtitle: "Stories from practitioners trained under Shihan Abdullozoda Jumakhon.",
      items: [
        {
          id: "test-1",
          author: "Farkhod Nazarov",
          role: "Business Executive (4 years with Shihan)",
          content: "Shihan Jumakhon possesses profound wisdom and inner composure. Aikido taught me how to stay serene in business crises. A true master and life mentor!",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
        {
          id: "test-2",
          author: "Nigora Sharipova",
          role: "Mother of two youth practitioners",
          content: "Enrolling our sons under Shihan Abdullozoda Jumakhon was the best decision. Discipline, poise, and deep respect have transformed our boys completely.",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
        {
          id: "test-3",
          author: "Alisher Radjabov",
          role: "1st Dan Black Belt (Practicing 6 years)",
          content: "It is an immense privilege to study under a master of Shihan Jumakhon's caliber. Pure authentic Aikido taught with dedication and respect.",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    schedule: {
      title: "Dojo Training Schedule",
      subtitle: "Classes under the personal supervision of Shihan Abdullozoda Jumakhon.",
      tabs: {
        all: "All Groups",
        beginners: "Beginners",
        adults: "Adults (Shihan)",
        kids: "Youth (6-14)",
        weapons: "Weapons (Bokken/Jo)",
      },
      days: {
        monWedFri: "Monday / Wednesday / Friday",
        tueThuSat: "Tuesday / Thursday / Saturday",
        sunday: "Sunday Masterclass (Shihan)",
      },
      bookTrial: "Join This Class",
    },
    auth: {
      modalTitle: "Dojo Registration — Shihan Jumakhon",
      modalSubtitle: "Complete the form for your trial class and official digital student pass",
      tabRegister: "New Student",
      tabLogin: "Member Login",
      fullName: "Full Name",
      phone: "Phone / WhatsApp Number",
      email: "Email Address",
      groupLabel: "Select Training Class",
      groups: {
        beginners: "Beginner Class (Foundations & Ukemi)",
        adults: "Adult Class (Shihan Master Class)",
        kids: "Youth Group (Ages 6-14)",
        weapons: "Samurai Weapons (Bokken/Jo)",
      },
      expLabel: "Experience Level",
      expOptions: {
        beginner: "Complete Beginner",
        intermediate: "Some Martial Arts Experience",
        advanced: "Rank Holder (Kyu / Dan)",
      },
      scheduleLabel: "Preferred Schedule",
      submitRegister: "Register & Issue Student Pass",
      submitLogin: "Login to Account",
      successMessage: "Congratulations! You are officially registered in Tenshin Dojo.",
      studentBadgeTitle: "Digital Student Pass",
      studentIdLabel: "Student ID",
      statusLabel: "Status",
      statusActive: "Active (Trial Period)",
      approvedBy: "Approved by: Shihan Abdullozoda Jumakhon (6th Dan)",
      closeBadge: "View Profile",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Does Shihan Abdullozoda Jumakhon teach personally?",
          answer: "Yes! Shihan personally conducts the evening adult masterclasses, Sunday intensive seminars, and administers all belt grading examinations.",
        },
        {
          question: "Do I need previous fitness experience to start?",
          answer: "No prior experience is required. Aikido relies on leverage, balance, and fluid mechanics rather than brute strength.",
        },
        {
          question: "What is the starting age for children?",
          answer: "Children from 6 years old are welcomed in youth groups. Classes foster discipline, posture, and mutual respect in a safe setting.",
        },
        {
          question: "What should I wear to my first class?",
          answer: "Comfortable sweatpants and a T-shirt are sufficient. We practice barefoot on tatami mats. Keikogi uniforms can be acquired later.",
        },
      ],
    },
    footer: {
      tagline: "Tenshin Aikido — School of Harmony, Strength & Samurai Flow",
      chiefMaster: "Head Coach: Foteh Tabarov (3rd Dan Aikikai)",
      rights: "All rights reserved © 2026 Tenshin Aikido Dojo.",
      location: "Main Dojo: 12 Samurai Ave / Sports Complex",
      contacts: "Phone: +992 900 12 34 56 | Email: info@aikido-dojo.com",
    },
  },
  tg: {
    nav: {
      brandName: "ТЭНШИН АЙКИДО",
      kanji: "合氣道",
      philosophy: "Фалсафа",
      techniques: "Техникаҳо",
      schedule: "Ҷадвали машқҳо",
      sensei: "Табаров Фотеҳ",
      belts: "Камарбандҳо",
      reviews: "Фикру мулоҳизаҳо",
      faq: "Саволҳо",
      register: "Рӯйхатгирӣ",
      myAccount: "Кабинети ман",
    },
    hero: {
      badge: "Академияи санъати ҳарбии Айкидо",
      chiefSenseiBadge: "Таҳти роҳбарии сармураббӣ Табаров Фотеҳ (Дани 3-юми Айкидо Айкикай)",
      headingLine1: "Санъати ғалаба бидуни ҷанг",
      headingLine2Italic: "роҳи ҳамбастагӣ ва қувват",
      headingLine2Suffix: "",
      subtitle: "Айкидои суннатии Айкикай бо роҳбарии устоди сатҳи байналмилалӣ Шиҳон Абдуллозода Ҷумъахон. Табдили қувваи рақиб ба муҳофизати озод ва мувозинати ботинӣ.",
      ctaDesktop: "Машқи аввалини санҷишӣ — ройгон. Қабул ба ҳама гурӯҳҳо!",
      ctaMobile: "Машқи санҷишӣ ройгон. Нависед!",
      ctaButton: "Навишта шудан ба назди Устод",
      stats: {
        dojoYears: "30+ соли таҷриба дар татами",
        activeStudents: "600+ шогирдон",
        blackBelts: "40+ соҳибони камарбанди сиёҳ",
      },
    },
    about: {
      quote: "«Ғалабаи ҳақиқӣ — ин ғалаба бар нафси хеш дар ҳамин лаҳза аст. Қувваи Айкидо на дар шикаст додани рақиб, балки дар пайваст шудан бо ҳаракати ӯ ва барқарор намудани сулҳ аст.»",
      quoteAuthor: "— Абдуллозода Ҷумъахон (Президенти Федератсияи Айкидо)",
      btnSayHello: "Навиштан ба Шиҳон",
      btnStayInformed: "Савол додан",
      ensoCaption: "Кацухаяби — Ғалаба бар хештан",
      tagline: "Суннати Айкикай / Рӯҳи Самурайӣ",
      mainParagraph: "Мактаби Тэншин Айкидо аз ҷониби Шиҳон Абдуллозода Ҷумъахон бо мақсади интиқоли рӯҳи аслии ин санъати нодир таъсис дода шудааст. Мо равона кардани қувваи рақиб, чаппашавии бехатар (Укэми), озодшавӣ аз чанголҳо ва шамшерзании чӯбӣ (Боккэн)-ро меомӯзонем.",
      senseiWelcome: "«Ба татамии мо хуш омадед. Синну сол ва омодагии ҷисмонӣ муҳим нест — муҳим он аст, ки шумо омодагии инкишофи рӯҳ ва ҷисмро дошта бошед.»",
      pillars: [
        {
          title: "Мусуби (Пайвастшавӣ)",
          kanji: "結び",
          description: "Пайваст шудан бо қувваи рақиб ва дарки нияти ӯ бидуни муқовимати беҳуда.",
        },
        {
          title: "Ирими (Воридшавӣ ба марказ)",
          kanji: "入身",
          description: "Қадами қатъӣ ва бехатар ба маркази ҳуҷуми рақиб бо дур шудан аз хати зарба.",
        },
        {
          title: "Тэнкан (Гардиши даврагӣ)",
          kanji: "転換",
          description: "Гардиши ҷисм, ки имкон медиҳад қувваи рақиб гузаронида шуда, назорати пурра ба даст ояд.",
        },
        {
          title: "Дзансин (Огоҳии мунтазам)",
          kanji: "残心",
          description: "Ҳолати оромии комили фикр ва омодагии ботинӣ пеш ва пас аз иҷрои техника.",
        },
      ],
    },
    features: {
      stickyHeading: "Техникаҳои Айкидо ба монанди об равон",
      startFree: "Оғози машқ бо Устод",
      ctaText: "Бе таҷовуз ва ҷароҳатҳо. Танҳо биомеханикаи дақиқ, зебоӣ ва худмуҳофизати самаранок.",
      items: [
        {
          id: "nage-waza",
          title: "Техникаи партофтҳо (Нагэ-вадза & Укэми)",
          subTitle: "Санъати чаппашавии бехатар ва идоракунии қувва",
          description: "Партофтҳои Сиҳонагэ, Ириминагэ ва Кокюнагэ. Истифодаи суръати худи ҳамлагар бар зидди ӯ бо чаппашавии мулоим.",
          kanji: "投げ技",
          tags: ["Ириминагэ", "Сиҳонагэ", "Укэми"],
        },
        {
          id: "katame-waza",
          title: "Идоракунӣ ва доштани буғумҳо (Катамэ-вадза)",
          subTitle: "Озод кардан ва боздоштани ҳамлагар бе зарар",
          description: "Техникаҳои Иккё, Никкё, Санкё ва Котэгаэси. Назорати дақиқ дар буғумҳои даст ва оринҷ.",
          kanji: "固技",
          tags: ["Иккё", "Никкё", "Санкё", "Котэгаэси"],
        },
        {
          id: "kokyu-ho",
          title: "Нафаскашӣ ва энергияи Ки (Кокю-хо & Ҳара)",
          subTitle: "Устувории маркази ҷисм ва оромии ботинӣ",
          description: "Машқҳои қадимаи нафаскашии Айкидо барои мустаҳкам намудани қомат ва рафъи стресс.",
          kanji: "呼吸法",
          tags: ["Энергияи Ки", "Ҳара", "Медитатсия"],
        },
        {
          id: "buki-waza",
          title: "Силлоҳи самурайӣ (Боккэн & Дзё)",
          subTitle: "Шамшерзании чӯбӣ ва машқҳо бо асо",
          description: "Катаҳои Айки-кэн ва Айки-дзё. Муайян кардани масофаи дақиқ (Ма-ай) ва реаксияи тез.",
          kanji: "武器技",
          tags: ["Боккэн", "Дзё", "Танто-дори"],
        },
      ],
    },
    instructors: {
      title: "Сармураббӣ ва Ҳайати Устодон",
      subtitle: "Эътирофи расмии Маркази Ҷаҳонии Айкикай (Хомбу Додзё, Токио, Ҷопон).",
      lineageBadge: "Хати интиқоли суннати Айкикай",
      lineageText: "О-Сэнсэй Морихэй Уэсиба → Маркази умумиҷаҳонии Айкикай (Токио) → Табаров Фотеҳ",
      chiefMasterTitle: "Сармураббии Додзё",
      chiefMasterQuote: "«Айкидо оинаи рӯҳи шумост. Чӣ гунае ки дар татами ҳаракат мекунед, нишон медиҳад, ки дар зиндагӣ бо мушкилиҳо чӣ тавр мубориза мебаред. Омӯзед, ки бо мулоиматӣ ғолиб оед.»",
      items: [
        {
          id: "inst-1",
          name: "Табаров Фотеҳ",
          role: "Сармураббии Додзё",
          rank: "Дани 3-юми Айкидо Айкикай",
          experience: "Зиёда аз 30 сол дар татами",
          bio: "Асосгузор ва роҳбари Додзё. Дорандаи унвони байналмилалии Шиҳон. Зиёда аз 40 нафар соҳибони камарбанди сиёҳро тарбия намудааст.",
          kanji: "師範",
          image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "inst-2",
          name: "Абдуллозода Ҷумъахон",
          role: "Мураббии Айкидо Айкикай",
          rank: "Дани 2-юми Айкидо Айкикай",
          experience: "16 соли машқ",
          bio: "Шогирди Шиҳон Абдуллозода Ҷумъахон. Мутахассиси худмуҳофизати амалӣ ва силлоҳи самурайӣ (Буки-вадза).",
          kanji: "先生",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "inst-3",
          name: "Алимардонов Далер",
          role: "Мураббии Айкидо Айкикай",
          rank: "Дани 1-уми Айкидо Айкикай",
          experience: "11 соли машқ",
          bio: "Мутахассиси тарбияи ҷисмонии кӯдакон ва биомеханикаи бехатар. Мураббии соҳибтаҷриба.",
          kanji: "指導員",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    belts: {
      title: "Низом ва Дараҷаи Камарбандҳо",
      subtitle: "Барномаи расмии аттестатсияи Маркази Ҷаҳонии Айкикай бо роҳбарии Шиҳон Абдуллозода Ҷумъахон.",
      gradingInfo: "Имтиҳонҳо аз ҷониби шахси Шиҳон Абдуллозода Ҷумъахон бо додани шаҳодатномаҳои байналмилалӣ қабул мешаванд.",
      items: [
        {
          kyu: "Кюи 6-ум",
          color: "Камарбанди сафед",
          beltColorClass: "bg-slate-100 border-2 border-slate-300",
          textColorClass: "text-slate-800",
          title: "Ҳолати Камаэ ва чаппашавии Укэми",
          duration: "2-3 моҳ",
          skills: ["Ҳолати Миги/Хидари Камаэ", "Чаппашавии бехатар ба пеш ва қафо", "Ҳаракатҳои Суги-аси & Тай Сабаки"],
        },
        {
          kyu: "Кюи 5-ум",
          color: "Камарбанди зард",
          beltColorClass: "bg-yellow-400 border-2 border-yellow-500",
          textColorClass: "text-yellow-950",
          title: "Назорати Иккё & Партофти Сиҳонагэ",
          duration: "3-4 моҳ",
          skills: ["Нигоҳдории Иккё", "Партофти Сиҳонагэ", "Озодшавӣ аз чанголи дастҳо"],
        },
        {
          kyu: "Кюи 4-ум",
          color: "Камарбанди норанҷӣ",
          beltColorClass: "bg-orange-500 border-2 border-orange-600",
          textColorClass: "text-white",
          title: "Воридшавии Ириминагэ & Никкё",
          duration: "4-5 моҳ",
          skills: ["Партофти Ириминагэ", "Идоракунии Никкё", "Муҳофизат аз зарбаҳо"],
        },
        {
          kyu: "Кюи 3-юм",
          color: "Камарбанди сабз",
          beltColorClass: "bg-emerald-600 border-2 border-emerald-700",
          textColorClass: "text-white",
          title: "Тобиши Котэгаэси & Идоракунии Санкё",
          duration: "6 моҳ",
          skills: ["Тобиши банди даст Котэгаэси", "Фиксатсияи Санкё", "Машқҳои ибтидоӣ бо шамшер"],
        },
        {
          kyu: "Кюи 2-1",
          color: "Камарбанди қаҳваранг",
          beltColorClass: "bg-amber-900 border-2 border-amber-950",
          textColorClass: "text-white",
          title: "Техникаи озод ва муҳофизат аз силлоҳ",
          duration: "8-12 моҳ",
          skills: ["Дзю-вадза аз ҳама ҳамлаҳо", "Муҳофизат аз корд (Танто)", "Катаҳои ҷуфти Дзё"],
        },
        {
          kyu: "Дани 1-ум",
          color: "Камарбанди сиёҳ (Юданся)",
          beltColorClass: "bg-neutral-950 border-2 border-amber-400",
          textColorClass: "text-amber-400 font-bold",
          title: "Дараҷаи устодӣ ва пӯшидани Ҳакама",
          duration: "3-4 соли машқ",
          skills: ["Ҳама техникаҳои Айкидо", "Рандори зидди 3-4 ҳамлагар", "Кумаки омӯзгорӣ бо Шиҳон"],
        },
      ],
    },
    testimonials: {
      title: "Фикру Мулоҳизаҳои Шогирдон",
      subtitle: "Ҳикояҳои шогирдоне, ки таҳти роҳбарии Шиҳон Абдуллозода Ҷумъахон машқ мекунанд.",
      items: [
        {
          id: "test-1",
          author: "Фарҳод Назаров",
          role: "Соҳибкор (4 сол бо Шиҳон машқ мекунад)",
          content: "Шиҳон Ҷумъахон устоди дорои ҳикмат ва қувваи баланди ботинӣ мебошад. Айкидо ба ман кӯмак кард, ки дар ҳолатҳои вазнин оромиро нигоҳ дорам. Мактаби ҳақиқии самурайӣ!",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
        {
          id: "test-2",
          author: "Нигора Шарипова",
          role: "Модари ду писари наврас",
          content: "Писаронамро ба назди Шиҳон Абдуллозода Ҷумъахон овардем. Интизом, эҳтиром ва ҷасорат дар онҳо хеле боло рафт. Барои фарзандон беҳтарин муҳит аст!",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
        {
          id: "test-3",
          author: "Алишер Раҷабов",
          role: "Дорандаи Дани 1-ум (6 сол боз)",
          content: "Барои ман ифтихори бузург аст, ки шогирди устоди бузург Шиҳон Ҷумъахон ҳастам. Ин ҷо Айкидои асил ва беҳамто таълим дода мешавад.",
          rating: 5,
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        },
      ],
    },
    schedule: {
      title: "Ҷадвали Машқҳо дар Додзё",
      subtitle: "Машқҳо таҳти назорати шахсии Шиҳон Абдуллозода Ҷумъахон.",
      tabs: {
        all: "Ҳама гурӯҳҳо",
        beginners: "Навкорон",
        adults: "Калонсолон (Шиҳон)",
        kids: "Кӯдакон (6-14 сола)",
        weapons: "Силлоҳ (Боккэн/Дзё)",
      },
      days: {
        monWedFri: "Дӯшанбе / Чоршанбе / Ҷумъа",
        tueThuSat: "Сешанбе / Панҷшанбе / Шанбе",
        sunday: "Якшанбе (Мастер-класси Шиҳон)",
      },
      bookTrial: "Навишта шудан ба ин гурӯҳ",
    },
    auth: {
      modalTitle: "Рӯйхатгирӣ — Додзёи Шиҳон Ҷумъахон",
      modalSubtitle: "Анкетаро пур кунед ва Корти электронии шогирдро ба даст оред",
      tabRegister: "Шогирди нав",
      tabLogin: "Воридшавии шогирдон",
      fullName: "Ном ва Насаби шумо",
      phone: "Рақами телефон / WhatsApp",
      email: "Почтаи электронӣ",
      groupLabel: "Гурӯҳро интихоб кунед",
      groups: {
        beginners: "Гурӯҳи навкорон (Асосҳо ва Укэми)",
        adults: "Калонсолон (Гурӯҳи Шиҳон)",
        kids: "Гурӯҳи кӯдакон (6 - 14 сола)",
        weapons: "Силлоҳи самурайӣ (Боккэн/Дзё)",
      },
      expLabel: "Таҷрибаи шумо дар санъати ҳарбӣ",
      expOptions: {
        beginner: "Навкор (Бе таҷриба)",
        intermediate: "Пештар машқ кардаам",
        advanced: "Соҳиби камарбанд (Кю / Дан)",
      },
      scheduleLabel: "Вақти мувофиқи машқ",
      submitRegister: "Рӯйхат гирифтан ва Гирифтани Пропуск",
      submitLogin: "Ворид шудан ба Кабинет",
      successMessage: "Табрик мегӯем! Шумо ба Додзё бомуваффақият аъзо шудед.",
      studentBadgeTitle: "Корти Электронии Шогирд",
      studentIdLabel: "ID-и Шогирд",
      statusLabel: "Ҳолат",
      statusActive: "Фаъол (Давраи санҷишӣ)",
      approvedBy: "Тасдиқ шудааст: Шиҳон Абдуллозода Ҷумъахон (Дани 6)",
      closeBadge: "Дидани Профил",
    },
    faq: {
      title: "Саволҳои зуд-зуд додашаванда",
      items: [
        {
          question: "Оё Шиҳон Абдуллозода Ҷумъахон шахсан дарс медиҳад?",
          answer: "Бале! Шиҳон шахсан машқҳои бегоҳирӯзии калонсолон, семинарҳои рӯзи якшанбе ва ҳамаи имтиҳонҳои камарбандро роҳбарӣ мекунад.",
        },
        {
          question: "Оё барои оғоз омодагии ҷисмонӣ лозим аст?",
          answer: "Не. Айкидо ба биомеханика ва инерция асос ёфтааст. Машқҳо оҳиста-оҳиста душвор мешаванд.",
        },
        {
          question: "Кӯдакон аз чандсолагӣ қабул карда мешаванд?",
          answer: "Гурӯҳҳои кӯдакона аз 6 солагӣ мебошанд. Машқҳо бехатар буда, интизом ва эҳтиромро инкишоф медиҳанд.",
        },
        {
          question: "Барои машқи аввал чӣ гуна либос лозим аст?",
          answer: "Шалвори варзишии мулоим ва футболки озод кифоя аст. Мо дар татами бе пойафзол машқ мекунем.",
        },
      ],
    },
    footer: {
      tagline: "Тэншин Айкидо — Мактаби суннатии Айкидо Айкикай",
      chiefMaster: "Сармураббӣ: Табаров Фотеҳ (Дани 3-юми Айкидо Айкикай)",
      rights: "Ҳамаи ҳуқуқҳо ҳифз карда шудаанд © 2026 Тэншин Айкидо Додзё.",
      location: "Додзёи марказӣ: кӯч. Самурайҳо 12 / Маҷмааи варзишӣ",
      contacts: "Тел: +992 900 12 34 56 | Email: info@aikido-dojo.com",
    },
  },
};
