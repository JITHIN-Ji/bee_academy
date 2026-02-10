"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    const node = sectionRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28" ref={sectionRef}>
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left side - Text (No animation) */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Build Your Career — Fashion Design & Creative Programs"
                paragraph="Bee Academy primarily focuses on fashion design, while offering a wide range of equally valued creative courses. Our programs combine theoretical knowledge with hands-on studio experience, taught by industry professionals to help you build a strong portfolio and career in your chosen field."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Professional Certification" />
                    <List text="Industry Expert Instructors" />
                    <List text="State-of-the-Art Studios" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Hands-on Training" />
                    <List text="Portfolio Development" />
                    <List text="100% Job Placement" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Images with animation */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative h-[600px] w-full">
                {/* Main large image - Top left - Slides in first */}
                <div
                  className={`absolute left-0 top-0 h-[350px] w-[65%] overflow-hidden rounded-lg shadow-2xl transition-all duration-700 ease-out ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[100px] opacity-0"
                  }`}
                >
                  <Image
                    src="/images/about/about.jpg"
                    alt="Fashion Design Studio with fabric rolls"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Top right - Students working - Slides in second */}
                <div
                  className={`absolute right-0 top-0 h-[200px] w-[40%] overflow-hidden rounded-lg shadow-xl transition-all duration-700 delay-150 ease-out ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[100px] opacity-0"
                  }`}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
                    alt="Fashion design students working"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Middle right - Sketching/Design process - Slides in third */}
                <div
                  className={`absolute bottom-[180px] right-0 h-[200px] w-[40%] overflow-hidden rounded-lg shadow-xl transition-all duration-700 delay-300 ease-out ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[100px] opacity-0"
                  }`}
                >
                  <Image
                    src="/images/about/about2.jpg"
                    alt="Fashion sketching and design"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Bottom left - Portfolio/Runway - Slides in fourth */}
                <div
                  className={`absolute bottom-0 left-0 h-[220px] w-[65%] overflow-hidden rounded-lg shadow-2xl transition-all duration-700 delay-[450ms] ease-out ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[100px] opacity-0"
                  }`}
                >
                  <Image
                    src="/images/about/about1.jpg"
                    alt="Fashion portfolio and runway"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;