"use client";

import React, { useEffect, useRef, useState } from "react";
import { Testimonial } from "@/types/testimonial";

const testimonialData: Testimonial[] = [
  { id: 1, name: "Priya Sharma", designation: "Fashion Designer at ASOS", content: "This academy completely transformed my career! The hands-on training and industry connections helped me land my dream job at ASOS. The faculty is incredibly supportive and knowledgeable.", image: "", star: 5 },
  { id: 2, name: "Rahul Singh", designation: "Independent Designer & Entrepreneur", content: "Started my own fashion label after graduation! The business support and portfolio development sessions were invaluable. Best investment I made in my career.", image: "", star: 5 },
  { id: 3, name: "Ananya Gupta", designation: "Fashion Design Executive at Flipkart", content: "The curriculum is modern and relevant. I learned Adobe Suite, CLO 3D, and pattern making with expert guidance. Now leading design teams at a major e-commerce platform.", image: "", star: 5 },
  { id: 4, name: "Vikram Patel", designation: "Pattern Making Specialist at Raymond", content: "The studio facilities are world-class. Raw material access and professional equipment made learning practical and industry-relevant. Highly recommend this academy!", image: "", star: 5 },
  { id: 5, name: "Sneha Roy", designation: "Fashion Illustrator at Vogue India", content: "The mentorship program connected me with industry professionals. Their guidance helped me develop my unique design aesthetic and land an internship that became a permanent role.", image: "", star: 5 },
  { id: 6, name: "Arjun Kapoor", designation: "Senior Designer at Lifestyle", content: "Best decision ever! The placement team is exceptional - they literally helped us apply to companies and prepare for interviews. Got placed within 2 months of graduation.", image: "", star: 5 },
  { id: 7, name: "Meera Nair", designation: "Textile Designer at FabIndia", content: "The practical exposure to different fabrics and textile techniques was amazing. The industry visits and guest lectures from leading designers gave me real-world insights.", image: "", star: 5 },
  { id: 8, name: "Karan Malhotra", designation: "Fashion Stylist & Consultant", content: "From sketching to draping, every aspect was covered thoroughly. The portfolio I built here opened doors to top fashion houses. Forever grateful to the faculty!", image: "", star: 5 },
  { id: 9, name: "Aisha Khan", designation: "Design Manager at H&M", content: "The international curriculum and exposure to global fashion trends prepared me for working with international brands. The CAD training was particularly beneficial.", image: "", star: 5 },
  { id: 10, name: "Rohan Desai", designation: "Costume Designer - Film Industry", content: "The creative freedom and support I received here was unparalleled. Now working on major Bollywood productions. The costume design modules were incredibly detailed.", image: "", star: 5 },
  { id: 11, name: "Divya Menon", designation: "Accessories Designer at Hidesign", content: "The specialized modules in accessories and leather goods gave me a unique edge. The faculty helped me discover my niche in fashion accessories design.", image: "", star: 5 },
  { id: 12, name: "Siddharth Reddy", designation: "Fashion Blogger & Influencer", content: "Beyond design skills, I learned about fashion marketing, branding, and social media. This holistic approach helped me build a successful career as a fashion influencer.", image: "", star: 5 },
];

const BEE = "#C8844A";
const BEE_DARK = "#a0612a";
const BEE_LIGHT = "#e8b48a";

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

