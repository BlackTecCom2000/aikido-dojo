import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { AikidoLogo } from './AikidoLogo';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface FeaturesSectionProps {
  currentLang: Language;
  onOpenAuth: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  currentLang,
  onOpenAuth,
}) => {
  const t = translations[currentLang].features;
  const [activeCardId, setActiveCardId] = useState<string>(t.items[0].id);
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('data-card-id');
        if (!id) return;

        if (entry.isIntersecting) {
          setVisibleCards((prev) => ({ ...prev, [id]: true }));

          // Active tab threshold check
          if (entry.intersectionRatio >= 0.4) {
            setActiveCardId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.15, 0.4, 0.6],
    });

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [t.items]);

  const scrollToCard = (id: string) => {
    setActiveCardId(id);
    const element = cardRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const featureVideos = [
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4",
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4",
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4",
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4",
  ];

  return (
    <section 
      id="features" 
      className="relative min-h-screen w-full px-5 md:px-10 lg:px-16 py-20 md:py-32 lg:py-40 text-white bg-neutral-950"
    >
      {/* Fixed Ambient Background Image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center filter brightness-[0.25] contrast-125 transition-opacity duration-1000"
        style={{
          backgroundImage: `url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85")`
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-12 lg:gap-24 xl:gap-36">
        
        {/* Left Column (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-24">
          <div>
            {/* Header Kanji Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-6">
              <span className="font-kanji font-bold">武道</span>
              <span>•</span>
              <span>Dojo Artistry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-normal text-white font-sans mb-8">
              {t.stickyHeading}
            </h2>

            {/* Feature Nav Buttons (hidden below lg) */}
            <div className="hidden lg:flex flex-col gap-3">
              {t.items.map((item) => {
                const isActive = activeCardId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToCard(item.id)}
                    className={`text-left px-5 py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between text-sm font-semibold ${
                      isActive
                        ? 'bg-white/20 text-white border border-white/30 backdrop-blur-md translate-x-2 shadow-lg'
                        : 'bg-black/20 text-white/40 hover:text-white/80 hover:bg-black/40'
                    }`}
                  >
                    <span className="truncate pr-3">{item.title}</span>
                    <span className={`font-kanji text-base ${isActive ? 'text-amber-400 font-bold' : 'text-white/30'}`}>
                      {item.kanji}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Sticky CTA (hidden below lg) */}
          <div className="hidden lg:block pt-8 border-t border-white/10">
            <p className="text-white/70 text-xs leading-relaxed font-medium mb-4">
              {t.ctaText}
            </p>

            <button
              onClick={onOpenAuth}
              className="w-full bg-white hover:bg-neutral-100 text-black text-xs font-bold px-5 py-3 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-red-600" />
              <span>{t.startFree}</span>
            </button>
          </div>
        </div>

        {/* Right Column (Scrolling Cards) */}
        <div className="flex flex-col gap-16 md:gap-24">
          {t.items.map((item, index) => {
            const isVisible = visibleCards[item.id];
            const videoSrc = featureVideos[index % featureVideos.length];

            return (
              <div
                key={item.id}
                ref={(el) => { cardRefs.current[item.id] = el; }}
                data-card-id={item.id}
                className={`bg-black/30 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-700 transform ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-12 opacity-0'
                }`}
              >
                {/* Card Top Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5 border border-white/10">
                      <AikidoLogo size={24} fill="rgba(255,255,255,0.9)" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-widest">
                        Module 0{index + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-3xl font-kanji font-bold text-red-500/80">
                    {item.kanji}
                  </span>
                </div>

                {/* Card Subtitle */}
                <p className="text-amber-200/90 text-xs sm:text-sm font-semibold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{item.subTitle}</span>
                </p>

                {/* Card Video Showcase */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10 mb-6 shadow-inner group">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Description */}
                <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {/* Card Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
