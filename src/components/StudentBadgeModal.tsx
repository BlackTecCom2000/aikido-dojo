import React from 'react';
import type { Language, StudentRegistration } from '../types';
import { translations } from '../i18n/translations';
import { AikidoLogo } from './AikidoLogo';
import { X, CheckCircle, QrCode, ShieldCheck } from 'lucide-react';

interface StudentBadgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentRegistration | null;
  currentLang: Language;
}

export const StudentBadgeModal: React.FC<StudentBadgeModalProps> = ({
  isOpen,
  onClose,
  student,
  currentLang,
}) => {
  if (!isOpen || !student) return null;

  const t = translations[currentLang].auth;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-down">
      <div className="relative w-full max-w-md bg-[#0F172A] border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
        {/* Decorative Golden Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-400 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-400 rounded-br-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close profile modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dojo Student Pass Card Design */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="font-kanji font-bold">合氣道</span>
            <span>•</span>
            <span>{t.studentBadgeTitle}</span>
          </div>
          <h3 className="text-xl font-bold font-sans text-white">
            ТЭНСИН АЙКИДО ДОДЗЁ
          </h3>
          <p className="text-[11px] text-amber-300/90 font-medium">
            Шихан Абдуллозода Ҷумъахон (6 Дан)
          </p>
        </div>

        {/* Student ID Badge Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950/70 border border-slate-700 rounded-2xl p-5 shadow-xl mb-6 relative overflow-hidden">
          {/* Card Watermark Kanji */}
          <span className="absolute -bottom-6 -right-6 text-8xl font-kanji font-bold text-white/5 pointer-events-none">
            道
          </span>

          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-700/60">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center p-2.5 shadow-lg shrink-0 font-bold text-xl">
              <AikidoLogo size={36} fill="#0F172A" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400">
                {t.studentIdLabel}: {student.studentId}
              </span>
              <h4 className="text-lg font-bold text-white leading-tight font-sans">
                {student.fullName}
              </h4>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold mt-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{t.statusActive}</span>
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-sans">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-mono">Группа:</span>
              <span className="font-semibold text-amber-200 capitalize">{student.group}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-mono">Опыт:</span>
              <span className="font-semibold text-slate-200 capitalize">{student.experience}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-mono">Время:</span>
              <span className="font-semibold text-slate-200">{student.schedulePreference}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-mono">Дата выдачи:</span>
              <span className="font-semibold text-slate-200">{student.joinedDate}</span>
            </div>
          </div>

          {/* Approval Stamp */}
          <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-amber-300/90">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.approvedBy}</span>
            </div>
            {/* Hanko Stamp */}
            <div className="w-6 h-6 rounded bg-red-700 text-white font-kanji font-bold text-[10px] flex items-center justify-center select-none shadow">
              印
            </div>
          </div>

          {/* Simulated QR Code for Dojo Access */}
          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <QrCode className="w-7 h-7 text-amber-400" />
              <span>Предъявите на входе в Додзё</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400/80 font-bold uppercase">
              AIKIKAI VERIFIED
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
        >
          {t.closeBadge}
        </button>
      </div>
    </div>
  );
};
