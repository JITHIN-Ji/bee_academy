"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import coursesData from "@/components/Courses/coursesData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const CourseDetailPage = () => {
  const params = useParams();
  const courseId = parseInt(params.slug as string);
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Course Not Found</h1>
          <Link href="/courses" className="text-primary hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb pageName={course.title} description={course.description} />

      <section className="pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-28 lg:pt-20">
        <div className="container">
          {/* Course Header Section */}
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Left: Course Image */}
            <div className="lg:col-span-3">
              <div className="relative h-[450px] w-full overflow-hidden rounded-sm shadow-two dark:shadow-three">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {/* Course Level Badge */}
                <div className="absolute left-6 top-6">
                  <span className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white">
                    {course.level} Level
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick Info Card */}
            <div className="lg:col-span-2">
              <div className="sticky top-20 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h3 className="mb-6 border-b border-stroke pb-4 text-xl font-bold text-black dark:border-strokedark dark:text-white">
                  Course Information
                </h3>

                <div className="mb-8 space-y-4">
                  <div className="border-b border-stroke pb-4 dark:border-strokedark">
                    <p className="mb-1 text-sm font-medium text-body-color dark:text-body-color-dark">
                      Duration
                    </p>
                    <p className="text-lg font-semibold text-black dark:text-white">
                      {course.duration}
                    </p>
                  </div>

                  <div className="border-b border-stroke pb-4 dark:border-strokedark">
                    <p className="mb-1 text-sm font-medium text-body-color dark:text-body-color-dark">
                      Level
                    </p>
                    <p className="text-lg font-semibold text-black dark:text-white">
                      {course.level}
                    </p>
                  </div>

                  <div className="border-b border-stroke pb-4 dark:border-strokedark">
                    <p className="mb-1 text-sm font-medium text-body-color dark:text-body-color-dark">
                      Certificate
                    </p>
                    <p className="text-lg font-semibold text-black dark:text-white">
                      Yes
                    </p>
                  </div>

                  <div className="pb-2">
                    <p className="mb-1 text-sm font-medium text-body-color dark:text-body-color-dark">
                      Class Size
                    </p>
                    <p className="text-lg font-semibold text-black dark:text-white">
                      Limited Seats
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/contact" className="block">
                    <button className="w-full rounded-sm bg-primary px-6 py-3 text-base font-semibold text-white transition duration-300 hover:bg-primary/90">
                      Enroll Now
                    </button>
                  </Link>
                  <button className="w-full rounded-sm border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary transition duration-300 hover:bg-primary hover:text-white">
                    Download Brochure
                  </button>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Course Overview */}
              <div className="mb-8 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h2 className="mb-6 border-b border-stroke pb-4 text-2xl font-bold text-black dark:border-strokedark dark:text-white">
                  Course Overview
                </h2>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {course.description}
                </p>
              </div>

              {/* Course Highlights */}
              <div className="mb-8 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h2 className="mb-6 border-b border-stroke pb-4 text-2xl font-bold text-black dark:border-strokedark dark:text-white">
                  Course Highlights
                </h2>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {course.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-primary bg-gray-2 p-4 dark:bg-dark-2"
                    >
                      <span className="text-base text-black dark:text-white">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="mb-8 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h2 className="mb-6 border-b border-stroke pb-4 text-2xl font-bold text-black dark:border-strokedark dark:text-white">
                  Learning Outcomes
                </h2>
                <div className="space-y-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b border-stroke pb-4 last:border-0 last:pb-0 dark:border-strokedark"
                    >
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm bg-primary text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-8 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h2 className="mb-6 border-b border-stroke pb-4 text-2xl font-bold text-black dark:border-strokedark dark:text-white">
                  Course Curriculum
                </h2>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {course.curriculum.map((module, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border border-stroke bg-gray-2 p-4 dark:border-strokedark dark:bg-dark-2"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-primary text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-body-color dark:text-body-color-dark">
                        {module}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Testimonials */}
              {course.studentFeedback.length > 0 && (
                <div className="mb-8 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                  <h2 className="mb-6 border-b border-stroke pb-4 text-2xl font-bold text-black dark:border-strokedark dark:text-white">
                    Student Success Stories
                  </h2>
                  <div className="space-y-6">
                    {course.studentFeedback.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-stroke pb-6 last:border-0 last:pb-0 dark:border-strokedark"
                      >
                        <div className="mb-4 flex items-center gap-4">
                          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                            <Image
                              src={review.studentImage}
                              alt={review.studentName}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="mb-1 text-base font-bold text-black dark:text-white">
                              {review.studentName}
                            </h4>
                            <p className="text-sm text-body-color dark:text-body-color-dark">
                              {review.designation}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-500">
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="mb-2 text-base italic text-body-color dark:text-body-color-dark">
                          "{review.feedback}"
                        </p>
                        <p className="text-xs text-body-color dark:text-body-color-dark">
                          {review.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Achievements */}
              <div className="mb-8 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h3 className="mb-6 border-b border-stroke pb-4 text-lg font-bold text-black dark:border-strokedark dark:text-white">
                  Course Benefits
                </h3>
                <div className="space-y-6">
                  {course.achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="border-b border-stroke pb-6 text-center last:border-0 last:pb-0 dark:border-strokedark"
                    >
                      <h4 className="mb-2 font-bold text-black dark:text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Starber Academy */}
              <div className="mb-8 rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h3 className="mb-6 border-b border-stroke pb-4 text-lg font-bold text-black dark:border-strokedark dark:text-white">
                  Why Choose Starber Academy?
                </h3>
                <ul className="space-y-3">
                  <li className="border-b border-stroke pb-3 text-sm text-body-color last:border-0 last:pb-0 dark:border-strokedark dark:text-body-color-dark">
                    Expert faculty with industry experience
                  </li>
                  <li className="border-b border-stroke pb-3 text-sm text-body-color last:border-0 last:pb-0 dark:border-strokedark dark:text-body-color-dark">
                    State-of-the-art facilities and equipment
                  </li>
                  <li className="border-b border-stroke pb-3 text-sm text-body-color last:border-0 last:pb-0 dark:border-strokedark dark:text-body-color-dark">
                    100% placement assistance
                  </li>
                  <li className="border-b border-stroke pb-3 text-sm text-body-color last:border-0 last:pb-0 dark:border-strokedark dark:text-body-color-dark">
                    Hands-on practical training
                  </li>
                  <li className="border-b border-stroke pb-3 text-sm text-body-color last:border-0 last:pb-0 dark:border-strokedark dark:text-body-color-dark">
                    Flexible payment options available
                  </li>
                  <li className="text-sm text-body-color dark:text-body-color-dark">
                    Lifetime alumni support network
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="rounded-sm border border-stroke bg-white p-8 shadow-two dark:border-strokedark dark:bg-dark dark:shadow-three">
                <h3 className="mb-4 border-b border-stroke pb-4 text-lg font-bold text-black dark:border-strokedark dark:text-white">
                  Need More Information?
                </h3>
                <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
                  Our admissions team is here to help you make the right choice
                  for your career.
                </p>
                <div className="mb-6 space-y-4">
                  <div className="border-b border-stroke pb-4 dark:border-strokedark">
                    <p className="mb-1 text-xs font-medium text-body-color dark:text-body-color-dark">
                      Call us
                    </p>
                    <p className="font-semibold text-black dark:text-white">
                      +91 9544111189
                    </p>
                  </div>
                  <div className="pb-2">
                    <p className="mb-1 text-xs font-medium text-body-color dark:text-body-color-dark">
                      Email us
                    </p>
                    <p className="font-semibold text-black dark:text-white">
                      info@starber.com
                    </p>
                  </div>
                </div>
                <Link href="/contact" className="block">
                  <button className="w-full rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary/90">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailPage;