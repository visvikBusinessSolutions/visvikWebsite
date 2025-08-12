import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";

const tittle = "Comprehensive Managed IT Services We Provide";
const paragraph =
  "We offer a full suite of managed IT services designed to enhance efficiency, security, and scalability for your business.";
const data = [
  {
    title: "IT Infrastructure Management",
    description:
      "we deliver the IT infrastructure management service to handle the overall management, monitoring, server maintenance, networks, and other IT infrastructure. We ensure that your business operates smoothly and efficiently",
  },
  {
    title: "Cloud Solutions",
    description:
      " offers robust cloud solutions that help businesses enhance scalability and flexibility. Whether you’re looking to migrate to the cloud or need ongoing support, we’re here to ensure that your cloud operations are optimized.",
  },
  {
    title: "Data Backup & Disaster Recovery",
    description:
      "We implement secure data backup strategies and disaster recovery solutions to protect your business from data loss, system failures, and unforeseen events, ensuring business continuity.",
  },
  {
    title: "Cybersecurity Services",
    description:
      "Security is our top priority. Our cybersecurity experts deploy advanced protection to safeguard your systems from threats, including malware, ransomware, and data breaches, ensuring your business remains secure.",
  },
];

const Manageitsevices = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Performance and Security with Managed IT Services
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              optimal performance and robust security with Managed IT Services.
              We offer proactive solutions, continuous monitoring, and expert
              support to safeguard and enhance your business operations.
            </h4>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
              contact Now →
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="./mobile-temp.png"
              alt="Mobile App Development Illustration"
              className="w-full max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div
        className="p-20 relative rounded-3xl my-2 text-white max-w-6xl mx-auto bg-cover bg-center bg-no-repeat shadow-lg"
        style={{
          backgroundImage: "url('./lines-bg.webp')",
        }}
      >
        <span className="absolute top-0 left-6 text-9xl text-left">“</span>
        <h3 className="md:text-4xl text-xl font-semibold mb-2">
          Implement IT Services Seamlessly by Partnering
        </h3>
        <p className="mb-4">
          In today’s fast-paced digital world, businesses rely on complex IT
          systems that need to be constantly managed, monitored, and optimized.
          Managed IT Services provide a cost-effective solution by outsourcing
          IT functions to experts, ensuring your infrastructure is secure,
          up-to-date, and scalable.
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge technology with creative design to
          deliver intuitive and high-performing mobile applications. From
          concept to deployment, our team ensures every app is tailored to meet
          your business goals, enhance user satisfaction, and drive long-term
          growth in today’s competitive market.
        </p>

        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <Card data={data} tittle={tittle} paragraph={paragraph} />
      <ContactSection />
      <div className="md:py-12 py-6">
        <div className="mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold pb-5">
            Our Application Development Methodology
          </h2>
        </div>
        <div className=" flex justify-center items-center w-full">
          <img
            src="/pages_images/backend.webp"
            alt="Lifecycle"
            loading="lazy"
            className="max-w-full  h-auto object-contain"
          />
        </div>
      </div>
      <TechTabs />
      <Temp_4 />
    </div>
  );
};
export default Manageitsevices;
