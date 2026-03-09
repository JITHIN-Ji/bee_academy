import Courses from "@/components/Courses";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bee Acdemy",
  description: "Explore Bee Acdemy's comprehensive fashion design courses for all skill levels",
};

const CoursesPage = () => {
  return (
    <>

      <div className="mb-6 md:mb-0">
        <Breadcrumb
          pageName="Our Courses"
          description="Choose from our comprehensive range of fashion design programs designed to match your skill level and career goals."
        />
      </div>

      <section className="pb-8 pt-0">
        <div className="container">
          <Courses />
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
