import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import AcademyHighlights from "@/components/AcademyHighlights";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Acdemy",
  description: "Bee Academy specializes in fashion design while offering a broad range of equally valued creative courses. Learn from industry experts, gain hands-on experience, and pursue the creative path you choose.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      <AcademyHighlights />
      <Blog />
      <Contact />
    </>
  );
}
