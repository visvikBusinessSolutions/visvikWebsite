import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";

const tittle = "AWS powers our Cloud Engineering Services";
const paragraph =
  "our cloud engineers specialize in creating robust, high-performance cloud infrastructures. Here’s how we elevate your business";
const data = [
  {
    title: "Cloud Consulting",
    description:
      "With our cloud consulting service, we build cloud blueprints for businesses to meet their goals. The blueprint is based on an analysis of the current business infrastructure, core areas of improvement, and design.",
  },
  {
    title: "Cloud Migration",
    description:
      "Our cloud migration service is designed to ensure smooth transitions and secure data transfer with minimum impact on business operations. The service includes everything from legacy system assessment to complete cloud-native transformation.",
  },
  {
    title: "Cloud Security Services",
    description:
      "Our cloud services fulfill all security requirements and offer real-time threat monitoring with intrusion detection. Safeguard your data and applications, and ensure your infrastructure complies with the latest regulatory requirements with advanced cloud services measures.",
  },
  {
    title: "Cloud-Native Application Development",
    description:
      "We have expertise in building applications for the cloud environment, which are designed to be flexible, scalable, and easy to manage. Our cloud-native apps are optimized for seamless deployment and continuous improvement.",
  },
];

const Cloudservices = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Your Ideas into Powerful Cloud Services
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and develop custom cloud solutions and platforms —
              helping businesses turn ideas into scalable, secure, and
              innovative digital services.
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
          Build Scalable, Reliable Cloud Solutions for Today & Tomorrow
        </h3>
        <p className="mb-4">
          Visvik is a leading cloud solutions provider offering end-to-end
          services for cloud infrastructure, application deployment, and
          cross-platform integrations. In today’s digital-first world, cloud
          services are essential for businesses to enhance scalability, optimize
          operations, and maintain a competitive edge.
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge technology with innovative design
          to deliver intuitive and high-performing cloud solutions. From concept
          to deployment, our team ensures every service is tailored to meet your
          business goals, enhance user satisfaction, and drive long-term growth
          in today’s competitive market.
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
export default Cloudservices;
