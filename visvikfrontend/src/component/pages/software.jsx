import { Link } from "react-router-dom";
import Card from "./temp_1";
import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import ContactPage from "./contact_details";

const tittle = "Our Comprehensive Software Development Solutions";
const paragraph =
  "We offer a range of software development solutions that empower businesses with custom, efficient, and future-ready applications for enhanced growth and performance.";
const data = [
  {
    title: "Custom Software Development",
    description:
      "We offer custom software development services designed to meet each unique business requirement to enhance efficiency, scalability, and competitiveness in today’s dynamic market.",
  },
  {
    title: "Web Application Development",
    description:
      "Our team delivers web application development services by leveraging modern technologies. We create responsive, secure, and scalable web applications that drive user engagement and elevate a business's online presence.",
  },
  {
    title: "Mobile Application Development",
    description:
      "We also build intuitive and high-performance mobile applications for Android, iOS, and cross-platform environments. Our main focus is to deliver a seamless user experience with the mobile application and expand your digital reach.",
  },
  {
    title: "DevOps Automation Services",
    description:
      "Businesses can opt for our DevOps automation services to streamline repetitive tasks in their workplace. With automation, we help reduce errors in an organization, improve efficiency, and create scalable systems that align with businesses' evolving needs.",
  },
];

// const content = {
//   Programming_Language: [
//     { name: "Nodejs", icon: "/svg_file/nodejs.svg" },
//     { name: "Firebase", icon: "/svg_file/firebase.svg" },
//     { name: "Aws", icon: "/icon/aws.svg" },
//   ],
//   Cloud: [
//     { name: "Php", icon: "/svg_file/php.svg" },
//     { name: "Kotlin", icon: "/svg_file/kotlin.svg" },
//     { name: "Java", icon: "/svg_file/java.svg" },
//     { name: "JavaScript", icon: "/svg_file/javascript.svg" },
//   ],
//   Frameworks: [
//     { name: "React", icon: "/svg_file/react.svg" },
//     { name: "Flutter", icon: "/svg_file/flutter.svg" },
//     { name: "Laravel", icon: "/svg_file/laravel.svg" },
//   ],
//   Database: [
//     { name: "MySQL", icon: "/svg_file/mysql.svg" },
//     { name: "MongoDB", icon: "/svg_file/mongo.svg" },
//     { name: "PostgreSQL", icon: "/svg_file/postgresql.svg" },
//   ],
// };
const Software = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Delivering Prominent Software Development Solutions for Modern
              Businesses
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              Businesses should embrace custom software development solutions to
              modernize operations, increase agility, and meet evolving customer
              demands
            </h4>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
              contact Now →
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="./pages_images/software-banner.png"
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
          Visvik-Driving Digital Growth with Advanced Software Solutions
        </h3>
        <p className="mb-4">
          At Visvik Business Solution LLP, we transform business challenges into
          powerful software solutions that drive efficiency, innovation, and
          growth. Our expert software development team combines technical
          excellence with strategic thinking to deliver custom applications that
          perfectly align with your unique business objectives and provide
          measurable value.
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge technology with innovative design
          to deliver intuitive and high-performing software solutions. From
          concept to deployment, our team ensures every product is tailored to
          meet your business goals, enhance user satisfaction, and drive
          long-term growth in today’s competitive market.
        </p>
        <div className="flex justify-center md:mt-6 mt-3">
          <Link
            to="/software-contant"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Learn More
          </Link>
        </div>
        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <Card data={data} tittle={tittle} paragraph={paragraph} />
      <ContactSection
        tittle="Searching for the Best Software Solutions? Your Search Ends Here!"
        paragraph="Partner with Visvik for your software development needs."
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

export default Software;
