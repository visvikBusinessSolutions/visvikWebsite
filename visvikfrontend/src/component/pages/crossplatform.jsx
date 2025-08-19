// import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";
import ContactPage from "./contact_details";
import { Link } from "react-router-dom";

const tittle = "End-to-End Cross-Platform Development Services";
const paragraph =
  "Our experts are focused on building high-quality, robust, and feature-rich applications that work across all platforms and provide a delightful user experience.";
const data = [
  {
    title: "Custom Cross-Platform App Development",
    description:
      "We offer custom cross-platform application development services that seamlessly run on both iOS and Android, ensuring consistent performance and a unified user experience, all while reducing development costs and time.",
  },
  {
    title: "Cross-Platform UX/UI Design",
    description:
      "We offer UI/UX design services for cross-platform applications that are intuitive and visually appealing. We aim to deliver a seamless experience across platforms to enhance user interaction and ensure consistency in app design across devices.",
  },
  {
    title: "Cross-Platform App Integration",
    description:
      "Our cross-platform app integration solution seamlessly integrates your existing application with third-party services, APIs, and backend systems to enhance functionality. We ensure that your application works seamlessly with other tools and systems to elevate the user experience.",
  },
  {
    title: "App Testing & Marketing",
    description:
      "Our team also delivers app testing and marketing services to all kinds of industries. They perform rigorous testing to ensure your app’s functionality, usability, and performance are flawless. Also, offers marketing efforts to enhance app visibility and user acquisition.",
  },
];
const Crossplatform = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Transform Your Ideas into Powerful Cross-Platform Apps
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              Empower your business with efficient cross-platform solutions that
              deliver seamless, high-performance apps across all devices.
            </h4>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
                contact Now →
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="./pages_images/crossplatform-banner.webp"
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
          Build Scalable, Engaging Cross-Platform Apps for Android, iOS & Beyond
        </h3>
        <p className="mb-4">
          Custom Mobile App Development Services by Visvik. Visvik is a leading
          mobile app development company offering end-to-end solutions for
          Android, iOS, and cross-platform applications. In today’s
          digital-first world, mobile apps are essential for businesses to
          improve customer engagement, increase sales, and stay competitive.
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
      {/* <div className="bg md:py-6">
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
      </div> */}
      <Card data={data} paragraph={paragraph} tittle={tittle} />
      <ContactSection
        tittle="Get Started with a Cross-Platform App Today!"
        paragraph="Our experts can bring your vision to life with high-quality and cost-effective solutions that work seamlessly across all platforms"
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

export default Crossplatform;
