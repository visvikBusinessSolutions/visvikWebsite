import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";

const tittle =
  "Delivering Advanced Video Streaming with Gen AI Through our Streaming Services";
const paragraph =
  "Explore our streaming services designed for seamless and engaging delivery and improve your audience’s experience.";
const data = [
  {
    title: "White-Label OTT",
    description:
      "Businesses can launch their own branded streaming platform with our white-label OTT services. We offer a fully customizable service that matches your business needs, enabling you to provide seamless video content delivery to your audience.",
  },
  {
    title: "Live Streaming",
    description:
      "Deliver real-time content to a global audience with our live-streaming services. We provide high-quality, low-latency solutions for events, webinars, and broadcasts across various platforms.",
  },
  {
    title: "eLearning App",
    description:
      "Enhance learning experiences with our eLearning app solutions. Stream live lessons, offer on-demand courses, and incorporate interactive features to foster better engagement and knowledge retention.",
  },
  {
    title: "Two-Way Streaming",
    description:
      "Enhance learning experiences with our eLearning app solutions. Stream live lessons, offer on-demand courses, and incorporate interactive features to foster better engagement and knowledge retention.",
  },
];
const Streamingsevices = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Delivering Seamless Streaming Experiences
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              Revolutionize your content delivery with advanced streaming
              services. We ensure secure, scalable, and seamless streaming
              experiences worldwide.
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
          Streaming Solutions for Web, Mobile & Beyond
        </h3>
        <p className="mb-4">
          Visvik is a leading streaming solutions provider offering end-to-end
          services for live, on-demand, and multi-platform streaming
          experiences. In today’s digital-first world, streaming services are
          essential for businesses to engage audiences, deliver high-quality
          content, and stay ahead in a competitive market.
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
export default Streamingsevices;
