import { FaLaptopCode } from "react-icons/fa"; // example icon
import { MdAppSettingsAlt } from "react-icons/md";
import ServiceCard from "./Cardcomp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contant = () => {
  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".animate-top",
  //     { y: -100, x: 0, opacity: 0 },
  //     {
  //       y: 0,
  //       x: 0,
  //       opacity: 1,
  //       duration: 2,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".animate-top",
  //         start: "top 40%",
  //         toggleActions: "play none none none",
  //       },
  //     }
  //   );
  // }, []);

  useGSAP(() => {
    gsap.utils.toArray(".animate-top").forEach((el) => {
      gsap.fromTo(
        el,
        { y: -100, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Website Development",
      description:
        "We empower our clients with dynamic, responsive website builds using PHP, Java, .NET, Wordpress, React JS, React Native, Drupal, CMS, and more — ensuring seamless performance, scalability, and user engagement.",
      link: "/website",
    },
    {
      id: 2,
      icon: <MdAppSettingsAlt />,
      title: "Mobile app Development",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      link: "/mobile",
    },
    {
      id: 3,
      icon: <MdAppSettingsAlt />,
      title: "Digital Marketing Services",
      description:
        "We craft data-driven digital marketing strategies that boost visibility, engage audiences, and drive scalable growth for your business across all online platforms.",
      link: "/digital_marketing-services",
    },
    {
      id: 4,
      icon: <MdAppSettingsAlt />,
      title: "Software Development",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      link: "/software",
    },
    {
      id: 5,
      icon: <MdAppSettingsAlt />,
      title: "IOT DEVELOPMENT",
      description:
        "We design and develop innovative IoT solutions — connecting devices, platforms, and applications to help businesses transform ideas into smart, data-driven digital experiences",
      link: "/iot_development",
    },
    {
      id: 6,
      icon: <MdAppSettingsAlt />,
      title: "UX & UI Designs",
      description:
        "We design and craft intuitive UX and UI experiences — helping businesses turn concepts into visually engaging and user-friendly digital products.",
      link: "/ui&ux",
    },
    {
      id: 7,
      icon: <MdAppSettingsAlt />,
      title: "Cloud & DevOps",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      link: "/cloud_engineering",
    },
    {
      id: 8,
      icon: <MdAppSettingsAlt />,
      title: "SEO/SEM",
      description:
        "Boost your website’s visibility with our SEO services. We optimize your site for higher rankings, increased traffic, and better conversions.",
      link: "/seo",
    },
  ];

  return (
    <div className="bg-[#deedff] py-12 px-4 text-center">
      <div className="text-blue-900 mb-10">
        <h2 className="text-xl md:text-4xl font-semibold">Service</h2>
        <p className="font-bold text-xl">
          Transforming Businesses with Cutting-Edge IT Services
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            className="animate-top"
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Contant;
