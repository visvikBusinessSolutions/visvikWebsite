import { Link } from "react-router-dom";
import Card from "./temp_1";
import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import ContactPage from "./contact_details";

const tittle = "Our Versatile DevOps Offerings for Seamless Delivery";
const paragraph =
  "Elevate development efficiency with robust DevOps services, focusing on CI/CD, infrastructure automation, and proactive monitoring..";
const data = [
  {
    title: "DevOps Consulting Services",
    description:
      "We offer DevOps consulting services to businesses in all domains, from media to education. We help them identify inefficiencies and implement customized strategies to streamline workflows. Our experts ensure improved collaboration, faster deployments, and robust operational frameworks.",
  },
  {
    title: "DevOps Implementation",
    description:
      "We specialize in end-to-end DevOps implementation, integrating advanced tools, automation, and methodologies to optimize development and operations. Our solutions ensure seamless collaboration, improved scalability, and faster software delivery tailored to your business requirements..",
  },
  {
    title: "DevOps CI/CD Services",
    description:
      "Businesses can accelerate their development lifecycle with our CI/CD services. From building pipelines to automated testing and deployment, we enable error-free, continuous delivery for better productivity. Our service enhances agility and reduces time to market..",
  },
  {
    title: "DevOps Automation Services",
    description:
      "Businesses can opt for our DevOps automation services to streamline repetitive tasks in their workplace. With automation, we help reduce errors in an organization, improve efficiency, and create scalable systems that align with businesses' evolving needs.",
  },
];
const Devops = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Transform Your Ideas into Efficient, Automated DevOps Solutions
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and implement custom DevOps pipelines and automation
              workflows — helping businesses turn ideas into reliable, scalable,
              and efficient delivery solutions
            </h4>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
                contact Now →
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="./pages_images/devops-banner.png"
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
          Build Scalable, Reliable DevOps Pipelines for Continuous Integration,
          Delivery & Beyond
        </h3>
        <p className="mb-4">
          Visvik is a leading DevOps solutions provider offering end-to-end
          services for continuous integration, continuous delivery, and
          infrastructure automation. In today’s fast-paced digital world, DevOps
          is essential for businesses to accelerate software delivery, improve
          collaboration between teams, and stay competitive.
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge automation tools with proven DevOps
          practices to deliver reliable, scalable, and high-performing software
          solutions. From planning to deployment, our team ensures every
          pipeline, infrastructure setup, and workflow is tailored to meet your
          business goals, enhance operational efficiency, and drive long-term
          growth in today’s competitive technology landscape.
        </p>
        <div className="flex justify-center md:mt-6 mt-3">
          <Link
            to="/devops-contant"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Learn More
          </Link>
        </div>
        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <Card data={data} tittle={tittle} paragraph={paragraph} />
      <ContactSection
        tittle="Looking to Accelerate your Development and Delivery Process? Let’s Connect!"
        paragraph="Our team excels in implementing robust DevOps strategies that drive success."
      />
      <div className="md:py-12 py-6">
        <div className="mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold pb-5">
            Our Application Development Methodology
          </h2>
        </div>
        <div className=" flex justify-center items-center w-full">
          <img
            src="/pages_images/devops-methodology.webp"
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

export default Devops;
