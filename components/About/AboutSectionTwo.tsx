"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Scroll-reveal hook ────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    const node = ref.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, [threshold]);
  return { ref, visible };
}

// ─── SECTION 1: WHO WE ARE ─────────────────────────────────────────────────
const SectionOne = () => {
  const { ref: imgRef, visible: imgVisible } = useInView(0.08);
  const { ref: txtRef, visible: txtVisible } = useInView(0.08);

  const advantages = [
    { title: "Expert Faculty", desc: "Learn from industry veterans, award-winning designers, and internationally recognized fashion professionals" },
    { title: "State-of-the-Art Facilities", desc: "Access professional design studios, digital pattern-making labs, textile libraries, and industrial-grade equipment" },
    { title: "Industry Partnerships", desc: "Network with top fashion brands, attend exclusive industry events, and gain real-world experience through internships" },
    { title: "Global Exposure", desc: "Participate in international fashion weeks, study tours, and exchange programs with partner institutions worldwide" },
    { title: "Portfolio Development", desc: "Build a professional portfolio with guidance from experts, showcased at our annual graduate fashion show" },
  ];

  const images = [
    { src: "/images/about/about3.jpg", delay: 0 },
    { src: "/images/about/about4.jpg", delay: 130 },
    { src: "/images/about/about6.jpg", delay: 250 },
    { src: "/images/about/about5.jpg", delay: 370 },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left: 2×2 mosaic — staggered pop-in */}
          <div ref={imgRef} className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-md ${i % 2 !== 0 ? "mt-10" : ""}`}
                style={{
                  opacity: imgVisible ? 1 : 0,
                  transform: imgVisible ? "translateY(0) scale(1)" : "translateY(52px) scale(0.93)",
                  transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${img.delay}ms,
                               transform 0.65s cubic-bezier(0.22,1,0.36,1) ${img.delay}ms`,
                  willChange: "opacity, transform",
                }}
              >
                <Image
                  src={img.src}
                  alt="Bee Academy"
                  width={400}
                  height={500}
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ height: i % 2 === 0 ? "clamp(180px,28vw,400px)" : "clamp(150px,22vw,340px)" }}
                />
              </div>
            ))}
          </div>

          {/* Right: text + advantages — slides from right */}
          <div
            ref={txtRef}
            style={{
              opacity: txtVisible ? 1 : 0,
              transform: txtVisible ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
              willChange: "opacity, transform",
            }}
          >
            <span
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-black tracking-[0.22em] uppercase"
              style={{ background: "rgba(200,132,74,0.10)", color: "#a0612a", border: "1px solid rgba(200,132,74,0.28)" }}
            >
              Who We Are
            </span>
            <h2
              className="mb-6 text-3xl font-bold md:text-4xl lg:text-[2.6rem] leading-tight"
              style={{ color: "#1a0e04", fontFamily: "'Georgia', serif" }}
            >
              Shaping Creative Careers —{" "}
              <span style={{ background: "linear-gradient(120deg,#a0612a,#C8844A,#e8b48a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Fashion & More
              </span>
            </h2>
            <p className="mb-4 text-base leading-relaxed" style={{ color: "#5a4030" }}>
              For over two decades, our academy has been at the forefront of creative education, with a strong emphasis on fashion design while supporting a broad range of equally valued creative programs.
            </p>
            <p className="mb-4 text-base leading-relaxed" style={{ color: "#5a4030" }}>
              We combine traditional craftsmanship with cutting-edge technology, offering students a comprehensive education that prepares them for diverse creative industries. Our experienced faculty, facilities, and industry connections create a rich learning environment.
            </p>
            <p className="mb-8 text-base leading-relaxed" style={{ color: "#5a4030" }}>
              From conceptual design to production and creative entrepreneurship, we equip students with the skills, knowledge, and confidence to excel across multiple creative career paths, including fashion and related disciplines.
            </p>

            <div className="space-y-4">
              {advantages.map((adv, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start"
                  style={{
                    opacity: txtVisible ? 1 : 0,
                    transform: txtVisible ? "translateX(0)" : "translateX(28px)",
                    transition: `opacity 0.5s ease ${420 + i * 80}ms, transform 0.5s ease ${420 + i * 80}ms`,
                  }}
                >
                  <div
                    className="shrink-0 w-[3px] self-stretch rounded-full"
                    style={{ background: "linear-gradient(180deg,#C8844A,rgba(200,132,74,0.18))", minHeight: "44px" }}
                  />
                  <div>
                    <h4 className="font-bold text-sm mb-0.5" style={{ color: "#1a0e04" }}>{adv.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#7a5030" }}>{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── SECTION 2: OUR ACHIEVEMENTS ──────────────────────────────────────────
const achievements = [
  {
    title: "International Accreditation",
    desc: "Accredited by leading fashion education bodies and recognized globally for academic excellence",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80",
  },
  {
    title: "Award-Winning Programs",
    desc: "Multiple awards for innovative curriculum design and outstanding contribution to fashion education",
    img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=700&q=80",
  },
  {
    title: "Industry Recognition",
    desc: "Alumni have won prestigious fashion competitions and established successful brands worldwide",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80",
  },
  {
    title: "Strong Alumni Network",
    desc: "Graduates working with renowned fashion houses including Dior, Gucci, Chanel, and more",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80",
  },
  {
    title: "Global Partnerships",
    desc: "Collaborations with top fashion schools in Paris, Milan, London, and New York",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700&q=80",
  },
  {
    title: "Sustainability Leadership",
    desc: "Pioneering sustainable fashion practices and certified as a green campus institution",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=80",
  },
];

const SectionTwo = () => {
  const { ref, visible } = useInView(0.06);

  return (
    <section
      className="py-16 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(150deg,#fdf8f3 0%,#fff9f5 55%,#fef5ec 100%)" }}
    >
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <span
            className="inline-block text-[10px] font-black tracking-[0.28em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#a0612a", background: "rgba(200,132,74,0.09)", border: "1px solid rgba(200,132,74,0.28)" }}
          >
            Our Achievements
          </span>
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ fontFamily: "'Georgia', serif", color: "#1a0e04" }}
          >
            Recognition &{" "}
            <span style={{ background: "linear-gradient(120deg,#a0612a,#C8844A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Excellence
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base" style={{ color: "#7a5030" }}>
            Our commitment to excellence has earned us recognition from industry leaders and educational institutions worldwide
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.93)",
                transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 85}ms,
                             transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 85}ms`,
                willChange: "opacity, transform",
                background: "#ffffff",
                border: "1px solid rgba(200,132,74,0.16)",
                boxShadow: "0 2px 18px rgba(160,97,42,0.07)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 14px 40px rgba(160,97,42,0.15)";
                e.currentTarget.style.borderColor = "rgba(200,132,74,0.42)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 2px 18px rgba(160,97,42,0.07)";
                e.currentTarget.style.borderColor = "rgba(200,132,74,0.16)";
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.7s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ height: "3px", background: "linear-gradient(90deg,#C8844A,rgba(200,132,74,0.15))" }} />
              <div className="p-5">
                <h3
                  className="mb-2 text-base font-bold"
                  style={{ fontFamily: "'Georgia', serif", color: "#1a0e04" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5030" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── SECTION 3: WHY CHOOSE US ──────────────────────────────────────────────
const advantages = [
  {
    title: "Innovation Lab",
    desc: "Dedicated space for experimenting with smart textiles, 3D printing, and emerging fashion technologies to stay ahead of industry trends",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&q=80",
  },
  {
    title: "Entrepreneurship Support",
    desc: "Business incubator program helping students launch their own fashion brands with mentorship, funding guidance, and business planning resources",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
  },
  {
    title: "Digital Design Tools",
    desc: "Access to industry-standard software including CLO 3D, Adobe Creative Suite, Gerber Technology, and Lectra for digital fashion design",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
  },
  {
    title: "Internship Placement",
    desc: "Guaranteed internship opportunities with leading fashion houses, boutiques, and textile manufacturers both locally and internationally",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    title: "Mentorship Program",
    desc: "One-on-one mentoring from successful alumni and industry professionals who guide you throughout your educational journey and beyond",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
  },
  {
    title: "Resource Library",
    desc: "Extensive collection of fashion archives, trend forecasting databases, fabric samples, and digital resources available 24/7",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
  },
  {
    title: "Fashion Show Platform",
    desc: "Annual graduate fashion show attended by industry buyers, media, and recruiters, providing unparalleled exposure for emerging talent",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
  },
  {
    title: "Career Services",
    desc: "Lifetime career support including resume building, interview preparation, job placement assistance, and continuous professional development",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  },
];

const SectionThree = () => {
  const { ref, visible } = useInView(0.05);

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <span
            className="inline-block text-[10px] font-black tracking-[0.28em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#a0612a", background: "rgba(200,132,74,0.09)", border: "1px solid rgba(200,132,74,0.25)" }}
          >
            Why Choose Us
          </span>
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ fontFamily: "'Georgia', serif", color: "#1a0e04" }}
          >
            Additional{" "}
            <span style={{ background: "linear-gradient(120deg,#a0612a,#C8844A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Advantages
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base" style={{ color: "#7a5030" }}>
            Beyond education, we provide comprehensive support to ensure your success in the fashion industry
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="group flex rounded-2xl overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateX(0) scale(1)"
                  : i % 2 === 0 ? "translateX(-44px) scale(0.96)" : "translateX(44px) scale(0.96)",
                transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 65}ms,
                             transform 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 65}ms`,
                willChange: "opacity, transform",
                background: "#fff",
                border: "1px solid rgba(200,132,74,0.14)",
                boxShadow: "0 2px 16px rgba(160,97,42,0.06)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 10px 36px rgba(160,97,42,0.14)";
                e.currentTarget.style.borderColor = "rgba(200,132,74,0.38)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(160,97,42,0.06)";
                e.currentTarget.style.borderColor = "rgba(200,132,74,0.14)";
              }}
            >
              {/* Left image */}
              <div className="w-28 shrink-0 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ minHeight: "110px" }}
                />
              </div>
              {/* Amber accent line */}
              <div style={{ width: "3px", background: "linear-gradient(180deg,#C8844A,rgba(200,132,74,0.15))", flexShrink: 0 }} />
              {/* Text */}
              <div className="flex-1 p-4">
                <h3 className="mb-1 text-sm font-bold" style={{ color: "#1a0e04" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#7a5030" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── Main Export ───────────────────────────────────────────────────────────
const AboutSectionTwo = () => (
  <>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </>
);

export default AboutSectionTwo;