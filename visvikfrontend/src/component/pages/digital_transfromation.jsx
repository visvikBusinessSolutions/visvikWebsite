import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";
import ContactPage from "./contact_details";
import { Link } from "react-router-dom";

const tittle =
  "Unlock Your Potential with Our Digital Transformation Expertise";
const paragraph =
  "Seamlessly integrate advanced technologies, modernize operations, and foster innovation with our tailored digital transformation services designed to future-proof your business..";
const data = [
  {
    title: "Cloud Migration and Integration",
    description:
      "Enhance operational agility and scalability by securely migrating to the cloud and seamless integration systems. We provide the best cloud migration and integration solutions to ensure an uninterrupted experience for a resilient and future-ready infrastructure.",
  },
  {
    title: "Business Process Automation",
    description:
      "We provide businesses with solutions to modernize their outdated systems to compete effectively in the digital world. Agile platforms enhance performance, reduce risks, and decrease maintenance costs, ensuring long-term value for the business.",
  },
  {
    title: "Legacy System Modernization",
    description:
      "We provide businesses with solutions to modernize their outdated systems to compete effectively in the digital world. Agile platforms enhance performance, reduce risks, and decrease maintenance costs, ensuring long-term value for the business..",
  },
  {
    title: "Digital Customer Experience",
    description:
      "Deliver immersive and user-centric designs and interfaces by utilizing our digital customer experience solutions. We come up with personalized designs and seamless interactive interfaces to boost engagement and customer satisfaction.",
  },
];
const Digital_Transformation = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Lead the Future by Unleashing Digital Transformation
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              Elevate your business for the digital age with our comprehensive
              digital transformation solutions. We help organizations evolve,
              innovate, and thrive in an increasingly digital world.
            </h4>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
                contact Now →
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="./pages_images/digitaltrans-banner.png"
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
          Your Partner in Revolutionizing Business Through Digital Evolution
        </h3>
        <p className="mb-4">
          Digital transformation is much more than just an upgrade; it’s an
          essential strategy for remaining competitive in today’s market. By
          utilizing technology, data, and automation, organizations can grow
          efficiently and rule in the digital landscape.
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

      <ContactSection
        tittle="Ready to Redefine Your Business? Reach Out for Consultation."
        paragraph="We offer a combination of solutions to kickstart your digital transformation journey."
      />
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
      <ContactPage />
    </div>
  );
};
export default Digital_Transformation;
