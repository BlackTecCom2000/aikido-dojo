import { useState, useEffect } from 'react';
import type { Language, StudentRegistration } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InstructorsSection } from './components/InstructorsSection';
import { BeltProgressionSection } from './components/BeltProgressionSection';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AuthModal } from './components/AuthModal';
import { StudentBadgeModal } from './components/StudentBadgeModal';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { CheckCircle2 } from 'lucide-react';
import { initialStudentsSeed } from './data/studentsSeed';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isBadgeOpen, setIsBadgeOpen] = useState<boolean>(false);
  const [student, setStudent] = useState<StudentRegistration | null>(null);
  const [students, setStudents] = useState<StudentRegistration[]>(initialStudentsSeed);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load saved student registration if available
  useEffect(() => {
    const saved = localStorage.getItem('aikido_student');
    if (saved) {
      try {
        setStudent(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved student info', e);
      }
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('aikido_students');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) setStudents(parsed);
    } catch (e) {
      console.error('Failed to parse student database', e);
    }
  }, []);

  const updateStudents = (updatedStudents: StudentRegistration[]) => {
    setStudents(updatedStudents);
    localStorage.setItem('aikido_students', JSON.stringify(updatedStudents));
  };

  const handleRegisterSuccess = (newStudent: StudentRegistration) => {
    setStudent(newStudent);
    localStorage.setItem('aikido_student', JSON.stringify(newStudent));
    updateStudents([newStudent, ...students.filter((item) => item.phone !== newStudent.phone)]);
    setIsBadgeOpen(true);

    const msg = currentLang === 'ru' 
      ? 'Вы успешно зарегистрированы! Карта ученика создана.' 
      : currentLang === 'en'
      ? 'Registration successful! Your Student Pass is ready.'
      : 'Рӯйхатгирӣ муваффақона гузашт! Корти шогирд омода аст.';

    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F5EFE6] relative font-sans selection:bg-red-700 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in-down border border-emerald-400/30">
          <CheckCircle2 className="w-5 h-5 text-emerald-200" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Floating Pill Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        onOpenAuth={() => setIsAuthOpen(true)}
        student={student}
        onOpenBadge={() => setIsBadgeOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* SECTION 1: HERO */}
        <HeroSection
          currentLang={currentLang}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* SECTION 2: ABOUT & PHILOSOPHY */}
        <AboutSection
          currentLang={currentLang}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* SECTION 3: FEATURES (Scroll-driven sticky technique cards) */}
        <FeaturesSection
          currentLang={currentLang}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* SECTION 4: SENSEI & LINEAGE */}
        <InstructorsSection
          currentLang={currentLang}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* SECTION 5: BELTS & RANK PROGRESSION */}
        <BeltProgressionSection
          currentLang={currentLang}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* SECTION 6: SCHEDULE & FAQ */}
        <ScheduleSection
          currentLang={currentLang}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        {/* SECTION 7: TESTIMONIALS */}
        <TestimonialsSection
          currentLang={currentLang}
        />
      </main>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentLang={currentLang}
        onRegisterSuccess={handleRegisterSuccess}
      />

      <StudentBadgeModal
        isOpen={isBadgeOpen}
        onClose={() => setIsBadgeOpen(false)}
        student={student}
        currentLang={currentLang}
      />

      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        students={students}
        onUpdateStudents={updateStudents}
        onViewStudentBadge={(selectedStudent) => {
          setStudent(selectedStudent);
          setIsAdminOpen(false);
          setIsBadgeOpen(true);
        }}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;
