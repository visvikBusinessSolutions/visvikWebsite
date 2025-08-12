import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";

const tittle = "Our Suite of UI/UX Design Solutions";
const paragraph =
  "We offer a full spectrum of UI/UX solutions to create meaningful and engaging digital interactions, ranging from initial research and strategy to dynamic interface design, usability testing, and optimization.";
const data = [
  {
    title: "UI Design & Visual Branding",
    description:
      "We build interfaces that visually align with your brand’s identity and create memorable impressions on users",
  },
  {
    title: "UX Research & Strategy",
    description:
      "Our team conducts in-depth research and data analysis to understand user behavior and enhance user satisfaction and loyalty.",
  },
  {
    title: "Prototyping & Wireframing",
    description:
      "We create visual prototypes and wireframes to map user journeys, ensuring logical flow and intuitive navigation.",
  },
  {
    title: "Usability Testing & Optimization",
    description:
      "We provide continuous testing and optimization, guaranteeing a smooth and enjoyable user experience.",
  },
];
const UI = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Transform Your Ideas into Stunning UX & UI Designs
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and craft intuitive UX and UI experiences — helping
              businesses turn concepts into visually engaging and user-friendly
              digital products.
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
          Intuitive, Engaging UX & UI Designs for Web, Mobile & Beyond
        </h3>
        <p className="mb-4">
          UI/UX design goes beyond aesthetics; it focuses on creating meaningful
          interactions that resonate with users and align with your brand. With
          a dedicated team of UI/UX experts, we build functional, easy, and
          stunning visuals to ensure users engage effortlessly with your digital
          platform.
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

export default UI;