const avatarPalette = [
  { bg: "#3b1f0a", text: "#e8b48a" },
  { bg: "#5a2d0c", text: "#f0c9a0" },
  { bg: "#2a1505", text: "#d4956a" },
  { bg: "#6b3a18", text: "#fad4b0" },
  { bg: "#1e0f04", text: "#c8844a" },
  { bg: "#4a2410", text: "#ebb88a" },
];
const getAvatar = (id: number) => avatarPalette[id % avatarPalette.length];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24"
        fill={i < count ? BEE : "none"}
        stroke={i < count ? BEE : "#d4b898"}
        strokeWidth="1.5"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Card = ({
  testimonial,
  visible,
  index,
}: {
  testimonial: Testimonial;
  visible: boolean;
  index: number;
}) => {
  const avatar = getAvatar(testimonial.id);
  const delay = `${index * 0.07}s`;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1) translateY(0)"
          : "scale(0.75) translateY(40px)",
        transition: `opacity 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay},
                     transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}`,
      }}
    >
      <div
        className="group relative h-full flex flex-col gap-4 rounded-2xl p-6 cursor-default"
        style={{
          background: "#ffffff",
          border: `1px solid rgba(200,132,74,0.12)`,
          boxShadow: "0 2px 16px rgba(160,97,42,0.06)",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.boxShadow = "0 20px 52px rgba(160,97,42,0.18)";
          el.style.borderColor = "rgba(200,132,74,0.50)";
          el.style.transform = "translateY(-6px) scale(1.01)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.boxShadow = "0 2px 16px rgba(160,97,42,0.06)";
          el.style.borderColor = "rgba(200,132,74,0.12)";
          el.style.transform = "translateY(0) scale(1)";
        }}
      >
        <div
          className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${BEE}, ${BEE_LIGHT}, transparent)` }}
        />

        <StarRating count={testimonial.star} />

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#4a3020", fontFamily: "'Georgia', serif" }}
        >
          {testimonial.content}
        </p>

        <div
          className="h-px"
          style={{ background: `linear-gradient(90deg, rgba(200,132,74,0.3), rgba(232,180,138,0.15), transparent)` }}
        />

        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 tracking-wide"
            style={{ background: avatar.bg, color: avatar.text }}
          >
            {getInitials(testimonial.name)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate" style={{ color: "#1e0e04" }}>
              {testimonial.name}
            </p>
            <p className="text-xs mt-0.5 truncate" style={{ color: "#a06030" }}>
              {testimonial.designation}
            </p>
          </div>
          <div
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: "rgba(200,132,74,0.10)" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke={BEE} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const displayedTestimonials = showAll
    ? testimonialData
    : testimonialData.slice(0, 6);

  const triggerAnimation = (count: number) => {
    setVisibleCards([]);
    Array.from({ length: count }).forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 70);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            triggerAnimation(6);
          }
        });
      },
      { threshold: 0.1 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  useEffect(() => {
    if (showAll) triggerAnimation(testimonialData.length);
  }, [showAll]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-24 lg:py-32"
      style={{
        background: "linear-gradient(155deg, #fffefc 0%, #ffffff 55%, #fffcf8 100%)",
      }}
    >
      {/* Ambient orbs — very subtle */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,132,74,0.04) 0%, transparent 65%)", transform: "translate(35%,-35%)" }} />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,132,74,0.03) 0%, transparent 65%)", transform: "translate(-35%,35%)" }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-[10px] font-black tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: BEE_DARK, background: "rgba(200,132,74,0.07)", border: "1px solid rgba(200,132,74,0.18)" }}
          >
            Student Stories
          </span>

          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif", color: "#1e0e04" }}
          >
            What Our{" "}
            <span style={{
              background: `linear-gradient(120deg, ${BEE_DARK} 0%, ${BEE} 50%, ${BEE_LIGHT} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Students Say
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed" style={{ color: "#7a5030" }}>
            Hear from our successful graduates who have launched amazing careers in fashion design. Real stories from students who transformed their passion into professional success.
          </p>

          {/* Stats */}
          <div className="mt-8 flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            {[
              { value: "500+", label: "Graduates" },
              { value: "4.9★", label: "Avg Rating" },
              { value: "95%", label: "Placement Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black" style={{
                  background: `linear-gradient(120deg, ${BEE_DARK}, ${BEE})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {stat.value}
                </div>
                <div className="text-xs font-semibold mt-0.5" style={{ color: "#a06030" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              testimonial={testimonial}
              visible={visibleCards.includes(index)}
              index={index}
            />
          ))}
        </div>

        {/* Load more */}
        {!showAll && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 rounded-full text-sm font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${BEE_DARK}, ${BEE})`,
                boxShadow: "0 4px 20px rgba(200,132,74,0.35)",
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(200,132,74,0.50)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,132,74,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Load More Reviews ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;