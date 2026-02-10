"use client";

import SectionTitle from "../Common/SectionTitle";
import eventsData from "./eventsData";
import SingleEvent from "./SingleEvent";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Events = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleGallery, setVisibleGallery] = useState<number[]>([]);
  const [galleryInView, setGalleryInView] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Event cards animation on page load
  useEffect(() => {
    eventsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150);
    });
  }, []);

  useEffect(() => {
    // Trigger gallery images to appear one by one with staggered timing
    if (galleryInView) {
      [0, 1, 2, 3, 4, 5].forEach((index) => {
        setTimeout(() => {
          setVisibleGallery((prev) => [...prev, index]);
        }, index * 100);
      });
    }
  }, [galleryInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  return (
    <>
      <section className="py-8 md:py-10 lg:py-12">
      <div className="container">
        <SectionTitle
          title="Celebrations & Programs"
          paragraph="Memorable events, showcases, workshops and community programs we host throughout the year. Browse photos and highlights from our academy."
          center
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((ev, index) => (
            <div
              key={ev.id}
              className={`transition-all duration-500 ease-out ${
                visibleCards.includes(index)
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-10 scale-95 opacity-0"
              }`}
            >
              <SingleEvent event={ev} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28" ref={galleryRef}>
      <div className="container">
        <SectionTitle
          title="Academy Gallery"
          paragraph="Capturing moments of creativity, learning, and celebration - explore our students and academy through the lens"
          center
          mb="80px"
        />

        {/* Masonry Gallery */}
        <div className="gallery-masonry grid gap-4 auto-rows-max grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Large Image - Top Left - Slides from left */}
          <div className={`group relative col-span-1 sm:col-span-1 lg:col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-1000 ease-out ${
            galleryInView && visibleGallery.includes(0)
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Academy Workshop"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          {/* Medium Images - Top Right - Slides from right */}
          <div className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-1000 ease-out ${
            galleryInView && visibleGallery.includes(1)
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop"
              alt="Student Work"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          <div className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-1000 ease-out ${
            galleryInView && visibleGallery.includes(2)
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=400&h=400&fit=crop"
              alt="Design Studio"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          {/* Bottom Row Images */}
          <div className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-1000 ease-out ${
            galleryInView && visibleGallery.includes(3)
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=400&fit=crop"
              alt="Fashion Exhibition"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          <div className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-1000 ease-out ${
            galleryInView && visibleGallery.includes(4)
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
              alt="Workshop Session"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          <div className={`group relative col-span-1 sm:col-span-1 lg:col-span-2 overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-1000 ease-out ${
            galleryInView && visibleGallery.includes(5)
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Students Collaboration"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Events;
