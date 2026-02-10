"use client";

import Link from "next/link";
import Image from "next/image";
import coursesData from "./coursesData";
import { useEffect, useState } from "react";

const Courses = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Trigger cards to appear one by one with staggered timing
    coursesData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150); // 150ms delay between each card
    });
  }, []);

  return (
    <section
      id="courses"
      className="bg-gray-light dark:bg-bg-color-dark py-6 md:py-8 lg:py-10"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
          {coursesData.map((course, index) => (
            <div
              key={course.id}
              className={`rounded-lg border border-body-color/[.15] bg-white p-6 dark:border-white/[.15] dark:bg-dark shadow-lg hover:shadow-xl transition-all duration-500 ease-out ${
                visibleCards.includes(index)
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-10 scale-95 opacity-0"
              }`}
            >
              <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-2 flex gap-2">
                <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  {course.level}
                </span>
                <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  {course.duration}
                </span>
              </div>

              <h3 className="mb-2 text-sm font-bold text-black dark:text-white line-clamp-2">
                {course.title}
              </h3>

              <Link
                href={`/courses/${course.id}`}
                className="inline-block w-full rounded-sm bg-primary px-4 py-2 text-center text-xs font-semibold text-white duration-300 hover:bg-primary/90"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
