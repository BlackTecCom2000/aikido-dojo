import React, { useState } from 'react';
import type { Language, ScheduleItem } from '../types';
import { translations } from '../i18n/translations';
import { Calendar, Clock, MapPin, User, ChevronDown, HelpCircle } from 'lucide-react';

interface ScheduleSectionProps {
  currentLang: Language;
  onOpenAuth: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  currentLang,
  onOpenAuth,
}) => {
  const tSchedule = translations[currentLang].schedule;
  const tFaq = translations[currentLang].faq;

  const [activeTab, setActiveTab] = useState<'all' | 'beginners' | 'adults' | 'kids' | 'weapons'>('all');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const scheduleData: ScheduleItem[] = [
    {
      id: 'sch-1',
      day: tSchedule.days.monWedFri,
      time: '18:00 - 19:30',
      title: 'Айкидо Новички / Beginner Foundations',
      group: 'beginners',
      sensei: 'Сэнсэй Зафар Каримов (5 Дан)',
      location: 'Додзё 1 (Зал Татами)',
    },
    {
      id: 'sch-2',
      day: tSchedule.days.monWedFri,
      time: '19:30 - 21:00',
      title: 'Взрослые / Advanced Aikido Practice',
      group: 'adults',
      sensei: 'Сэнсэй Алексей Громов (6 Дан)',
      location: 'Главный Зал',
    },
    {
      id: 'sch-3',
      day: tSchedule.days.tueThuSat,
      time: '16:30 - 17:45',
      title: 'Детская Группа / Youth Ki & Defense (6-14 лет)',
      group: 'kids',
      sensei: 'Инструктор Елена Соколова (3 Дан)',
      location: 'Малый Зал',
    },
    {
      id: 'sch-4',
      day: tSchedule.days.tueThuSat,
      time: '19:00 - 20:30',
      title: 'Оружие / Weapons Workshop (Bokken & Jo)',
      group: 'weapons',
      sensei: 'Сэнсэй Зафар Каримов (5 Дан)',
      location: 'Додзё 1 (Зал Татами)',
    },
    {
      id: 'sch-5',
      day: tSchedule.days.sunday,
      time: '10:00 - 12:30',
      title: 'Интенсив & Медитация / Kokyu-ho & Randori',
      group: 'adults',
      sensei: 'Совет Мастеров Додзё',
      location: 'Главный Зал',
    },
  ];

  const filteredSchedule = activeTab === 'all'
    ? scheduleData
    : scheduleData.filter((item) => item.group === activeTab);

  return (
    <section id="schedule" className="relative bg-[#0F172A] text-white py-20 md:py-32 px-6 overflow-hidden">
      {/* Background Zen Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule & Classes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4">
            {tSchedule.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            {tSchedule.subtitle}
          </p>
        </div>

        {/* Schedule Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['all', 'beginners', 'adults', 'kids', 'weapons'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tSchedule.tabs[tab]}
            </button>
          ))}
        </div>

        {/* Schedule Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                    {item.day}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-2 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span>{item.sensei}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenAuth}
                className="w-full py-2.5 rounded-xl bg-slate-700 hover:bg-red-600 text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{tSchedule.bookTrial}</span>
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto pt-12 border-t border-slate-800">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-sans">
              {tFaq.title}
            </h3>
          </div>

          <div className="space-y-4">
            {tFaq.items.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-amber-200 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-slate-700/40 pt-4 animate-fade-in-down">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
