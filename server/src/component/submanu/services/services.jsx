import Category from "./Catagory";
import {
  FaAws,
  FaCloud,
  FaLock,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaTools,
  FaStream,
  FaBullhorn,
  FaNetworkWired,
  FaRobot,
  FaSitemap,
  FaCogs,
  FaShieldAlt,
  FaDraftingCompass,
  FaLaptopCode,
  FaDatabase,
  FaLaptop,
} from "react-icons/fa";

const ServicesGrid = () => {
  const data = [
    {
      title: "AI & Cloud",
      items: [
        { label: "AWS", icon: <FaAws size={20} />, href: "/aws" },
        {
          label: "Cybersecurity",
          icon: <FaShieldAlt size={20} />,
          href: "/cyber",
        },
        { label: "Gen AI", icon: <FaRobot size={20} />, href: "/aboutus" },
        {
          label: "Cloud Migration",
          icon: <FaCloud size={20} />,
          href: "/about",
        },
        {
          label: "Security & Compliance",
          icon: <FaLock size={20} />,
          href: "/about",
        },
        { label: "DevOps", icon: <FaTools size={20} />, href: "/aboutus" },
        {
          label: "DevSecOps",
          icon: <FaShieldAlt size={20} />,
          href: "/devops",
        },
        {
          label: "Cloud Architecture Review",
          icon: <FaSitemap size={20} />,
          href: "/aboutus",
        },
      ],
    },
    {
      title: "Design",
      items: [
        {
          label: "Mobile App Development",
          icon: <FaMobileAlt size={20} />,
          href: "/mobile",
        },
        {
          label: "Native App Development",
          icon: <FaLaptop size={20} />,
          href: "/app",
        },
        {
          label: "Software Development",
          icon: <FaCode size={20} />,
          href: "/software",
        },
        {
          label: "Cross Platform Development",
          icon: <FaLaptopCode size={20} />,
          href: "/cross_platform_development",
        },
        {
          label: "IOT Development",
          icon: <FaNetworkWired size={20} />,
          href: "/iot_development",
        },
        {
          label: "UI & UX Designing",
          icon: <FaPaintBrush size={20} />,
          href: "/ui&ux ",
        },
        {
          label: "Website Development",
          icon: <FaLaptopCode size={20} />,
          href: "/website",
        },
      ],
    },
    {
      title: "Digital & IT Solutions",
      items: [
        {
          label: "Digital Transformation",
          icon: <FaCogs size={20} />,
          href: "/aboutus",
        },
        {
          label: "Managed IT Services",
          icon: <FaNetworkWired size={20} />,
          href: "/aboutus",
        },
        {
          label: "Streaming Services",
          icon: <FaStream size={20} />,
          href: "/aboutus",
        },
        {
          label: "Digital Marketing Services",
          icon: <FaBullhorn size={20} />,
          href: "/aboutus",
        },
        {
          label: "Cloud Engineering",
          icon: <FaDatabase size={20} />,
          href: "/aboutus",
        },
      ],
    },
  ];

  return (
    <div className="absolute mega-menu left-1/2 md:pt-8 md:pr-20 p-4 z-50 transform -translate-x-1/2">
      <div className="bg-white shadow-md rounded">
        <div className="w-[750px] lg:w-[850px] mx-auto mt-3 bg-white p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-10">
            {data.map((category, idx) => (
              <Category
                key={idx}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
