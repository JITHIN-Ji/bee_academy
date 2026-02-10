import Breadcrumb from "@/components/Common/Breadcrumb";
import Tutors from "@/components/Tutors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Acdemy",
  description: "Meet our experienced and dedicated team of fashion design tutors",
};

const TutorsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tutors"
        description="Meet our experienced and dedicated team of fashion design tutors"
      />
      <Tutors />
    </>
  );
};

export default TutorsPage;
