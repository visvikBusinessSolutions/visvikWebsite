import { Link } from "react-router-dom";
import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import ContactPage from "./contact_details";

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
];
const data_2 = [
  {
    title: "Mobile App Consulting",
    desc: "We provide expert guidance on app strategy, technology selection, and market fit to ensure your mobile application aligns with business goals and user expectations.",
  },
  {
    title: "Custom Mobile App Development",
    desc: "Our team builds tailored mobile applications with advanced features, scalability, and seamless performance to meet your unique business requirements and enhance customer engagement.",
  },
  {
    title: "Mobile App UI/UX Design",
    desc: "We craft intuitive, visually appealing, and user-friendly interfaces that enhance engagement and ensure an exceptional user experience across all mobile devices and platforms.",
  },
  {
    title: "MVP Development",
    desc: "Validate your app idea with a Minimum Viable Product (MVP) featuring core functionalities to test market demand and refine features before full-scale development.",
  },
  {
    title: "Mobile App Modernization",
    desc: "Upgrade and optimize your existing mobile applications with the latest technologies, improved performance, and enhanced UI/UX to meet evolving user needs and industry trends.",
  },
  {
    title: "Mobile App Maintenance & Support",
    desc: "We offer mobile app maintenance and support services to ensure your app runs smoothly and efficiently. This includes continuous monitoring, performance optimization, security updates, and feature enhancements.",
  },
];

const content = {
  "Backend & Cloud Services": [
    { name: "Nodejs", icon: "/svg_file/nodejs.svg" },
    { name: "Firebase", icon: "/svg_file/firebase.svg" },
    { name: "Aws", icon: "/icon/aws.svg" },
  ],
  Language: [
    { name: "Php", icon: "/svg_file/php.svg" },
    { name: "Kotlin", icon: "/svg_file/kotlin.svg" },
    { name: "Java", icon: "/svg_file/java.svg" },
    { name: "JavaScript", icon: "/svg_file/javascript.svg" },
  ],
  Frameworks: [
    { name: "React", icon: "/svg_file/react.svg" },
    { name: "Flutter", icon: "/svg_file/flutter.svg" },
    { name: "Laravel", icon: "/svg_file/laravel.svg" },
  ],
  Database: [
    { name: "MySQL", icon: "/svg_file/mysql.svg" },
    { name: "MongoDB", icon: "/svg_file/mongo.svg" },
    { name: "PostgreSQL", icon: "/svg_file/postgresql.svg" },
  ],
};
const Mobile = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Transform Your Ideas into Powerful Mobile Apps
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and develop custom mobile applications for Android, iOS,
              and cross-platform — helping businesses turn ideas into innovative
              digital solutions.
            </h4>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
                contact Now →
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="./pages_images/mobile-banner.png"
              alt="Mobile App Development Illustration"
              className="w-full max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div
        className="md:p-20 p-11 relative rounded-3xl my-2 text-white max-w-6xl mx-auto bg-cover bg-center bg-no-repeat shadow-lg"
        style={{
          backgroundImage: "url('./lines-bg.webp')",
        }}
      >
        <span className="absolute top-0 left-6 text-9xl text-left">“</span>
        <h3 className="md:text-4xl text-xl font-semibold mb-2 text-center">
          Visvik-Your Partner in Crafting Innovative Mobile Applications
        </h3>
        <p className="mb-4">
          At Visvik Business Solution LLP, we understand that mobile
          applications have become the cornerstone of digital strategy for
          modern businesses. Our expert mobile app development team creates
          innovative, high-performance applications that engage users, solve
          complex problems, and drive business growth across platforms and
          industries.
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge technology with creative design to
          deliver intuitive and high-performing mobile applications. From
          concept to deployment, our team ensures every app is tailored to meet
          your business goals, enhance user satisfaction, and drive long-term
          growth in today’s competitive market.
        </p>
        <div className="flex justify-center md:mt-6 mt-3">
          <Link
            to="/mobile-contant"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Learn More
          </Link>
        </div>
        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <div className="bg-gray-50 md:py-12 py-8">
        <div className="flex flex-col items-center justify-center text-center px-4 mb-10">
          <h2 className="text-2xl md:text-4xl font-bold max-w-2xl text-gray-800 leading-snug">
            Empowering Your Business with Custom Mobile Solutions
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            Our tailored mobile solutions are designed to meet your specific
            needs, whether you aim to enhance customer engagement, streamline
            internal operations, or generate new revenue streams.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="card-hover bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
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
      {/* div there start */}

      <div className="bg-gray-50 md:py-10 py-6">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Comprehensive Mobile Application Development Solutions
          </h2>
          <p className="text-gray-600">
            We offer comprehensive mobile app development services, delivering
            custom, scalable, and user-friendly solutions for iOS, Android, and
            cross-platform needs.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {data_2.map((item, idx) => (
            <div
              key={idx}
              className="card-hover bg-[#f8fbfd] rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-800 md:mb-10 mb-6">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ContactSection
        tittle="Ready to Build the Perfect Mobile App for Your Business? Let’s Talk!"
        paragraph="Our experts will seamlessly guide you with the mobile application development process and help you boost your customer engagement"
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
      <TechTabs
        content={content}
        tittle="Empowering Your Mobile App with Advanced Tools & Technologies"
        para="We stay ahead of the curve by using the latest tools and technologies in mobile app development.."
      />
      <Temp_4 />
      <ContactPage />
    </div>
  );
};

export default Mobile;
