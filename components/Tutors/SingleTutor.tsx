import Image from "next/image";
import { Tutor } from "@/types/tutor";

const SingleTutor = ({ tutor }: { tutor: Tutor }) => {
  const { name, title, image, experience, bio } = tutor;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl"
      style={{
        background: "#fff",
        border: "1px solid rgba(184,115,46,0.12)",
        boxShadow: "0 2px 16px rgba(150,90,30,0.07)",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 20px 52px rgba(150,90,30,0.18)";
        el.style.borderColor = "rgba(184,115,46,0.35)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 2px 16px rgba(150,90,30,0.07)";
        el.style.borderColor = "rgba(184,115,46,0.12)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* ── Image area ── */}
      <div
        className="relative overflow-hidden"
        style={{ height: 260 }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />

        {/* Gradient scrim at bottom of image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(28,16,7,0.55) 0%, transparent 55%)",
          }}
        />

        {/* Title badge overlaid on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #b8732e, #e8a55a)",
              color: "#fff",
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: 100,
              fontFamily: "Georgia, serif",
            }}
          >
            {title}
          </span>
        </div>
      </div>

      {/* ── Content area ── */}
      <div style={{ padding: "20px 22px 24px" }}>

        {/* Name */}
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#1c1007",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            marginBottom: 10,
          }}
        >
          {name}
        </h3>

        {/* Thin amber divider */}
        <div
          style={{
            height: 1.5,
            width: 36,
            background: "linear-gradient(90deg, #b8732e, rgba(184,115,46,0.2))",
            borderRadius: 99,
            marginBottom: 12,
            transition: "width 0.4s ease",
          }}
          className="tutor-divider"
        />

        {/* Experience */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
            marginBottom: bio ? 10 : 0,
          }}
        >
          <span
            style={{
              flexShrink: 0,
              marginTop: 1,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "rgba(184,115,46,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width={8} height={8} viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="#b8732e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 12,
              color: "#7a5e44",
              lineHeight: 1.6,
            }}
          >
            {experience}
          </p>
        </div>

        {/* Bio */}
        {bio && (
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 12,
              color: "#9a7a5a",
              lineHeight: 1.65,
              fontStyle: "italic",
              borderLeft: "2px solid rgba(184,115,46,0.2)",
              paddingLeft: 10,
              marginTop: 2,
            }}
          >
            {bio}
          </p>
        )}
      </div>

      {/* Hover: amber bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #b8732e, #e8a55a)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
        className="tutor-bar"
      />

      <style>{`
        .group:hover .tutor-bar { transform: scaleX(1) !important; }
        .group:hover .tutor-divider { width: 56px !important; }
      `}</style>
    </div>
  );
};

export default SingleTutor;