import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <>
      {/* Main About Section */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div 
                    className="animate-slide-in-left overflow-hidden rounded-lg shadow-lg"
                    style={{ animationDelay: '0.1s' }}
                  >
                    <Image
                      src="/images/about/about3.jpg"
                      alt="Fashion Design Studio"
                      width={400}
                      height={500}
                      className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-110 md:h-[350px] lg:h-[420px]"
                    />
                  </div>
                  <div 
                    className="animate-slide-in-left overflow-hidden rounded-lg shadow-lg"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <Image
                      src="/images/about/about4.jpg"
                      alt="Students at Work"
                      width={400}
                      height={400}
                      className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-110 md:h-[300px] lg:h-[360px]"
                    />
                  </div>
                </div>
                <div className="mt-12 space-y-6">
                  <div 
                    className="animate-slide-in-left overflow-hidden rounded-lg shadow-lg"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <Image
                      src="/images/about/about6.jpg"
                      alt="Fashion Show"
                      width={400}
                      height={400}
                      className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-110 md:h-[300px] lg:h-[360px]"
                    />
                  </div>
                  <div 
                    className="animate-slide-in-left overflow-hidden rounded-lg shadow-lg"
                    style={{ animationDelay: '0.7s' }}
                  >
                    <Image
                      src="/images/about/about5.jpg"
                      alt="Modern Facilities"
                      width={400}
                      height={500}
                      className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-110 md:h-[350px] lg:h-[420px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
                  WHO WE ARE
                </span>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                  Shaping Creative Careers — Fashion & More
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  For over two decades, our academy has been at the forefront of creative education, with a strong
                  emphasis on fashion design while supporting a broad range of equally valued creative programs.
                </p>
                <p className="mb-6 text-base text-gray-600">
                  We combine traditional craftsmanship with cutting-edge technology, offering students a comprehensive
                  education that prepares them for diverse creative industries. Our experienced faculty, facilities,
                  and industry connections create a rich learning environment.
                </p>
                <p className="text-base text-gray-600">
                  From conceptual design to production and creative entrepreneurship, we equip students with the skills,
                  knowledge, and confidence to excel across multiple creative career paths, including fashion and related
                  disciplines.
                </p>
              </div>

              {/* Core Advantages */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Faculty</h4>
                    <p className="text-sm text-gray-600">Learn from industry veterans, award-winning designers, and internationally recognized fashion professionals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">State-of-the-Art Facilities</h4>
                    <p className="text-sm text-gray-600">Access professional design studios, digital pattern-making labs, textile libraries, and industrial-grade equipment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Partnerships</h4>
                    <p className="text-sm text-gray-600">Network with top fashion brands, attend exclusive industry events, and gain real-world experience through internships</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Exposure</h4>
                    <p className="text-sm text-gray-600">Participate in international fashion weeks, study tours, and exchange programs with partner institutions worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Portfolio Development</h4>
                    <p className="text-sm text-gray-600">Build a professional portfolio with guidance from experts, showcased at our annual graduate fashion show</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
              OUR ACHIEVEMENTS
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Recognition & Excellence
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Our commitment to excellence has earned us recognition from industry leaders and educational institutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Achievement Card 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">International Accreditation</h3>
              <p className="text-gray-600">
                Accredited by leading fashion education bodies and recognized globally for academic excellence
              </p>
            </div>

            {/* Achievement Card 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Award-Winning Programs</h3>
              <p className="text-gray-600">
                Multiple awards for innovative curriculum design and outstanding contribution to fashion education
              </p>
            </div>

            {/* Achievement Card 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Industry Recognition</h3>
              <p className="text-gray-600">
                Alumni have won prestigious fashion competitions and established successful brands worldwide
              </p>
            </div>

            {/* Achievement Card 4 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Strong Alumni Network</h3>
              <p className="text-gray-600">
                Graduates working with renowned fashion houses including Dior, Gucci, Chanel, and more
              </p>
            </div>

            {/* Achievement Card 5 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Global Partnerships</h3>
              <p className="text-gray-600">
                Collaborations with top fashion schools in Paris, Milan, London, and New York
              </p>
            </div>

            {/* Achievement Card 6 */}
            <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Sustainability Leadership</h3>
              <p className="text-gray-600">
                Pioneering sustainable fashion practices and certified as a green campus institution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Advantages Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
              WHY CHOOSE US
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Additional Advantages
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Beyond education, we provide comprehensive support to ensure your success in the fashion industry
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Advantage 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Innovation Lab</h3>
                <p className="text-gray-600">
                  Dedicated space for experimenting with smart textiles, 3D printing, and emerging fashion technologies to stay ahead of industry trends
                </p>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Entrepreneurship Support</h3>
                <p className="text-gray-600">
                  Business incubator program helping students launch their own fashion brands with mentorship, funding guidance, and business planning resources
                </p>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Digital Design Tools</h3>
                <p className="text-gray-600">
                  Access to industry-standard software including CLO 3D, Adobe Creative Suite, Gerber Technology, and Lectra for digital fashion design
                </p>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Internship Placement</h3>
                <p className="text-gray-600">
                  Guaranteed internship opportunities with leading fashion houses, boutiques, and textile manufacturers both locally and internationally
                </p>
              </div>
            </div>

            {/* Advantage 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Mentorship Program</h3>
                <p className="text-gray-600">
                  One-on-one mentoring from successful alumni and industry professionals who guide you throughout your educational journey and beyond
                </p>
              </div>
            </div>

            {/* Advantage 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Resource Library</h3>
                <p className="text-gray-600">
                  Extensive collection of fashion archives, trend forecasting databases, fabric samples, and digital resources available 24/7
                </p>
              </div>
            </div>

            {/* Advantage 7 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Fashion Show Platform</h3>
                <p className="text-gray-600">
                  Annual graduate fashion show attended by industry buyers, media, and recruiters, providing unparalleled exposure for emerging talent
                </p>
              </div>
            </div>

            {/* Advantage 8 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Career Services</h3>
                <p className="text-gray-600">
                  Lifetime career support including resume building, interview preparation, job placement assistance, and continuous professional development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;