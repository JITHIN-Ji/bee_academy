"use client";

import { useEffect, useRef } from "react";
import tutorsData from "./tutorsData";
import SingleTutor from "./SingleTutor";

const Tutors = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerCards = (target: Element) => {
      const cards = target.querySelectorAll(".tutor-card");
      cards.forEach((card, i) => {
        setTimeout(() => {
          (card as HTMLElement).style.opacity = "1";
          (card as HTMLElement).style.transform = "translateY(0) scale(1)";
        }, i * 120);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerCards(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    const section = sectionRef.current;
    if (section) {
      // If already in viewport on mount (common on mobile), trigger immediately
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        triggerCards(section);
      } else {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fdf8f3 0%, #fffcf8 60%, #fef6ee 100%)",
      }}
    >
      {/* Soft bg orbs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(210,145,90,0.08) 0%, transparent 70%)",
          transform: "translate(35%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(180,120,70,0.07) 0%, transparent 70%)",
          transform: "translate(-35%, 30%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {tutorsData.map((tutor, index) => (
            <div
              key={tutor.id}
              className="tutor-card"
              style={{
                opacity: 0,
                transform: "translateY(32px) scale(0.97)",
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <SingleTutor tutor={tutor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutors;