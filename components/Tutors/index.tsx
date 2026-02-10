"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import tutorsData from "./tutorsData";
import SingleTutor from "./SingleTutor";

const Tutors = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Trigger cards to appear one by one with staggered timing
    tutorsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150); // 150ms delay between each card
    });
  }, []);

  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="container">
        <SectionTitle
          title="Meet Our Expert Tutors"
          paragraph="Learn from experienced professionals who are passionate about fashion design and dedicated to your success"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {tutorsData.map((tutor, index) => (
            <div
              key={tutor.id}
              className={`transition-all duration-500 ease-out ${
                visibleCards.includes(index)
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-10 scale-95 opacity-0"
              }`}
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