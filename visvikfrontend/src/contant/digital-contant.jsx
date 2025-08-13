export default function Digital_contant() {
  const marketingData = [
    {
      title: "Digital Marketing Services",
      intro: "Elevate Your Brand in the Digital Landscape",
      description:
        "At Visvik Business Solution LLP, we understand that in today's hyperconnected world, a strong digital presence is not just an advantage—it's essential. Our comprehensive digital marketing services combine data-driven strategies, creative excellence, and cutting-edge technology to help your business thrive in the competitive digital marketplace.",
    },
    {
      title: "Our Digital Marketing Expertise",
      sections: [
        {
          title: "Comprehensive Digital Marketing Solutions",
          description:
            "We offer end-to-end digital marketing services designed to maximize your online presence and ROI:",
          items: [
            "Search Engine Optimization (SEO) - Enhancing your organic visibility and rankings",
            "Pay-Per-Click Advertising (PPC) - Driving immediate, targeted traffic",
            "Social Media Marketing - Building brand engagement across platforms",
            "Content Marketing - Creating valuable content that resonates",
            "Email Marketing - Nurturing leads and fostering loyalty",
            "Conversion Rate Optimization (CRO) - Turning visitors into customers",
            "Analytics & Reporting - Providing actionable insights",
            "Marketing Automation - Streamlining marketing processes",
            "E-commerce Marketing - Boosting online sales",
            "Influencer Marketing - Amplifying your message",
          ],
        },
      ],
    },
    {
      title: "The Visvik Digital Marketing Advantage",
      sections: [
        {
          title: "Strategic & Data-Driven Approach",
          description:
            "Our digital marketing strategies are built on thorough research and analysis:",
          items: [
            "Comprehensive Market Research - Understanding your industry and audience",
            "Data-Backed Decision Making - Utilizing analytics to inform strategy",
            "Goal-Oriented Planning - Aligning marketing with business goals",
            "Customer Journey Mapping - Identifying key touchpoints",
            "Continuous Optimization - Refining based on performance data",
          ],
        },
        {
          title: "Tailored to Your Business",
          description: "We create customized digital marketing strategies:",
          items: [
            "Industry-Specific Approach - Tailored to your sector's challenges",
            "Business Size Consideration - Solutions scaled appropriately",
            "Budget-Conscious Planning - Maximizing ROI",
            "Growth Stage Alignment - Matching your business phase",
            "Brand Voice Integration - Maintaining authentic identity",
          ],
        },
      ],
    },
    {
      title: "Our Digital Marketing Services in Detail",
      services: [
        {
          title: "Search Engine Optimization (SEO)",
          description:
            "Our comprehensive SEO services help achieve sustainable organic growth:",
          subsections: [
            {
              title: "Technical SEO",
              items: [
                "Website architecture optimization",
                "Site speed enhancement",
                "Mobile responsiveness",
                "Schema markup implementation",
              ],
            },
            {
              title: "On-Page SEO",
              items: [
                "Keyword research and strategy",
                "Content optimization",
                "Meta tag optimization",
                "Internal linking structure",
              ],
            },
            {
              title: "Off-Page SEO",
              items: [
                "Quality backlink acquisition",
                "Digital PR strategies",
                "Local SEO optimization",
                "Reputation management",
              ],
            },
          ],
        },
        {
          title: "Pay-Per-Click (PPC) Advertising",
          description: "Our PPC experts create high-performing campaigns:",
          items: [
            "Google Ads Management - Search, Display, Shopping, and Video",
            "Microsoft Advertising - Expanding reach on Bing and Yahoo",
            "Remarketing Campaigns - Re-engaging visitors",
            "Landing Page Optimization - Maximizing conversions",
          ],
        },
        {
          title: "Social Media Marketing",
          description: "Engaging strategies that build communities:",
          items: [
            "Platform Strategy - Identifying relevant platforms",
            "Content Creation - Posts, graphics, and videos",
            "Community Management - Building relationships",
            "Paid Social Campaigns - Targeted advertising",
          ],
        },
        {
          title: "Content Marketing",
          description: "Creating valuable content that attracts and retains:",
          items: [
            "Content Strategy Development - Aligning with goals",
            "Blog Management - SEO-optimized articles",
            "Long-Form Content - Guides and whitepapers",
            "Visual Content - Infographics and videos",
          ],
        },
      ],
    },
    {
      title: "Our Digital Marketing Process",
      steps: [
        {
          title: "Discovery & Research",
          items: [
            "Business goals identification",
            "Target audience analysis",
            "Competitor research",
            "Current digital audit",
          ],
        },
        {
          title: "Strategy Development",
          items: [
            "Channel selection",
            "Budget allocation",
            "Campaign planning",
            "KPI establishment",
          ],
        },
        {
          title: "Implementation & Execution",
          items: [
            "Campaign setup",
            "Content creation",
            "Ad development",
            "Tracking setup",
          ],
        },
        {
          title: "Monitoring & Optimization",
          items: [
            "Performance tracking",
            "Budget adjustments",
            "Content analysis",
            "Conversion analysis",
          ],
        },
      ],
    },
    {
      title: "Industry-Specific Digital Marketing Expertise",
      items: [
        "Technology & SaaS - Generating quality leads",
        "E-commerce & Retail - Driving traffic and conversions",
        "Healthcare & Wellness - Navigating compliance",
        "Finance & Insurance - Creating trust",
        "Education & E-Learning - Attracting students",
        "Real Estate - Showcasing properties",
        "Professional Services - Thought leadership",
        "Manufacturing - B2B lead generation",
      ],
    },
    {
      title: "Why Choose Visvik for Digital Marketing?",
      items: [
        "Integrated Tech & Marketing Expertise",
        "Data-Driven Strategy",
        "Transparent Reporting",
        "Cross-Functional Team",
        "ROI-Focused Approach",
        "Agile Methodology",
        "Continuous Innovation",
        "Ethical Practices",
        "Industry Knowledge",
        "Scalable Solutions",
      ],
    },
  ];

  return (
    <>
      <div className="overflow-hidden w-auto md:h-[70vh] h-[30vh]">
        <img
          src="/terms&privacy-banner.png"
          alt="digital marketing"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8 pb-4 border-b-2 border-blue-200">
          {marketingData[0].title}
        </h1>

        <div className="space-y-10">
          {/* Introduction */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
              {marketingData[0].intro}
            </h2>
            <p className="text-gray-700 leading-relaxed text-center">
              {marketingData[0].description}
            </p>
          </section>

          {/* Dynamic Sections */}
          {marketingData.slice(1).map((section, index) => (
            <>
              {section.sections &&
                section.sections.map((subSection, subIndex) => (
                  <section
                    key={subIndex}
                    className={`p-6 rounded-lg ${
                      subIndex % 2 === 0 ? "bg-white shadow-sm" : "bg-blue-50"
                    }`}
                  >
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                      {section.title}
                    </h2>
                    <h3 className="text-xl font-semibold text-blue-500 mb-3">
                      {subSection.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {subSection.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
                      {subSection.items.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

              {section.services && (
                <section className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-8">
                    {section.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-blue-50 p-4 rounded"
                      >
                        <h3 className="text-xl font-semibold text-blue-500 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 mb-3">
                          {service.description}
                        </p>

                        {service.subsections ? (
                          <div className="grid md:grid-cols-2 gap-6 mt-4">
                            {service.subsections.map((subsection, ssIndex) => (
                              <div key={ssIndex}>
                                <h4 className="font-semibold text-blue-500 mb-2">
                                  {subsection.title}
                                </h4>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                  {subsection.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {service.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {section.steps && (
                <section className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    {section.title}
                  </h2>
                  <ol className="space-y-6 list-decimal list-inside text-gray-700">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="pl-2 -indent-2">
                        <span className="font-medium text-blue-600">
                          {step.title}
                        </span>
                        <ul className="mt-2 ml-6 space-y-1 list-disc text-gray-600">
                          {step.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {section.items && !section.sections && (
                <section
                  className={`p-6 rounded-lg ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-white shadow-sm"
                  }`}
                >
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    {section.title}
                  </h2>
                  <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          ))}

          {/* Call to Action */}
          <section className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Partner with Visvik Business Solution LLP to develop a digital
              marketing strategy that drives real business results.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </section>

          {/* Contact Section */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
              Contact Us
            </h2>
            <p className="text-gray-700 text-center">
              Email:{" "}
              <a
                href="mailto:contact@visvik.in"
                className="text-blue-600 hover:underline font-medium"
              >
                contact@visvik.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
