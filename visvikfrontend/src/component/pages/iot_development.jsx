import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";

const tittle = "Our Smart IoT Solutions Built for Your Business";
const paragraph =
  "Bridge the gap between devices and data with our IoT solutions designed exclusively for your business operations.";
const data = [
  {
    title: "IoT Consultancy",
    description:
      "Our IoT consultancy service guides businesses to clearly define IoT strategy, identify growth opportunities, and implement customized solutions for maximum efficiency and growth.",
  },
  {
    title: "IoT Solutions",
    description:
      "We deliver end-to-end IoT solutions that connect devices, streamline operations, and deliver actionable insights to enhance productivity and decision-making. Our team uses adaptable strategies to assist you in getting the right IoT solution.",
  },
  {
    title: "IoT Architecture Development",
    description:
      "We design robust IoT architectures that ensure seamless integration, scalability, and secure communication between devices, systems, and networks. Our team manages every element of the development stage, from UI/UX to architecture design..",
  },
  {
    title: "IoT Testing",
    description:
      "Our IoT testing service ensures flawless performance, security, and reliability of IoT systems through comprehensive testing across devices, networks, and platforms.",
  },
];
const Iotdevelopment = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Next-Gen IoT Development for Digital
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and develop innovative IoT solutions — connecting
              devices, platforms, and applications to help businesses transform
              ideas into smart, data-driven digital experiences.
            </h4>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
              contact Now →
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="./pages_images/iot-banner.png"
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
          Integrating IoT Solutions for Empowering your Business
        </h3>
        <p className="mb-4">
          In today’s digital era, where everything is accessible online, people
          increasingly depend on technology for their day-to-day activities.
          This shift makes it crucial for businesses to adopt IoT to remain
          competitive in the evolving market. The Internet of Things (IoT)
          seamlessly connects devices, systems, and people, enabling real-time
          data exchange and empowering smarter, faster decision-maki
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

export default Iotdevelopment;
