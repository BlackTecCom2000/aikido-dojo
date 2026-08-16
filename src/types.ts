export type Language = 'ru' | 'en' | 'tg';

export interface StudentRegistration {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  group: 'beginners' | 'adults' | 'kids' | 'weapons';
  experience: 'beginner' | 'intermediate' | 'advanced';
  schedulePreference: string;
  studentId: string;
  joinedDate: string;
  status: 'active' | 'trial' | 'graduated' | 'pending';
  belt: string;
  attendanceCount?: number;
  notes?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
  kanji: string;
  tags: string[];
}

export interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  title: string;
  group: 'beginners' | 'adults' | 'kids' | 'weapons';
  sensei: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  rank: string;
  experience: string;
  bio: string;
  kanji: string;
  image: string;
}

export interface BeltRank {
  kyu: string;
  color: string;
  beltColorClass: string;
  textColorClass: string;
  title: string;
  duration: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
