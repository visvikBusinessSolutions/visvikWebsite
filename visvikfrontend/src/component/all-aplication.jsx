import Application_card from "./application-card";
import { FaLaptopCode } from "react-icons/fa";
import { MdAppSettingsAlt } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Application = () => {
  useGSAP(() => {
    gsap.utils.toArray(".animate").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: i * 0.6,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".animate-right").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: i * 0.6,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
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
      animate: "animate",
    },
    {
      id: 2,
      icon: <MdAppSettingsAlt />,
      title: "Mobile app Development",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      animate: "animate",
    },
    {
      id: 3,
      icon: <MdAppSettingsAlt />,
      title: "Software Development",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      animate: "animate",
    },
    {
      id: 4,
      icon: <MdAppSettingsAlt />,
      title: "Digital marketing Services",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      animate: "animate",
    },
  ];
  const services2 = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Afiliated Marketing Services",
      description:
        "We empower our clients with dynamic, responsive website builds using PHP, Java, .NET, Wordpress, React JS, React Native, Drupal, CMS, and more — ensuring seamless performance, scalability, and user engagement.",
      animate: "animate-right",
    },
    {
      id: 2,
      icon: <MdAppSettingsAlt />,
      title: "SEM/SEM",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      animate: "animate-right",
    },
    {
      id: 3,
      icon: <MdAppSettingsAlt />,
      title: "Cloud & DevOps",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      animate: "animate-right",
    },
    {
      id: 4,
      icon: <MdAppSettingsAlt />,
      title: "Softwere Testing",
      description:
        "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
      animate: "animate-right",
    },
  ];
  return (
    <>
      <div className="text-center px-auto py-12 bg-white/80 relative">
        <h2 className="text-xl md:text-4xl font-extrabold text-orange-500 mb-6">
          Applicaton Development stages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="col-span-1 flex flex-col gap-4">
            {services.map((service) => (
              <Application_card
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                animate={service.animate}
              />
            ))}
          </div>
          <div className="col-span-1 flex justify-center items-center ">
            <img
              src="./headphone.jpg"
              alt="Top Services"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            {services2.map((service) => (
              <Application_card
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                animate={service.animate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Application;
