"use client";

import Link from "next/link";
import Image from "next/image";
import coursesData from "./coursesData";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);
  return { ref, visible };
}

const BG = "#eef0e8";

/* ─────────────────────────────────────────────────────────────────────── */
const Courses = () => (
  <section id="courses" style={{ background: BG }}>

    {/* Single global style block */}
    <style>{`
      .cr-row {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-height: clamp(300px, 36vw, 480px);
      }
      .cr-row.reverse {
        flex-direction: row-reverse;
      }
      .cr-img {
        flex: 0 0 55%;
        position: relative;
        overflow: hidden;
      }
      .cr-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 48px clamp(28px, 5vw, 68px);
        background: ${BG};
      }
      .cr-divider {
        height: 1px;
        background: rgba(42,38,28,0.12);
      }

      /* ── Mobile ── */
      @media (max-width: 767px) {
        .cr-row,
        .cr-row.reverse {
          flex-direction: column !important;
          min-height: unset;
        }
        .cr-img {
          flex: none;
          width: 100%;
          height: 240px;
        }
        .cr-text {
          padding: 28px 20px 40px;
        }
        .cr-title {
          font-size: 22px !important;
        }
        .cr-desc {
          font-size: 14px !important;
        }
      }
    `}</style>

    {coursesData.map((course, i) => (
      <CourseRow key={course.id} course={course} index={i} last={i === coursesData.length - 1} />
    ))}
  </section>
);

/* ── Course Row ─────────────────────────────────────────────────────── */
const CourseRow = ({
  course,
  index,
  last,
}: {
  course: (typeof coursesData)[0];
  index: number;
  last: boolean;
}) => {
  const { ref, visible } = useInView(0.08);
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <>
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`cr-row${isEven ? "" : " reverse"}`}>

          {/* ── Image (flush, no gap) ── */}
          <div className="cr-img">
            <Image
              src={course.image}
              alt={course.title}
              fill
              style={{
                objectFit: "cover",
                transform: hovered ? "scale(1.045)" : "scale(1)",
                transition: "transform 1s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </div>

          {/* ── Text panel ── */}
          <div className="cr-text">

            {/* Index number */}
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.24em",
              color: "rgba(42,38,28,0.32)",
              textTransform: "uppercase",
              marginBottom: 18,
              display: "block",
            }}>
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <h3
              className="cr-title"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(20px, 2.2vw, 32px)",
                fontWeight: 700,
                color: "#1e1a10",
                lineHeight: 1.22,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              {course.title}
            </h3>

            {/* Description */}
            <p
              className="cr-desc"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(13px, 1vw, 14.5px)",
                color: "#4a4432",
                lineHeight: 1.78,
                marginBottom: 24,
                maxWidth: 400,
              }}
            >
              {course.description ??
                "Deepen your craft through expert-led sessions, hands-on practice, and a curriculum built around real-world techniques."}
            </p>

            {/* Pills */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              <Pill text={course.level} amber />
              <Pill text={course.duration} />
            </div>

            {/* CTA */}
            <Link
              href={`/courses/${course.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "Georgia, serif",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1e1a10",
                borderBottom: "1.5px solid rgba(42,38,28,0.28)",
                paddingBottom: 3,
                width: "fit-content",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#C8844A";
                el.style.borderColor = "#C8844A";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#1e1a10";
                el.style.borderColor = "rgba(42,38,28,0.28)";
              }}
            >
              View Course
              <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider between rows */}
      {!last && <div className="cr-divider" />}
    </>
  );
};

/* ── Pill ── */
const Pill = ({ text, amber }: { text: string; amber?: boolean }) => (
  <span style={{
    fontFamily: "Georgia, serif",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    padding: "5px 13px",
    borderRadius: 100,
    background: amber ? "rgba(200,132,74,0.15)" : "rgba(42,38,28,0.08)",
    color: amber ? "#9a5e20" : "#4a4432",
  }}>
    {text}
  </span>
);

export default Courses;