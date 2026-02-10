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
  description: "Master fashion design with Bee Acdemy's comprehensive courses. Learn from industry experts, gain hands-on experience, and launch your fashion career.",
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
