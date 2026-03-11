"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import featuresData from "./featuresData";

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftCards = entry.target.querySelectorAll(".card-left");
            const rightCards = entry.target.querySelectorAll(".card-right");
            const centerImg = entry.target.querySelector(".center-image") as HTMLElement;

            if (centerImg) {
              setTimeout(() => {
                centerImg.style.opacity = "1";
                centerImg.style.transform = "scale(1)";
              }, 100);
            }

            leftCards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateX(0)";
                (card as HTMLElement).setAttribute("data-animated", "true");
              }, 200 + i * 150);
            });

            rightCards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateX(0)";
                (card as HTMLElement).setAttribute("data-animated", "true");
              }, 200 + i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mobileImg = entry.target.querySelector(".mobile-image") as HTMLElement;
            const mobileCards = entry.target.querySelectorAll(".mobile-card");

            if (mobileImg) {
              setTimeout(() => {
                mobileImg.style.opacity = "1";
                mobileImg.style.transform = "scale(1)";
              }, 100);
            }

            mobileCards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, 200 + i * 100);
            });
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const leftCards = sectionRef.current.querySelectorAll(".card-left");
        const rightCards = sectionRef.current.querySelectorAll(".card-right");
        const centerImg = sectionRef.current.querySelector(".center-image") as HTMLElement;

        if (centerImg) {
          setTimeout(() => {
            centerImg.style.opacity = "1";
            centerImg.style.transform = "scale(1)";
          }, 100);
        }
        leftCards.forEach((card, i) => {
          setTimeout(() => {
            (card as HTMLElement).style.opacity = "1";
            (card as HTMLElement).style.transform = "translateX(0)";
            (card as HTMLElement).setAttribute("data-animated", "true");
          }, 200 + i * 150);
        });
        rightCards.forEach((card, i) => {
          setTimeout(() => {
            (card as HTMLElement).style.opacity = "1";
            (card as HTMLElement).style.transform = "translateX(0)";
            (card as HTMLElement).setAttribute("data-animated", "true");
          }, 200 + i * 150);
        });
      } else {
        observer.observe(sectionRef.current);
      }
    }

    if (mobileSectionRef.current) {
      const rect = mobileSectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const mobileImg = mobileSectionRef.current.querySelector(".mobile-image") as HTMLElement;
        const mobileCards = mobileSectionRef.current.querySelectorAll(".mobile-card");
        if (mobileImg) {
          setTimeout(() => {
            mobileImg.style.opacity = "1";
            mobileImg.style.transform = "scale(1)";
          }, 100);
        }
        mobileCards.forEach((card, i) => {
          setTimeout(() => {
            (card as HTMLElement).style.opacity = "1";
            (card as HTMLElement).style.transform = "translateY(0)";
          }, 200 + i * 100);
        });
      } else {
        mobileObserver.observe(mobileSectionRef.current);
      }
    }

    return () => {
      observer.disconnect();
      mobileObserver.disconnect();
    };
  }, []);

  const leftFeatures = featuresData.slice(0, 3);
  const rightFeatures = featuresData.slice(3, 6);

  return (
    <section
      id="features"
      className="relative py-16 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fffdfb 0%, #ffffff 60%, #fffaf5 100%)",
      }}
    >
      {/* Soft background orbs — much more subtle */}
      <div
        className="absolute top-10 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(210,145,90,0.04) 0%, transparent 70%)",
          transform: "translate(40%,-20%)",
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(180,120,70,0.04) 0%, transparent 70%)",
          transform: "translate(-40%, 20%)",
        }}
      />

      <div className="container mx-auto px-4 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#b8732e", background: "rgba(184,115,46,0.07)", border: "1px solid rgba(184,115,46,0.14)" }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: "#1c1007" }}
          >
            Why Choose{" "}
            <span
              style={{
                background: "linear-gradient(120deg, #b8732e 0%, #e8a55a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bee Institute?
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: "#7a5e44" }}>
            Comprehensive fashion design education with industry experts, hands-on training,
            and guaranteed career support to launch your fashion career.
          </p>
        </div>

        {/* ── DESKTOP: 3-column layout ── */}
        <div
          ref={sectionRef}
          className="hidden lg:grid lg:grid-cols-[1fr_300px_1fr] lg:gap-8 items-center overflow-hidden"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {leftFeatures.map((feature, i) => (
              <div
                key={feature.id}
                className="card-left group relative rounded-2xl p-6"
                style={{
                  opacity: 0,
                  transform: "translateX(-50px)",
                  transition: "opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s, border-color 0.3s",
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(184,115,46,0.12)",
                  boxShadow: "0 2px 14px rgba(150,90,30,0.05)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  if (e.currentTarget.getAttribute("data-animated") !== "true") return;
                  e.currentTarget.style.boxShadow = "0 10px 36px rgba(150,90,30,0.16)";
                  e.currentTarget.style.borderColor = "rgba(184,115,46,0.4)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  if (e.currentTarget.getAttribute("data-animated") !== "true") return;
                  e.currentTarget.style.boxShadow = "0 2px 14px rgba(150,90,30,0.05)";
                  e.currentTarget.style.borderColor = "rgba(184,115,46,0.12)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  className="text-[10px] font-black tracking-widest uppercase mb-2 block"
                  style={{ color: "rgba(184,115,46,0.4)" }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-base font-bold mb-2" style={{ color: "#1c1007" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5e44" }}>
                  {feature.paragraph}
                </p>
                <div
                  className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(180deg, transparent, #b8732e, transparent)" }}
                />
              </div>
            ))}
          </div>

          {/* CENTER IMAGES */}
          <div
            className="center-image relative flex flex-col gap-3"
            style={{
              opacity: 0,
              transform: "scale(0.88)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                height: "310px",
                boxShadow: "0 20px 60px rgba(150,90,30,0.22)",
                border: "3px solid rgba(255,255,255,0.95)",
              }}
            >
              <Image
                src="/images/02.jpg"
                alt="Fashion design studio"
                fill
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 45%, rgba(28,16,7,0.45) 100%)" }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-semibold tracking-wide">
                  Professional Studio Training
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  height: "120px",
                  boxShadow: "0 8px 28px rgba(150,90,30,0.14)",
                  border: "3px solid rgba(255,255,255,0.95)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                  alt="Fashion sketching"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  height: "120px",
                  boxShadow: "0 8px 28px rgba(150,90,30,0.14)",
                  border: "3px solid rgba(255,255,255,0.95)",
                }}
              >
                <Image
                  src="/images/01.webp"
                  alt="Fashion model"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center mt-1">
              <span
                className="inline-block px-5 py-2 rounded-full text-xs font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(120deg, #b8732e, #e8a55a)" }}
              >
                500+ Graduates Placed
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            {rightFeatures.map((feature, i) => (
              <div
                key={feature.id}
                className="card-right group relative rounded-2xl p-6"
                style={{
                  opacity: 0,
                  transform: "translateX(50px)",
                  transition: "opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s, border-color 0.3s",
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(184,115,46,0.12)",
                  boxShadow: "0 2px 14px rgba(150,90,30,0.05)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  if (e.currentTarget.getAttribute("data-animated") !== "true") return;
                  e.currentTarget.style.boxShadow = "0 10px 36px rgba(150,90,30,0.16)";
                  e.currentTarget.style.borderColor = "rgba(184,115,46,0.4)";
                  e.currentTarget.style.transform = "translateX(-4px)";
                }}
                onMouseLeave={(e) => {
                  if (e.currentTarget.getAttribute("data-animated") !== "true") return;
                  e.currentTarget.style.boxShadow = "0 2px 14px rgba(150,90,30,0.05)";
                  e.currentTarget.style.borderColor = "rgba(184,115,46,0.12)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  className="text-[10px] font-black tracking-widest uppercase mb-2 block"
                  style={{ color: "rgba(184,115,46,0.4)" }}
                >
                  0{i + 4}
                </span>
                <h3 className="text-base font-bold mb-2" style={{ color: "#1c1007" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5e44" }}>
                  {feature.paragraph}
                </p>
                <div
                  className="absolute right-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(180deg, transparent, #b8732e, transparent)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE / TABLET: stacked ── */}
        <div ref={mobileSectionRef} className="lg:hidden overflow-hidden">
          <div
            className="mobile-image mb-10 max-w-sm mx-auto flex flex-col gap-3"
            style={{
              opacity: 0,
              transform: "scale(0.92)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: "230px",
                boxShadow: "0 16px 50px rgba(150,90,30,0.18)",
                border: "3px solid rgba(255,255,255,0.95)",
              }}
            >
              <Image
                src="/images/02.jpg"
                alt="Fashion design studio"
                fill
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 45%, rgba(28,16,7,0.45) 100%)" }}
              />
              <div className="absolute bottom-3 left-4">
                <p className="text-white text-xs font-semibold tracking-wide">
                  Professional Studio Training
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ height: "105px", boxShadow: "0 6px 22px rgba(150,90,30,0.12)", border: "3px solid rgba(255,255,255,0.95)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                  alt="Sketching"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden"
                style={{ height: "105px", boxShadow: "0 6px 22px rgba(150,90,30,0.12)", border: "3px solid rgba(255,255,255,0.95)" }}
              >
                <Image
                  src="/images/01.webp"
                  alt="Fashion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <span
                className="inline-block px-5 py-2 rounded-full text-xs font-bold text-white shadow-md"
                style={{ background: "linear-gradient(120deg, #b8732e, #e8a55a)" }}
              >
                500+ Graduates Placed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuresData.map((feature, i) => (
              <div
                key={feature.id}
                className="mobile-card rounded-2xl p-5"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                  background: "rgba(255,255,255,0.97)",
                  border: "1px solid rgba(184,115,46,0.12)",
                  boxShadow: "0 2px 12px rgba(150,90,30,0.05)",
                }}
              >
                <span
                  className="text-[10px] font-black tracking-widest uppercase mb-1.5 block"
                  style={{ color: "rgba(184,115,46,0.45)" }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: "#1c1007" }}>
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#7a5e44" }}>
                  {feature.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;