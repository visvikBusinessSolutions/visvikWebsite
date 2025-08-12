import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";

const tittle = "Our Expertise in Digital Marketing Services";
const paragraph =
  "Boost traffic, enhance engagement, and achieve your business goals with our innovative digital marketing service offerings.";
const data = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Achieve top rankings on search engines and increase organic traffic with advanced on-page, off-page, and technical SEO solutions tailored to your industry.",
  },
  {
    title: "Pay-Per-Click Management Services",
    description:
      "Get instant results with our pay-per-click (PPC) advertising. We optimize campaigns across platforms like Google Ads and Bing Ads, LinkedIn, Quora, and X to deliver maximum ROI.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Businesses should utilize the power of social media platforms to build brand awareness, foster engagement, and create a loyal customer base.",
  },
  {
    title: "Content Marketing Services",
    description:
      "Tell your story with compelling content. We create blogs, videos, infographics, and more to attract, educate, and convert your audience.",
  },
];
const Digital_marketing = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Maximize Your Online Potential with Digital Marketing Solutions
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              Build your online brand presence in today's competitive digital
              landscape and generate revenue through effective digital marketing
              services.
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
          Your Partner in Digital Marketing Success
        </h3>
        <p className="mb-4">
          Visvik is a leading digital solutions company offering end-to-end
          services across web, mobile, and cross-platform technologies. In
          today’s digital-first world, innovative digital solutions are
          essential for businesses to enhance customer engagement, boost sales,
          and maintain a competitive edge.
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge technology with creative design to
          deliver intuitive and high-performing digital solutions. From concept
          to deployment, our team ensures every project is tailored to meet your
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

export default Digital_marketing;
