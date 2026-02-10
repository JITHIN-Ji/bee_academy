import SectionTitle from "../Common/SectionTitle";

interface HighlightItem {
  number: string;
  title: string;
  description: string;
}

const AcademyHighlights = () => {
  const highlights: HighlightItem[] = [
    {
      number: "",
      title: "Successful Graduates",
      description: "Over 500 talented designers have graduated from our academy and are now working with top fashion brands globally",
    },
    {
      number: "",
      title: "Expert Faculty",
      description: "Learn from award-winning fashion designers with 10+ years of industry experience from renowned fashion houses",
    },
    {
      number: "",
      title: "Job Placement Rate",
      description: "Our career support ensures 100% job placement within 3 months of graduation with leading fashion companies",
    },
    {
      number: "",
      title: "Years of Excellence",
      description: "Established in 2009, we have been shaping the future of fashion design education for over a decade and a half",
    },
    {
      number: "",
      title: "International Partnerships",
      description: "We have collaborations with fashion schools and brands in USA, UK, France, Italy, and more",
    },
    {
      number: "",
      title: "Hours of Training",
      description: "Comprehensive curriculum with over 10,000 hours of hands-on practical training and studio experience",
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Why Choose Bee Academy?"
          paragraph="We are committed to providing world-class fashion design education that combines traditional techniques with modern digital tools, ensuring our students are industry-ready."
          center
          mb="80px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="wow fadeInUp rounded-lg border border-body-color/[.15] bg-white p-8 dark:border-white/[.15] dark:bg-dark"
              data-wow-delay={`.${(index + 1) * 2}s`}
            >
              <div className="mb-4">
                <h3 className="text-4xl font-bold text-primary">{item.number}</h3>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                {item.title}
              </h4>
              <p className="text-body-color dark:text-body-color-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg bg-gradient-to-r from-primary/10 to-pink-200/10 p-8 text-center dark:bg-gradient-to-r dark:from-primary/5 dark:to-pink-200/5">
          <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
            Ready to Start Your Fashion Design Journey?
          </h3>
          <p className="mb-6 text-body-color dark:text-body-color-dark">
            Join hundreds of successful designers who have transformed their passion into a thriving career
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-sm bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
            >
              Apply Now
            </a>
            <a
              href="/about"
              className="rounded-sm border-2 border-primary px-8 py-3 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/5"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHighlights;
