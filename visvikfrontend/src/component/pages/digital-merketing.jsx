// import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";
import { Link } from "react-router-dom";
import ContactPage from "./contact_details";

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
              Lead the Future by Unleashing Digital Transformation with Us
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
              src="./pages_images/digitalmarketing-banner.png"
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
        <h3 className="md:text-4xl text-xl font-semibold mb-2 text-center">
          Your Partner in Revolutionizing Business Through Digital Evolution
        </h3>
        <p className="mb-4">
          At Visvik Business Solution LLP, we understand that in today's
          hyperconnected world, a strong digital presence is not just an
          advantage—it's essential. Our comprehensive digital marketing services
          combine data-driven strategies, creative excellence, and cutting-edge
          technology to help your business thrive in the competitive digital
          marketplace. Whether you're looking to increase brand awareness,
          generate quality leads, or boost conversions, our expert team delivers
          customized digital marketing solutions that drive measurable results
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge technology with creative design to
          deliver intuitive and high-performing digital solutions. From concept
          to deployment, our team ensures every project is tailored to meet your
          business goals, enhance user satisfaction, and drive long-term growth
          in today’s competitive market.
        </p>
        <div className="flex justify-center md:mt-6 mt-3">
          <Link
            to="/digital-contant"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Learn More
          </Link>
        </div>
        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <Card data={data} tittle={tittle} paragraph={paragraph} />
      <ContactSection
        tittle="Start Your Digital Marketing Journey- Connect with Us Now!"
        paragraph="Our digital marketing specialists can improve your online presence, even if you are starting from scratch"
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
      <Temp_4 />
      <ContactPage />
    </div>
  );
};

export default Digital_marketing;
