import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'kz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Hero
    'hero.title': 'АВТОСЕРВИС 888 В АКТОБЕ',
    'hero.subtitle': 'Заберём ваш автомобиль на эвакуаторе — быстро и удобно',
    'hero.cta.request': 'Оставить заявку',
    'hero.cta.call': 'Позвонить',
    'hero.cta.tow': 'Вызвать эвакуатор',
    
    // Benefits
    'benefits.title': 'Почему выбирают нас',
    'benefits.tow.title': 'Бесплатный эвакуатор',
    'benefits.tow.desc': 'Сами заберём ваш автомобиль по городу',
    'benefits.time.title': 'Экономия времени',
    'benefits.time.desc': 'Вам не нужно ехать к нам — мы сами приедем',
    'benefits.guarantee.title': 'Гарантия на работы',
    'benefits.guarantee.desc': 'Отвечаем за качество каждого ремонта',
    'benefits.masters.title': 'Опытные мастера',
    'benefits.masters.desc': 'Профессионалы с многолетним стажем',
    
    // How we work
    'how.title': 'Как мы работаем',
    'how.step1.title': 'Заявка',
    'how.step1.desc': 'Оставьте заявку на сайте или позвоните нам',
    'how.step2.title': 'Забор авто',
    'how.step2.desc': 'Приезжаем на эвакуаторе и забираем авто',
    'how.step3.title': 'Ремонт',
    'how.step3.desc': 'Проводим диагностику и качественный ремонт',
    'how.step4.title': 'Готово',
    'how.step4.desc': 'Возвращаем готовый автомобиль',
    
    // Services
    'services.title': 'Наши услуги',
    'services.diagnostic.title': 'Диагностика авто',
    'services.diagnostic.desc': 'Полная компьютерная диагностика',
    'services.oil.title': 'Замена масла',
    'services.oil.desc': 'Масло и фильтры любых марок',
    'services.suspension.title': 'Ходовая часть',
    'services.suspension.desc': 'Ремонт подвески и ходовой',
    'services.brakes.title': 'Тормозная система',
    'services.brakes.desc': 'Замена колодок и дисков',
    'services.engine.title': 'Ремонт двигателя',
    'services.engine.desc': 'Капитальный и текущий ремонт',
    'services.electric.title': 'Автоэлектрика',
    'services.electric.desc': 'Диагностика и ремонт электрики',
    
    // Form
    'form.title': 'Оставьте заявку',
    'form.subtitle': 'Мы сами заберём ваш автомобиль на эвакуаторе',
    'form.name': 'Ваше имя',
    'form.phone': 'Телефон',
    'form.problem': 'Опишите проблему',
    'form.submit': 'Отправить заявку',
    'form.callback': 'Мы свяжемся с вами в течение 15 минут',
    'form.success': 'Заявка отправлена!',
    
    // Footer
    'footer.city': 'Актобе',
    'footer.rights': 'Все права защищены',
  },
  kz: {
    // Hero
    'hero.title': 'АҚТӨБЕДЕГІ «888» АВТОСЕРВИСІ',
    'hero.subtitle': 'Көлігіңізді эвакуатормен өзіміз алып кетеміз — тез әрі ыңғайлы',
    'hero.cta.request': 'Өтінім қалдыру',
    'hero.cta.call': 'Қоңырау шалу',
    'hero.cta.tow': 'Эвакуатор шақыру',
    
    // Benefits
    'benefits.title': 'Бізді неге таңдайды',
    'benefits.tow.title': 'Тегін эвакуатор',
    'benefits.tow.desc': 'Қала бойынша көлігіңізді өзіміз әкелеміз',
    'benefits.time.title': 'Уақытты үнемдеу',
    'benefits.time.desc': 'Сізге келудің қажеті жоқ — біз өзіміз келеміз',
    'benefits.guarantee.title': 'Жұмысқа кепілдік',
    'benefits.guarantee.desc': 'Әр жөндеудің сапасына жауап береміз',
    'benefits.masters.title': 'Тәжірибелі шеберлер',
    'benefits.masters.desc': 'Көп жылдық тәжірибесі бар мамандар',
    
    // How we work
    'how.title': 'Біз қалай жұмыс істейміз',
    'how.step1.title': 'Өтінім',
    'how.step1.desc': 'Сайтта өтінім қалдырыңыз немесе бізге қоңырау шалыңыз',
    'how.step2.title': 'Көлікті алу',
    'how.step2.desc': 'Эвакуатормен келіп, көлікті алып кетеміз',
    'how.step3.title': 'Жөндеу',
    'how.step3.desc': 'Диагностика және сапалы жөндеу жүргіземіз',
    'how.step4.title': 'Дайын',
    'how.step4.desc': 'Дайын көлікті қайтарамыз',
    
    // Services
    'services.title': 'Біздің қызметтер',
    'services.diagnostic.title': 'Авто диагностикасы',
    'services.diagnostic.desc': 'Толық компьютерлік диагностика',
    'services.oil.title': 'Май ауыстыру',
    'services.oil.desc': 'Кез келген маркадағы май мен сүзгілер',
    'services.suspension.title': 'Жүргізу бөлігі',
    'services.suspension.desc': 'Аспа және жүргізу бөлігін жөндеу',
    'services.brakes.title': 'Тежегіш жүйесі',
    'services.brakes.desc': 'Колодкалар мен дискілерді ауыстыру',
    'services.engine.title': 'Қозғалтқышты жөндеу',
    'services.engine.desc': 'Күрделі және ағымдағы жөндеу',
    'services.electric.title': 'Автоэлектрика',
    'services.electric.desc': 'Электриканы диагностика және жөндеу',
    
    // Form
    'form.title': 'Өтінім қалдырыңыз',
    'form.subtitle': 'Көлігіңізді өзіміз эвакуатормен алып кетеміз',
    'form.name': 'Атыңыз',
    'form.phone': 'Телефон',
    'form.problem': 'Мәселені сипаттаңыз',
    'form.submit': 'Өтінім жіберу',
    'form.callback': '15 минут ішінде сізбен хабарласамыз',
    'form.success': 'Өтінім жіберілді!',
    
    // Footer
    'footer.city': 'Ақтөбе',
    'footer.rights': 'Барлық құқықтар қорғалған',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
