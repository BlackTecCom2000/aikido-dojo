import React, { useState } from 'react';
import type { Language, StudentRegistration } from '../types';
import { translations } from '../i18n/translations';
import { X, Shield, Sparkles, User, Phone, Mail, Award, Clock } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onRegisterSuccess: (student: StudentRegistration) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onRegisterSuccess,
}) => {
  const t = translations[currentLang].auth;

  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState<'beginners' | 'adults' | 'kids' | 'weapons'>('beginners');
  const [experience, setExperience] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [schedulePreference, setSchedulePreference] = useState('Mon/Wed/Fri 18:00');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone) {
      alert(currentLang === 'ru' ? 'Пожалуйста, заполните Имя и Телефон' : 'Please enter Name and Phone');
      return;
    }

    const randomId = 'TK-2026-' + Math.floor(1000 + Math.random() * 9000);
    const newStudent: StudentRegistration = {
      id: `st-${Date.now()}`,
      fullName,
      phone,
      email: email || 'student@dojo.tj',
      group,
      experience,
      schedulePreference,
      studentId: randomId,
      joinedDate: new Date().toLocaleDateString(),
      status: 'pending',
      belt: '6 Кю (Белый)',
      attendanceCount: 0,
    };

    onRegisterSuccess(newStudent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in-down">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
        {/* Background Ki Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Membership Entry</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight">
            {t.modalTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t.modalSubtitle}
          </p>
        </div>

        {/* Mode Toggle Tabs */}
        <div className="flex bg-slate-800/80 rounded-xl p-1 mb-6">
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${
              mode === 'register' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabRegister}
          </button>
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${
              mode === 'login' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabLogin}
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.fullName}</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Фарход Каримов"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.phone}</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+992 900 00 00 00"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.email}</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@mail.tj"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          {mode === 'register' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.expLabel}</span>
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="beginner">{t.expOptions.beginner}</option>
                  <option value="intermediate">{t.expOptions.intermediate}</option>
                  <option value="advanced">{t.expOptions.advanced}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.groupLabel}</span>
                </label>
                <select
                  value={group}
                  onChange={(e) => setGroup(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="beginners">{t.groups.beginners}</option>
                  <option value="adults">{t.groups.adults}</option>
                  <option value="kids">{t.groups.kids}</option>
                  <option value="weapons">{t.groups.weapons}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.scheduleLabel}</span>
                </label>
                <select
                  value={schedulePreference}
                  onChange={(e) => setSchedulePreference(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="Mon/Wed/Fri 18:00">Пн / Ср / Пт — 18:00 (Вечер)</option>
                  <option value="Tue/Thu/Sat 19:00">Вт / Чт / Сб — 19:00 (Вечер)</option>
                  <option value="Sunday 10:00">Воскресенье — 10:00 (Утро)</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full mt-4 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-transform active:scale-98 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{mode === 'register' ? t.submitRegister : t.submitLogin}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
