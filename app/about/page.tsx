import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Acdemy",
  description: "Learn about Bee Acdemy, our experienced faculty, facilities, and commitment to shaping future fashion professionals.",
  keywords: "Bee Acdemy, fashion school, design education, fashion training",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover our story, mission, world-class faculty, state-of-the-art facilities, and our commitment to nurturing the next generation of fashion designers."
      />
      
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;