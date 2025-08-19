import { Link } from "react-router-dom";
import Card from "./temp_1";
import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import ContactPage from "./contact_details";

const tittle = "Our Cutting-Edge Native App Solutions";
const paragraph =
  "We deliver top-tier native app solutions, focusing on speed, reliability, and user satisfaction for your business.";
const data_2 = [
  {
    title: "Custom Native App Development",
    description:
      "Our team at Visvik recognizes the importance of customization tailored to the specific needs of a business to ensure high performance and seamless functionality. We provide custom native app development services for all types of businesses, delivering maximum results.",
  },
  {
    title: "iOS App Development",
    description:
      "We specialize in building intuitive and robust iOS apps. Our team leverages the iPhone operating system technologies to deliver a seamless experience for iPhone, iPad, and iWatch users. Build your application specifically for iOS users and enhance your online presence..",
  },
  {
    title: "Android App Development",
    description:
      "We design and develop feature-rich Android apps that provide exceptional user experiences. Our experts utilize Android’s native capabilities to ensure reliability and performance on a variety of devices. Build applications, particularly for Android devices, and widen your reach to your target audience.",
  },
  {
    title: "DevOps Automation Services",
    description:
      "Businesses can opt for our DevOps automation services to streamline repetitive tasks in their workplace. With automation, we help reduce errors in an organization, improve efficiency, and create scalable systems that align with businesses' evolving needs.",
  },
];
const data = [
  {
    img: "/pages_images/mobile.jpg",
    title: "Android App Development",
    desc: "Our team excels at building high-performance Android apps that cater to a vast user base.",
  },
  {
    img: "/pages_images/iot.jpg",
    title: "iOS App Development",
    desc: "We create scalable and feature-rich iOS applications that deliver seamless performance and an intuitive user experience.",
  },
  {
    img: "/pages_images/cross-platform.jpg",
    title: "Cross-Platform App Development",
    desc: "We build apps that deliver a native-like experience across iOS and Android with a single codebase.",
  },
  {
    img: "/pages_images/web-development.jpg",
    title: "Web App Development",
    desc: "We create fast, responsive, and modern web applications for all business needs.",
  },
  {
    img: "/pages_images/ux&ui.jpg",
    title: "UI/UX Design",
    desc: "We design engaging, intuitive, and user-friendly interfaces to boost customer satisfaction.",
  },
  {
    img: "/pages_images/app-management.jpg",
    title: "App Maintenance & Support",
    desc: "We ensure your apps run smoothly with ongoing maintenance, updates, and technical support.",
  },
];
const Native = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              High-Performance Native Application Development Solutions
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              Boost your business efficiency and drive growth with
              high-performance native app development solutions designed for
              optimal results. Our expertise lies in creating applications that
              are specifically tailored for Android and iOS platforms.
            </h4>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
                contact Now →
              </button>
            </Link>
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
          Build Scalable, High-Performance Native Apps for Android & iOS
        </h3>
        <p className="mb-4">
          Custom Native App Development Services by Visvik Visvik is a leading
          native app development company offering end-to-end solutions for
          Android and iOS platforms. In today’s digital-first world, native apps
          are essential for businesses to deliver seamless performance, improve
          customer engagement, increase sales, and stay competitive
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge technology with creative design to
          deliver intuitive and high-performing native-app applications. From
          concept to deployment, our team ensures every app is tailored to meet
          your business goals, enhance user satisfaction, and drive long-term
          growth in today’s competitive market.
        </p>

        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <Card data={data_2} paragraph={paragraph} tittle={tittle} />
      <div className="bg md:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="card-hover bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-16 w-auto mx-auto mb-4 object-contain rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactSection
        tittle="Want a robust application for iOS or Android?"
        paragraph="Our experts are here to create a top-tier app for your business, whether it's for an Android device or an iPhone."
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

export default Native;
