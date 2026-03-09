"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

interface HighlightItem {
  number: string;
  title: string;
  description: string;
}

const cardDark = [
  { bg: "linear-gradient(135deg, #1a1209 0%, #2e1e08 100%)", accent: "rgba(200,132,74,0.7)" },
  { bg: "linear-gradient(135deg, #0d1a2e 0%, #112540 100%)", accent: "rgba(74,140,210,0.7)" },
  { bg: "linear-gradient(135deg, #0d2418 0%, #0f2e1e 100%)", accent: "rgba(60,180,110,0.7)" },
  { bg: "linear-gradient(135deg, #1a0d2e 0%, #261240 100%)", accent: "rgba(160,90,210,0.7)" },
  { bg: "linear-gradient(135deg, #1e1a08 0%, #2e2610 100%)", accent: "rgba(200,180,60,0.7)" },
  { bg: "linear-gradient(135deg, #081e2a 0%, #0d2e3e 100%)", accent: "rgba(60,170,200,0.7)" },
];

const AcademyHighlights = () => {
  const highlights: HighlightItem[] = [
    {
      number: "",
      title: "Successful Graduates",
      description: "Over 500 talented designers have graduated from our academy and are now working with top fashion brands globally",
    },
    {
      number: "",
      title: "Expert Faculty",
      description: "Learn from award-winning fashion designers with 10+ years of industry experience from renowned fashion houses",
    },
    {
      number: "",
      title: "Job Placement Rate",
      description: "Our career support ensures 100% job placement within 3 months of graduation with leading fashion companies",
    },
    {
      number: "",
      title: "Years of Excellence",
      description: "Established in 2009, we have been shaping the future of fashion design education for over a decade and a half",
    },
    {
      number: "",
      title: "International Partnerships",
      description: "We have collaborations with fashion schools and brands in USA, UK, France, Italy, and more",
    },
    {
      number: "",
      title: "Hours of Training",
      description: "Comprehensive curriculum with over 10,000 hours of hands-on practical training and studio experience",
    },
  ];

  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImageVisible(true); },
      { threshold: 0.05 }
    );
    const node = imageRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !cardsTriggered.current) {
          cardsTriggered.current = true;
          highlights.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, i]);
            }, i * 100);
          });
        }
      },
      { threshold: 0.05 }
    );
    const node = cardsRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container">

        <SectionTitle
          title="Why Choose Bee Academy?"
          paragraph="We are committed to providing world-class fashion design education that combines traditional techniques with modern digital tools, ensuring our students are industry-ready."
          center
          mb="80px"
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-14">

          {/* LEFT IMAGE — full uncropped image, slides from left */}
          <div
            ref={imageRef}
            className="w-full lg:w-5/12 shrink-0"
            style={{
              opacity: imageVisible ? 1 : 0,
              transform: imageVisible ? "translateX(0)" : "translateX(-80px)",
              transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
              willChange: "opacity, transform",
            }}
          >
            <div className="w-full rounded-lg overflow-hidden border border-body-color/[.15] dark:border-white/[.15]">
              {/*
                Using width/height=0 trick: width 100%, height auto
                so the image renders at its natural aspect ratio — fully visible, never cropped
              */}
              <Image
                src="/images/03.jpg"
                alt="Bee Academy"
                width={800}
                height={0}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* RIGHT GRID — dark cards, white text, pop-in */}
          <div ref={cardsRef} className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const card = cardDark[index % cardDark.length];
                return (
                  <div
                    key={index}
                    className="rounded-lg p-6 relative overflow-hidden"
                    style={{
                      background: card.bg,
                      border: `1px solid ${card.accent}`,
                      opacity: visibleCards.includes(index) ? 1 : 0,
                      transform: visibleCards.includes(index)
                        ? "scale(1) translateY(0)"
                        : "scale(0.85) translateY(28px)",
                      transition: `opacity 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s,
                                   transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s`,
                      willChange: "opacity, transform",
                    }}
                  >
                    {/* Corner glow */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${card.accent} 0%, transparent 70%)`,
                        transform: "translate(40%, -40%)",
                      }}
                    />
                    <div className="mb-3 relative z-10">
                      <h3 className="text-4xl font-bold" style={{ color: card.accent }}>{item.number}</h3>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white relative z-10">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed relative z-10" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* CTA — original unchanged */}
        <div className="mt-14 rounded-lg bg-gradient-to-r from-primary/10 to-pink-200/10 p-8 text-center dark:bg-gradient-to-r dark:from-primary/5 dark:to-pink-200/5">
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
            Ready to Start Your Fashion Design Journey?
          </h3>
          <p className="mb-6 text-body-color dark:text-body-color-dark">
            Join hundreds of successful designers who have transformed their passion into a thriving career
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-sm bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
            >
              Apply Now
            </a>
            <a
              href="/about"
              className="rounded-sm border-2 border-primary px-8 py-3 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/5"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademyHighlights;