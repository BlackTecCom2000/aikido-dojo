import React, { useState } from 'react';
import type { Language, StudentRegistration } from '../types';
import { 
  X, Search, Filter, UserPlus, Download, Trash2, Edit3, 
  Eye, CheckCircle, Clock, Phone, Award, Users
} from 'lucide-react';
import { AikidoLogo } from './AikidoLogo';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  students: StudentRegistration[];
  onUpdateStudents: (students: StudentRegistration[]) => void;
  onViewStudentBadge: (student: StudentRegistration) => void;
  currentLang: Language;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  students,
  onUpdateStudents,
  onViewStudentBadge,
  currentLang,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<StudentRegistration | null>(null);

  // Form fields for Add/Edit
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formGroup, setFormGroup] = useState<'beginners' | 'adults' | 'kids' | 'weapons'>('beginners');
  const [formExperience, setFormExperience] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [formSchedule, setFormSchedule] = useState('Mon/Wed/Fri 18:00');
  const [formStatus, setFormStatus] = useState<'active' | 'trial' | 'graduated' | 'pending'>('active');
  const [formBelt, setFormBelt] = useState('6 Кю (Белый)');
  const [formNotes, setFormNotes] = useState('');

  if (!isOpen) return null;

  // Filter students
  const filteredStudents = students.filter((s) => {
    const matchesSearch = 
      s.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.phone.includes(searchQuery) ||
      s.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.email && s.email.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesGroup = selectedGroup === 'all' || s.group === selectedGroup;
    const matchesStatus = selectedStatus === 'all' || s.status === selectedStatus;

    return matchesSearch && matchesGroup && matchesStatus;
  });

  // KPI Metrics
  const totalStudents = students.length;
  const activeStudentsCount = students.filter((s) => s.status === 'active').length;
  const trialStudentsCount = students.filter((s) => s.status === 'trial').length;
  const blackBeltsCount = students.filter((s) => s.belt.includes('Дан') || s.status === 'graduated').length;

  const handleDeleteStudent = (id: string) => {
    if (window.confirm(currentLang === 'ru' ? 'Удалить этого ученика из базы?' : 'Delete this student?')) {
      const updated = students.filter((s) => s.id !== id);
      onUpdateStudents(updated);
    }
  };

  const handleOpenAddModal = () => {
    setEditingStudent(null);
    setFormName('');
    setFormPhone('');
    setFormEmail('');
    setFormGroup('beginners');
    setFormExperience('beginner');
    setFormSchedule('Mon/Wed/Fri 18:00');
    setFormStatus('active');
    setFormBelt('6 Кю (Белый)');
    setFormNotes('');
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (student: StudentRegistration) => {
    setEditingStudent(student);
    setFormName(student.fullName);
    setFormPhone(student.phone);
    setFormEmail(student.email);
    setFormGroup(student.group);
    setFormExperience(student.experience);
    setFormSchedule(student.schedulePreference);
    setFormStatus(student.status);
    setFormBelt(student.belt);
    setFormNotes(student.notes || '');
    setIsAddModalOpen(true);
  };

  const handleSaveStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    if (editingStudent) {
      // Update existing
      const updated = students.map((s) => {
        if (s.id === editingStudent.id) {
          return {
            ...s,
            fullName: formName,
            phone: formPhone,
            email: formEmail,
            group: formGroup,
            experience: formExperience,
            schedulePreference: formSchedule,
            status: formStatus,
            belt: formBelt,
            notes: formNotes,
          };
        }
        return s;
      });
      onUpdateStudents(updated);
    } else {
      // Create new
      const randomId = 'TK-2026-' + Math.floor(1000 + Math.random() * 9000);
      const newEntry: StudentRegistration = {
        id: 'st-' + Date.now(),
        fullName: formName,
        phone: formPhone,
        email: formEmail || 'student@dojo.tj',
        group: formGroup,
        experience: formExperience,
        schedulePreference: formSchedule,
        studentId: randomId,
        joinedDate: new Date().toLocaleDateString(),
        status: formStatus,
        belt: formBelt,
        attendanceCount: 1,
        notes: formNotes,
      };
      onUpdateStudents([newEntry, ...students]);
    }

    setIsAddModalOpen(false);
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['ID', 'Full Name', 'Phone', 'Email', 'Group', 'Belt', 'Status', 'Joined Date', 'Notes'];
    const rows = students.map((s) => [
      s.studentId,
      `"${s.fullName}"`,
      `"${s.phone}"`,
      `"${s.email}"`,
      s.group,
      `"${s.belt}"`,
      s.status,
      s.joinedDate,
      `"${s.notes || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `aikido_dojo_students_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in-down">
      <div className="relative w-full max-w-7xl h-[92vh] bg-slate-900 border-2 border-amber-400/40 rounded-3xl shadow-2xl text-white flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-6 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-700 flex items-center justify-center p-2 shadow-md">
              <AikidoLogo size={24} fill="#FFFDF9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold font-sans text-white">
                  Панель Администратора Додзё (CRM)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] font-mono font-bold">
                  MASTER ACCESS
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Куратор: Шихан Абдуллозода Ҷумъахон (6 Дан Айкикай)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
              title="Экспорт в CSV"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Экспорт CSV</span>
            </button>

            <button
              onClick={handleOpenAddModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/30 transition-transform active:scale-95"
            >
              <UserPlus className="w-4 h-4 text-amber-300" />
              <span>Добавить Ученика</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors ml-2"
              aria-label="Закрыть админ-панель"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-900/90 border-b border-slate-800">
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Всего в базе</span>
              <span className="text-xl font-bold text-white font-mono">{totalStudents}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Активные ученики</span>
              <span className="text-xl font-bold text-emerald-400 font-mono">{activeStudentsCount}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Пробные занятия</span>
              <span className="text-xl font-bold text-amber-300 font-mono">{trialStudentsCount}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Чёрные пояса (Дан)</span>
              <span className="text-xl font-bold text-amber-400 font-mono">{blackBeltsCount}</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 sm:p-6 bg-slate-900 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по имени, телефону, ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Group & Status Filters */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="bg-transparent text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-slate-900">Все группы</option>
                <option value="beginners" className="bg-slate-900">Новички</option>
                <option value="adults" className="bg-slate-900">Взрослые (Шихан)</option>
                <option value="kids" className="bg-slate-900">Дети (6-14)</option>
                <option value="weapons" className="bg-slate-900">Оружие (Боккэн)</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700 text-xs">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-transparent text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-slate-900">Все статусы</option>
                <option value="active" className="bg-slate-900">Активные</option>
                <option value="trial" className="bg-slate-900">Пробный период</option>
                <option value="pending" className="bg-slate-900">Ожидающие</option>
                <option value="graduated" className="bg-slate-900">Аттестованные</option>
              </select>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  <th className="pb-3 px-3">Ученик / ID</th>
                  <th className="pb-3 px-3">Контакты</th>
                  <th className="pb-3 px-3">Группа & Расписание</th>
                  <th className="pb-3 px-3">Степень (Пояс)</th>
                  <th className="pb-3 px-3">Статус</th>
                  <th className="pb-3 px-3">Дата / Посещения</th>
                  <th className="pb-3 px-3 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs font-sans">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">
                      Ученики по заданным критериям не найдены.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student) => {
                    const statusConfig = {
                      active: { label: 'Активен', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
                      trial: { label: 'Пробный', bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
                      pending: { label: 'Ожидает', bg: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
                      graduated: { label: 'Мастер', bg: 'bg-red-500/10 text-red-400 border-red-500/30' },
                    }[student.status];

                    return (
                      <tr key={student.id} className="hover:bg-slate-800/40 transition-colors group">
                        {/* Name & ID */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-amber-300 text-xs shrink-0">
                              {student.fullName.charAt(0)}
                            </div>
                            <div>
                              <span className="font-bold text-white block">
                                {student.fullName}
                              </span>
                              <span className="text-[10px] font-mono text-amber-400/90">
                                {student.studentId}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Contacts */}
                        <td className="py-3.5 px-3">
                          <div className="space-y-1">
                            <a 
                              href={`https://wa.me/${student.phone.replace(/[^0-9]/g, '')}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 text-emerald-400" />
                              <span>{student.phone}</span>
                            </a>
                            {student.email && (
                              <span className="text-[11px] text-slate-400 block truncate max-w-[150px]">
                                {student.email}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Group */}
                        <td className="py-3.5 px-3">
                          <div>
                            <span className="font-semibold text-slate-200 block capitalize">
                              {student.group === 'adults' ? 'Взрослые (Шихан)' : student.group}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {student.schedulePreference}
                            </span>
                          </div>
                        </td>

                        {/* Belt */}
                        <td className="py-3.5 px-3">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-amber-200 text-[11px] font-medium">
                            🥋 {student.belt}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[10px] font-semibold ${statusConfig.bg}`}>
                            {statusConfig.label}
                          </span>
                        </td>

                        {/* Joined / Attendance */}
                        <td className="py-3.5 px-3 text-[11px] text-slate-400">
                          <div>{student.joinedDate}</div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            Посещений: {student.attendanceCount || 0}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => onViewStudentBadge(student)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-white transition-colors"
                              title="Посмотреть цифровой пропуск"
                            >
                              <Eye className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => handleOpenEditModal(student)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-400 hover:text-white transition-colors"
                              title="Редактировать"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => handleDeleteStudent(student.id)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-900/50 text-red-400 hover:text-red-300 transition-colors"
                              title="Удалить"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Student Dialog */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-down">
            <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-xl font-bold mb-4 font-sans text-white">
                {editingStudent ? 'Редактировать Ученика' : 'Добавить Нового Ученика'}
              </h3>

              <form onSubmit={handleSaveStudent} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">ФИО Ученика</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Алиджон Бобоев"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Телефон / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+992 900 00 00 00"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="info@mail.tj"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Группа</label>
                    <select
                      value={formGroup}
                      onChange={(e) => setFormGroup(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="beginners">Новички</option>
                      <option value="adults">Взрослые (Шихан)</option>
                      <option value="kids">Дети (6-14)</option>
                      <option value="weapons">Оружие (Боккэн)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Пояс / Степень</label>
                    <select
                      value={formBelt}
                      onChange={(e) => setFormBelt(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="6 Кю (Белый)">6 Кю (Белый)</option>
                      <option value="5 Кю (Желтый)">5 Кю (Желтый)</option>
                      <option value="4 Кю (Оранжевый)">4 Кю (Оранжевый)</option>
                      <option value="3 Кю (Зеленый)">3 Кю (Зеленый)</option>
                      <option value="2 Кю (Коричневый)">2 Кю (Коричневый)</option>
                      <option value="1 Кю (Коричневый)">1 Кю (Коричневый)</option>
                      <option value="1 Дан (Черный пояс)">1 Дан (Черный пояс)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Статус</label>
                    <select
                      value={formStatus}
                      onChange={(e) => setFormStatus(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="active">Активен</option>
                      <option value="trial">Пробный период</option>
                      <option value="pending">Ожидает</option>
                      <option value="graduated">Аттестован (Мастер)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Время</label>
                    <input
                      type="text"
                      value={formSchedule}
                      onChange={(e) => setFormSchedule(e.target.value)}
                      placeholder="Mon/Wed/Fri 18:00"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Заметки / Примечания</label>
                  <textarea
                    rows={2}
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    placeholder="Индивидуальные особенности, дата экзамена..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-transform active:scale-95"
                >
                  {editingStudent ? 'Сохранить Изменения' : 'Добавить в Базу Додзё'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
