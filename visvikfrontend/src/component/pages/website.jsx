import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";
import Card from "./temp_1";

const tittle = "Development Expertise";
const paragraph =
  "Website frontend development services that are designed to cater to various business needs and requirements..";
const data_2 = [
  {
    title: "Custom Web Application Development",
    description:
      "Work with the latest front-end technologies to create eye-pleasing and responsive user experiences. Combine your ideas and vision with expert development capabilities to deliver goal-driven solutions",
  },
  {
    title: "Progressive Web Application (PWA) Development",
    description:
      "Enhance customer engagement by creating intuitive and engaging user interfaces that work consistently across multiple devices. Make readily accessible content to hook your users at one go and increase conversions",
  },
  {
    title: "Legacy Frontend Modernization",
    description:
      "Our vetted front end developers complement the power of your web app with an equally appealing and intuitive user interface that converts potential leads into customers and boost the growth funnel.",
  },
  {
    title: "Responsive and Mobile-First Design",
    description:
      "Our single page app development services revolve around using the best front-end technologies and development methodologies. Build power-packed SPAs with modern features and game-changing functionalities",
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
const Website = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Your Ideas into Powerful Websites
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and develop custom websites — helping businesses turn
              ideas into innovative digital experiences.
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
          Build Scalable, Engaging Websites that Deliver Performance & Reach
          Globally
        </h3>
        <p className="mb-4">
          Custom Website Development Services by Visvik Visvik is a leading web
          development company offering end-to-end solutions for dynamic,
          responsive, and high-performing websites. In today’s digital-first
          world, a strong online presence is essential for businesses to boost
          brand visibility, drive sales, and stay ahead of the competition.
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
      <Card data={data_2} tittle={tittle} paragraph={paragraph} />
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

export default Website;
