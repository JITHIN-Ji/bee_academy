"use client";

import React, { useEffect, useRef, useState } from "react";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Fashion Designer at ASOS",
    content:
      "This academy completely transformed my career! The hands-on training and industry connections helped me land my dream job at ASOS. The faculty is incredibly supportive and knowledgeable.",
    image: "",
    star: 5,
  },
  {
    id: 2,
    name: "Rahul Singh",
    designation: "Independent Designer & Entrepreneur",
    content:
      "Started my own fashion label after graduation! The business support and portfolio development sessions were invaluable. Best investment I made in my career.",
    image: "",
    star: 5,
  },
  {
    id: 3,
    name: "Ananya Gupta",
    designation: "Fashion Design Executive at Flipkart",
    content:
      "The curriculum is modern and relevant. I learned Adobe Suite, CLO 3D, and pattern making with expert guidance. Now leading design teams at a major e-commerce platform.",
    image: "",
    star: 5,
  },
  {
    id: 4,
    name: "Vikram Patel",
    designation: "Pattern Making Specialist at Raymond",
    content:
      "The studio facilities are world-class. Raw material access and professional equipment made learning practical and industry-relevant. Highly recommend this academy!",
    image: "",
    star: 5,
  },
  {
    id: 5,
    name: "Sneha Roy",
    designation: "Fashion Illustrator at Vogue India",
    content:
      "The mentorship program connected me with industry professionals. Their guidance helped me develop my unique design aesthetic and land an internship that became a permanent role.",
    image: "",
    star: 5,
  },
  {
    id: 6,
    name: "Arjun Kapoor",
    designation: "Senior Designer at Lifestyle",
    content:
      "Best decision ever! The placement team is exceptional - they literally helped us apply to companies and prepare for interviews. Got placed within 2 months of graduation.",
    image: "",
    star: 5,
  },
  {
    id: 7,
    name: "Meera Nair",
    designation: "Textile Designer at FabIndia",
    content:
      "The practical exposure to different fabrics and textile techniques was amazing. The industry visits and guest lectures from leading designers gave me real-world insights.",
    image: "",
    star: 5,
  },
  {
    id: 8,
    name: "Karan Malhotra",
    designation: "Fashion Stylist & Consultant",
    content:
      "From sketching to draping, every aspect was covered thoroughly. The portfolio I built here opened doors to top fashion houses. Forever grateful to the faculty!",
    image: "",
    star: 5,
  },
  {
    id: 9,
    name: "Aisha Khan",
    designation: "Design Manager at H&M",
    content:
      "The international curriculum and exposure to global fashion trends prepared me for working with international brands. The CAD training was particularly beneficial.",
    image: "",
    star: 5,
  },
  {
    id: 10,
    name: "Rohan Desai",
    designation: "Costume Designer - Film Industry",
    content:
      "The creative freedom and support I received here was unparalleled. Now working on major Bollywood productions. The costume design modules were incredibly detailed.",
    image: "",
    star: 5,
  },
  {
    id: 11,
    name: "Divya Menon",
    designation: "Accessories Designer at Hidesign",
    content:
      "The specialized modules in accessories and leather goods gave me a unique edge. The faculty helped me discover my niche in fashion accessories design.",
    image: "",
    star: 5,
  },
  {
    id: 12,
    name: "Siddharth Reddy",
    designation: "Fashion Blogger & Influencer",
    content:
      "Beyond design skills, I learned about fashion marketing, branding, and social media. This holistic approach helped me build a successful career as a fashion influencer.",
    image: "",
    star: 5,
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const displayedTestimonials = showAll
    ? testimonialData
    : testimonialData.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger cards to appear one by one
            displayedTestimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200); // 200ms delay between each card
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [displayedTestimonials]);

  // Reset visible cards when showing all
  useEffect(() => {
    if (showAll) {
      setVisibleCards([]);
      displayedTestimonials.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 200);
      });
    }
  }, [showAll]);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="What Our Students Say"
          paragraph="Hear from our successful graduates who have launched amazing careers in fashion design. Real stories from students who transformed their passion into professional success."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-[1000ms] ease-out ${
                visibleCards.includes(index)
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[100px] opacity-0"
              }`}
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;