import React from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { Star, Quote, MessageSquare } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang].testimonials;

  return (
    <section id="reviews" className="relative bg-[#F5EFE6] text-[#2C221E] py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE3D7] border border-[#D4C3A3] text-[#2C221E] text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-red-700" />
            <span>Community Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-[#2C221E]/80 text-sm sm:text-base font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF9] border border-[#D4C3A3]/60 rounded-3xl p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-red-700/40" />
                </div>

                <p className="text-sm text-[#2C221E]/85 leading-relaxed italic mb-8 font-sans">
                  «{item.content}»
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#D4C3A3]/40">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-red-700/60"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#2C221E] font-sans">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#2C221E]/60">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
