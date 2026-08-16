import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Award, UserCheck, Shield, Sparkles } from 'lucide-react';

interface InstructorsSectionProps {
  currentLang: Language;
  onOpenAuth: () => void;
}

export const InstructorsSection: React.FC<InstructorsSectionProps> = ({
  currentLang,
  onOpenAuth,
}) => {
  const t = translations[currentLang].instructors;
  const chiefMaster = t.items[0];
  const assistantMasters = t.items.slice(1);

  return (
    <section id="sensei" className="relative bg-[#0B0F19] py-24 md:py-36 px-6 text-white overflow-hidden border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.lineageBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed mb-6">
            {t.subtitle}
          </p>

          <div className="inline-block px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-amber-200/90">
            {t.lineageText}
          </div>
        </div>

        {/* Featured Chief Master Card: Абдуллозода Ҷумъахон */}
        {chiefMaster && (
          <div className="mb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950/50 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            {/* Background Kanji Watermark */}
            <span className="absolute -bottom-10 -right-6 text-9xl font-kanji font-bold text-white/5 pointer-events-none select-none">
              師範
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Master Photo with Golden Badge */}
              <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800 shadow-xl border border-amber-400/30">
                <img
                  src={chiefMaster.image}
                  alt={chiefMaster.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-300 font-kanji font-bold text-sm">
                  {chiefMaster.kanji}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-3 py-1 rounded-md bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow">
                    {chiefMaster.rank}
                  </span>
                </div>
              </div>

              {/* Master Bio & Credentials */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <Shield className="w-3.5 h-3.5" />
                    <span>{t.chiefMasterTitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2 font-sans tracking-tight">
                    {chiefMaster.name}
                  </h3>

                  <p className="text-sm font-semibold text-amber-300 mb-6">
                    {chiefMaster.role} • {chiefMaster.experience}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-6">
                    {chiefMaster.bio}
                  </p>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-8">
                    <p className="text-xs sm:text-sm font-serif italic text-amber-100/90 leading-relaxed">
                      {t.chiefMasterQuote}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenAuth}
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-red-600/30 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Записаться в группу Табарова Фотеҳа</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assistant Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assistantMasters.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col group shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <span className="text-xs font-kanji font-bold text-amber-400">
                    {instructor.kanji}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-1 rounded-md bg-red-600/90 text-white text-[11px] font-bold uppercase tracking-wider">
                    {instructor.rank}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-sans">
                    {instructor.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-semibold mb-3">
                    {instructor.role} • {instructor.experience}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {instructor.bio}
                  </p>
                </div>

                <button
                  onClick={onOpenAuth}
                  className="mt-6 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Записаться на занятие</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
