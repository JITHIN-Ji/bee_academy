import Breadcrumb from "@/components/Common/Breadcrumb";
import Tutors from "@/components/Tutors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Academy",
  description: "Meet our experienced and dedicated team of fashion design tutors",
};

const TutorsPage = () => {
  return (
    <>
      <div className="mb-6 md:mb-0"></div>
      <Breadcrumb
        pageName="Meet Our Expert Tutors"
        description="Learn from experienced professionals who are passionate about fashion design and dedicated to your success"
      />
      <Tutors />
    </>
  );
};

export default TutorsPage;