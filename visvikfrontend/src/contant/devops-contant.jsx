export default function CloudDevOpsServices() {
  const cloudData = [
    {
      title: "Cloud & DevOps Services",
      intro: "Accelerate Innovation with Modern Infrastructure Solutions",
      description:
        "At Visvik Business Solution LLP, we empower organizations to harness the full potential of cloud technologies and DevOps methodologies. Our expert team delivers tailored solutions that drive operational efficiency, accelerate deployment cycles, and create scalable infrastructure perfectly aligned with your business objectives.",
    },
    {
      title: "Why Cloud & DevOps Matter for Your Business",
      sections: [
        {
          title: "Business Impact",
          items: [
            "Accelerated Time-to-Market: Deploy new features and applications up to 200% faster",
            "Reduced Operational Costs: Lower infrastructure expenses by 30-50% through optimized cloud resources",
            "Enhanced Scalability: Dynamically adjust resources based on actual demand",
            "Improved Service Reliability: Achieve 99.99% uptime through resilient architectures",
            "Greater Business Agility: Respond to market changes with unprecedented speed",
          ],
        },
        {
          title: "Technical Benefits",
          items: [
            "Continuous Integration & Deployment: Automate software delivery for faster releases",
            "Infrastructure as Code: Manage infrastructure programmatically for consistency",
            "Microservices Architecture: Build modular, maintainable applications",
            "Containerization: Package applications with dependencies for consistent operation",
            "Automated Testing & Monitoring: Identify and resolve issues proactively",
          ],
        },
      ],
    },
    {
      title: "Our Cloud & DevOps Services Portfolio",
      services: [
        {
          title: "Cloud Strategy & Migration",
          items: [
            "Cloud Readiness Assessment: Evaluate current infrastructure for cloud compatibility",
            "Migration Planning & Execution: Comprehensive migration roadmaps",
            "Multi-Cloud & Hybrid Cloud Solutions: Optimal environments leveraging AWS, Azure, GCP",
            "Cloud-Native Application Development: Applications optimized for cloud",
            "Legacy System Modernization: Transform traditional applications",
          ],
        },
        {
          title: "DevOps Implementation & Optimization",
          items: [
            "DevOps Maturity Assessment: Evaluate current processes",
            "CI/CD Pipeline Implementation: Automate build, test, and deployment",
            "Release Management: Streamline software delivery",
            "Continuous Monitoring & Feedback: Real-time insights into performance",
            "DevSecOps Integration: Embed security throughout development",
          ],
        },
        {
          title: "Infrastructure Automation",
          items: [
            "Infrastructure as Code (IaC): Terraform, CloudFormation, ARM templates",
            "Configuration Management: Ansible, Chef, Puppet",
            "Server Provisioning & Management: Streamline deployment",
            "Network Automation: Program network configurations",
            "Automated Scaling: Rules-based resource allocation",
          ],
        },
        {
          title: "Container & Orchestration Solutions",
          items: [
            "Docker Implementation: Containerize applications",
            "Kubernetes Cluster Setup & Management: Orchestrate containers at scale",
            "Microservices Architecture Design: Break monoliths into services",
            "Service Mesh Implementation: Intelligent networking for microservices",
            "Container Security & Compliance: Meet security requirements",
          ],
        },
      ],
    },
    {
      title: "Our Cloud & DevOps Approach",
      steps: [
        {
          title: "Discovery & Assessment",
          items: [
            "Understand current infrastructure and applications",
            "Conduct technical assessments and stakeholder interviews",
            "Review documentation and business objectives",
          ],
        },
        {
          title: "Strategy Development",
          items: [
            "Create tailored cloud architecture and DevOps strategy",
            "Select optimal toolchain and technologies",
            "Develop implementation roadmap",
          ],
        },
        {
          title: "Implementation Planning",
          items: [
            "Detail infrastructure changes and migration sequences",
            "Plan process transformations",
            "Establish milestones and success criteria",
          ],
        },
        {
          title: "Execution & Integration",
          items: [
            "Migrate applications to cloud",
            "Establish CI/CD pipelines",
            "Automate infrastructure",
            "Integrate DevOps tools with existing systems",
          ],
        },
        {
          title: "Knowledge Transfer & Training",
          items: [
            "Provide workshops and documentation",
            "Offer shadowing opportunities",
            "Conduct hands-on training sessions",
          ],
        },
        {
          title: "Continuous Optimization",
          items: [
            "Monitor new environment",
            "Identify optimization opportunities",
            "Make iterative improvements",
          ],
        },
      ],
    },
    {
      title: "Technologies & Platforms We Work With",
      technologies: [
        {
          title: "Cloud Platforms",
          items: [
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Google Cloud Platform",
            "IBM Cloud",
            "Oracle Cloud Infrastructure",
          ],
        },
        {
          title: "Infrastructure as Code",
          items: [
            "Terraform",
            "AWS CloudFormation",
            "Azure Resource Manager",
            "Google Cloud Deployment Manager",
          ],
        },
        {
          title: "Containerization & Orchestration",
          items: [
            "Docker",
            "Kubernetes",
            "Amazon ECS/EKS",
            "Azure Kubernetes Service",
          ],
        },
      ],
    },
    {
      title: "Why Choose Visvik for Your Cloud & DevOps Needs",
      items: [
        "Deep Technical Expertise: Certified cloud architects and DevOps engineers",
        "Business-Focused Solutions: Designed to deliver tangible business outcomes",
        "Vendor-Agnostic Approach: Recommend best-fit technologies",
        "End-to-End Capabilities: From assessment to ongoing optimization",
        "Security-First Mindset: Meet highest security standards",
      ],
    },
  ];

  return (
    <>
      <div className="overflow-hidden w-auto md:h-[70vh] h-[30vh]">
        <img
          src="/terms&privacy-banner.png"
          alt="cloud and devops"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8 pb-4 border-b-2 border-blue-200">
          {cloudData[0].title}
        </h1>

        <div className="space-y-10">
          {/* Introduction */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
              {cloudData[0].intro}
            </h2>
            <p className="text-gray-700 leading-relaxed text-center">
              {cloudData[0].description}
            </p>
          </section>

          {/* Dynamic Sections */}
          {cloudData.slice(1).map((section, index) => (
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
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-blue-50 p-4 rounded"
                      >
                        <h3 className="text-xl font-semibold text-blue-500 mb-2">
                          {service.title}
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {service.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
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

              {section.technologies && (
                <section className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    {section.title}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.technologies.map((tech, techIndex) => (
                      <div key={techIndex}>
                        <h3 className="font-semibold text-blue-500 mb-2">
                          {tech.title}
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {tech.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
              Start Your Cloud & DevOps Transformation
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Ready to accelerate your business with modern cloud infrastructure
              and DevOps practices? Contact our specialists today.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
              Get in Touch
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
